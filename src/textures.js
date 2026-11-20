// Texturas procedurais (sem arquivos externos) para a Terra e a Lua.
import * as THREE from 'three';

function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Ruído 3D por valor, amostrado na esfera para não ter emenda nos polos.
function makeNoise3(seed) {
  const rnd = mulberry32(seed);
  const perm = new Uint8Array(512);
  const vals = new Float32Array(256);
  for (let i = 0; i < 256; i++) { perm[i] = i; vals[i] = rnd(); }
  for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  for (let i = 0; i < 256; i++) perm[i + 256] = perm[i];
  const h = (x, y, z) => vals[perm[perm[perm[x & 255] + (y & 255)] + (z & 255)]];
  const s = (t) => t * t * (3 - 2 * t);
  const lerp = (a, b, t) => a + (b - a) * t;
  return (x, y, z) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z);
    const xf = s(x - xi), yf = s(y - yi), zf = s(z - zi);
    return lerp(
      lerp(lerp(h(xi, yi, zi), h(xi + 1, yi, zi), xf), lerp(h(xi, yi + 1, zi), h(xi + 1, yi + 1, zi), xf), yf),
      lerp(lerp(h(xi, yi, zi + 1), h(xi + 1, yi, zi + 1), xf), lerp(h(xi, yi + 1, zi + 1), h(xi + 1, yi + 1, zi + 1), xf), yf),
      zf);
  };
}

function fbm(noise, x, y, z, oct = 6) {
  let a = 0.5, f = 1, sum = 0, norm = 0;
  for (let i = 0; i < oct; i++) { sum += a * noise(x * f, y * f, z * f); norm += a; a *= 0.5; f *= 2.03; }
  return sum / norm;
}

function equirect(w, h, fn) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d');
  const img = ctx.createImageData(w, h);
  for (let j = 0; j < h; j++) {
    const lat = Math.PI * (0.5 - (j + 0.5) / h);
    for (let i = 0; i < w; i++) {
      const lon = 2 * Math.PI * ((i + 0.5) / w) - Math.PI;
      const x = Math.cos(lat) * Math.cos(lon), y = Math.sin(lat), z = Math.cos(lat) * Math.sin(lon);
      const [r, g, b, a = 255] = fn(x, y, z, lat);
      const k = (j * w + i) * 4;
      img.data[k] = r; img.data[k + 1] = g; img.data[k + 2] = b; img.data[k + 3] = a;
    }
  }
  ctx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  return tex;
}

export function earthTexture() {
  const n = makeNoise3(7);
  return equirect(2048, 1024, (x, y, z, lat) => {
    const e = fbm(n, x * 2.2 + 10, y * 2.2, z * 2.2);
    const polar = Math.abs(lat) > 1.22 + 0.08 * fbm(n, x * 8, y * 8, z * 8, 3);
    if (polar) return [235, 242, 250];
    if (e < 0.52) {
      const d = (0.52 - e) * 3;
      return [10 + 20 * (1 - d), 45 + 50 * (1 - d), 110 + 60 * (1 - d)];
    }
    const hgt = (e - 0.52) * 4;
    const dry = fbm(n, x * 5 + 40, y * 5, z * 5, 4);
    const desert = Math.abs(lat) < 0.55 && dry > 0.55;
    if (hgt > 0.55) return [130, 120, 105];
    if (desert) return [196, 170, 120];
    return [40 + 60 * hgt, 100 + 30 * hgt, 40 + 20 * hgt];
  });
}

export function cloudTexture() {
  const n = makeNoise3(21);
  return equirect(1024, 512, (x, y, z) => {
    const c = fbm(n, x * 3 + 5, y * 6, z * 3, 5);
    const a = Math.max(0, Math.min(1, (c - 0.5) * 3.2));
    return [255, 255, 255, a * 230];
  });
}

export function moonTexture() {
  const n = makeNoise3(3);
  const rnd = mulberry32(99);
  const craters = [];
  for (let i = 0; i < 260; i++) {
    const u = rnd() * 2 - 1, th = rnd() * Math.PI * 2, s = Math.sqrt(1 - u * u);
    craters.push([s * Math.cos(th), u, s * Math.sin(th), 0.02 + Math.pow(rnd(), 3) * 0.18]);
  }
  return equirect(1024, 512, (x, y, z) => {
    let v = 0.55 + 0.3 * (fbm(n, x * 4, y * 4, z * 4) - 0.5);
    const maria = fbm(n, x * 1.5 + 3, y * 1.5, z * 1.5, 4);
    if (maria > 0.56) v -= 0.18;
    for (const [cx, cy, cz, r] of craters) {
      const d = Math.acos(Math.min(1, x * cx + y * cy + z * cz)) / r;
      if (d < 1.15) v += d < 0.85 ? -0.08 * (1 - d) : 0.12 * (1 - Math.abs(d - 1) / 0.15);
    }
    const g = Math.max(0, Math.min(255, v * 255));
    return [g, g, g * 0.97];
  });
}
