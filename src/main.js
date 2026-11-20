import * as THREE from 'three';
import { earthTexture, cloudTexture, moonTexture } from './textures.js';
import { scene1 } from './scenes.js';

// Escala: 1 unidade = raio da Terra (6.371 km). Distâncias da Lua são
// comprimidas visualmente; o texto mostra o valor real.
const params = new URLSearchParams(location.search);
const W = Number(params.get('w')) || innerWidth;
const H = Number(params.get('h')) || innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(params.has('w') ? 1 : devicePixelRatio);
renderer.setSize(W, H);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, W / H, 0.05, 2000);

// Sol
const sun = new THREE.DirectionalLight(0xffffff, 3.2);
sun.position.set(50, 8, 30);
scene.add(sun, new THREE.AmbientLight(0x223344, 0.25));

// Estrelas
{
  const g = new THREE.BufferGeometry();
  const pos = [];
  let s = 12345;
  const r = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 6000; i++) {
    const u = r() * 2 - 1, th = r() * Math.PI * 2, q = Math.sqrt(1 - u * u);
    pos.push(900 * q * Math.cos(th), 900 * u, 900 * q * Math.sin(th));
  }
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  scene.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false })));
}

// Terra
const earth = new THREE.Group();
scene.add(earth);
const earthMesh = new THREE.Mesh(
  new THREE.SphereGeometry(1, 128, 64),
  new THREE.MeshStandardMaterial({ map: earthTexture(), roughness: 0.8, metalness: 0 })
);
earthMesh.rotation.z = THREE.MathUtils.degToRad(23.4);
const clouds = new THREE.Mesh(
  new THREE.SphereGeometry(1.012, 96, 48),
  new THREE.MeshStandardMaterial({ map: cloudTexture(), transparent: true, depthWrite: false })
);
earthMesh.add(clouds);
earth.add(earthMesh);

// Atmosfera (brilho na borda)
earth.add(new THREE.Mesh(
  new THREE.SphereGeometry(1.06, 64, 32),
  new THREE.ShaderMaterial({
    transparent: true, side: THREE.BackSide, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix*vec4(position,1.); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,
    fragmentShader: `varying vec3 vN; varying vec3 vV;
      void main(){ float f = pow(1. - abs(dot(vN, vV)), 3.); gl_FragColor = vec4(0.35,0.6,1.,1.)*f*1.4; }`,
  })
));

// Bojo de maré: casca de água esticada na direção da Lua
const tide = new THREE.Mesh(
  new THREE.SphereGeometry(1.0, 128, 64),
  new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { k: { value: 0 }, opacity: { value: 0 }, sunDir: { value: new THREE.Vector3(50, 8, 30).normalize() } },
    vertexShader: `uniform float k; varying float vA; varying vec3 vN;
      void main(){ vec4 wp = modelMatrix*vec4(position,1.); float r = length(wp.xyz);
        vA = smoothstep(1.0, 1.0 + 0.7*k, r); vN = normalize(mat3(modelMatrix)*normal);
        gl_Position = projectionMatrix*viewMatrix*wp; }`,
    fragmentShader: `uniform float opacity; uniform vec3 sunDir; varying float vA; varying vec3 vN;
      void main(){ float d = max(dot(normalize(vN), sunDir), 0.)*0.9 + 0.12;
        gl_FragColor = vec4(vec3(0.16,0.45,0.9)*d, vA*opacity); }`,
  })
);
earth.add(tide);

// Lua (raio real = 0,273 raio da Terra)
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(0.273, 96, 48),
  new THREE.MeshStandardMaterial({ map: moonTexture(), roughness: 1 })
);
scene.add(moon);

// Linha da órbita
const orbit = new THREE.Line(
  new THREE.BufferGeometry(),
  new THREE.LineBasicMaterial({ color: 0x88aaff, transparent: true, opacity: 0 })
);
scene.add(orbit);
function setOrbitRadius(r) {
  const pts = [];
  for (let i = 0; i <= 256; i++) { const a = (i / 256) * Math.PI * 2; pts.push(new THREE.Vector3(Math.cos(a) * r, 0, Math.sin(a) * r)); }
  orbit.geometry.setFromPoints(pts);
}

const titleEl = document.querySelector('#caption .title');
const subEl = document.querySelector('#caption .sub');
const capEl = document.getElementById('caption');
const hudEl = document.getElementById('hud');

const world = { THREE, scene, camera, earth, earthMesh, clouds, tide, moon, orbit, setOrbitRadius };

let lastCaption = '';
function applyState(st) {
  camera.position.copy(st.cam);
  camera.lookAt(st.look);
  const key = st.title + '|' + st.sub;
  if (key !== lastCaption) { titleEl.textContent = st.title; subEl.textContent = st.sub; lastCaption = key; }
  capEl.style.opacity = st.captionOpacity;
  hudEl.textContent = st.hud || '';
}

const timeline = scene1;
window.DURATION = timeline.duration;
window.renderAt = (t) => {
  applyState(timeline.update(world, t));
  renderer.render(scene, camera);
};

if (!params.has('render')) {
  const t0 = performance.now();
  const loop = () => {
    const t = ((performance.now() - t0) / 1000) % timeline.duration;
    window.renderAt(t);
    requestAnimationFrame(loop);
  };
  loop();
}
window.READY = true;
