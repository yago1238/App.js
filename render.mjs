// Renderiza a animação quadro a quadro e gera um MP4 com ffmpeg.
// Uso: node render.mjs [saida.mp4] [fps] [largura] [altura]
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { extname, join, normalize } from 'node:path';

const [out = 'out/lua.mp4', fps = '30', w = '1920', h = '1080'] = process.argv.slice(2);
const root = process.cwd();
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript' };

const server = createServer(async (req, res) => {
  try {
    const p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
    const body = await readFile(join(root, p || 'index.html'));
    res.writeHead(200, { 'content-type': types[extname(p)] || 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +w, height: +h } });
page.on('pageerror', (e) => console.error('page error:', e));
await page.goto(`http://localhost:${port}/index.html?render&w=${w}&h=${h}`);
await page.waitForFunction(() => window.READY === true, null, { timeout: 120000 });
const duration = await page.evaluate(() => window.DURATION);
const frames = Math.round(duration * +fps);

await import('node:fs').then((fs) => fs.mkdirSync(join(root, out, '..'), { recursive: true }));
const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-framerate', fps, '-i', '-', '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });

for (let i = 0; i < frames; i++) {
  await page.evaluate((t) => window.renderAt(t), i / +fps);
  const buf = await page.screenshot({ type: 'png' });
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
  if (i % 30 === 0) console.log(`quadro ${i}/${frames}`);
}
ff.stdin.end();
await new Promise((r) => ff.on('close', r));
await browser.close();
server.close();
console.log('pronto:', out);
