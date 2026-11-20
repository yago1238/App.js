# E se a Lua chegasse perto da Terra? (vídeo 3D)

Animação em three.js, renderizada quadro a quadro em MP4.

- Ver ao vivo: sirva a pasta (ex.: `npx serve .`) e abra `index.html`.
- Gerar o vídeo: `npm install` e depois `node render.mjs out/lua.mp4 30 1920 1080` (precisa de Playwright e ffmpeg).

Cenas em `src/scenes.js`. Texturas da Terra e da Lua são geradas no código (`src/textures.js`).
Escala: 1 unidade = raio da Terra; a distância da Lua é comprimida na imagem e o valor real aparece no texto.
