// Linha do tempo das cenas. Cada cena tem duration e update(world, t),
// que posiciona os objetos e devolve câmera e legendas daquele instante.

const smooth = (a, b, t) => { const x = Math.min(1, Math.max(0, (t - a) / (b - a))); return x * x * (3 - 2 * x); };
const fade = (t, a, b, f = 0.8) => Math.min(smooth(a, a + f, t), 1 - smooth(b - f, b, t));

function blendShots(THREE, shots, t, blend = 1.6) {
  // shots: [{ start, cam: Vector3, look: Vector3 }] em ordem
  let i = 0;
  while (i + 1 < shots.length && t >= shots[i + 1].start) i++;
  const cur = shots[i];
  const prev = shots[i - 1];
  if (!prev) return { cam: cur.cam.clone(), look: cur.look.clone() };
  const k = smooth(cur.start, cur.start + blend, t);
  return {
    cam: new THREE.Vector3().lerpVectors(prev.cam, cur.cam, k),
    look: new THREE.Vector3().lerpVectors(prev.look, cur.look, k),
  };
}

// Cena 1: hoje. Lua a 384.400 km, órbita normal, marés pequenas.
export const scene1 = {
  duration: 16,
  update(w, t) {
    const { THREE } = w;
    const R = 14; // distância visual (comprimida) da Lua
    const a = 0.9 + t * 0.16;
    const moonDir = new THREE.Vector3(Math.cos(a), 0, Math.sin(a));
    w.moon.position.copy(moonDir).multiplyScalar(R);
    w.moon.rotation.y = -a; // mesma face voltada para a Terra

    w.earthMesh.rotation.order = 'ZYX';
    w.earthMesh.rotation.y = t * 0.25;
    w.clouds.rotation.y = t * 0.03;

    w.setOrbitRadius(R);
    w.orbit.material.opacity = 0.55 * fade(t, 4.5, 11);

    const k = 0.12 * smooth(10, 12, t); // bojo exagerado para ser visível
    w.tide.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), moonDir);
    w.tide.scale.set(1 + k, 1 - k / 2, 1 - k / 2);
    w.tide.material.uniforms.k.value = k;
    w.tide.material.uniforms.opacity.value = 0.85 * smooth(10, 12, t);

    const a0 = 0.9;
    const mid = new THREE.Vector3(Math.cos(a0), 0, Math.sin(a0)).multiplyScalar(R / 2);
    const perp = new THREE.Vector3(Math.sin(a0), 0, -Math.cos(a0)); // lado iluminado pelo Sol
    const sunDir = new THREE.Vector3(50, 8, 30).normalize();

    const shot = blendShots(THREE, [
      { start: 0, cam: mid.clone().addScaledVector(perp, 19).add(new THREE.Vector3(0, 3, 0)), look: mid },
      { start: 1.5, cam: mid.clone().addScaledVector(perp, 15).add(new THREE.Vector3(0, 4, 0)), look: mid },
      { start: 5, cam: new THREE.Vector3(0, 34, -20), look: new THREE.Vector3(0, -1, -1) },
      { start: 10, cam: new THREE.Vector3(sunDir.x * 1.2, 4.6, sunDir.z * 1.2), look: new THREE.Vector3(0, 0, 0) },
    ], t, 2.2);

    let title = '', sub = '', op = 0;
    if (t < 4.6) { title = 'E se a Lua chegasse perto da Terra?'; sub = 'Uma viagem em 3D'; op = fade(t, 0.3, 4.6); }
    else if (t < 10) { title = 'Hoje'; sub = 'A Lua orbita a cerca de 384.000 km da Terra'; op = fade(t, 5, 10); }
    else { title = 'As marés'; sub = 'A gravidade da Lua estica os oceanos em dois bojos (efeito exagerado)'; op = fade(t, 10.8, 16.2); }

    return {
      cam: shot.cam, look: shot.look, title, sub, captionOpacity: op,
      hud: t > 5 ? 'Distância Terra–Lua: 384.400 km' : '',
    };
  },
};
