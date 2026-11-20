# E se a Lua chegasse perto da Terra: roteiro e ficha de cena

## Roteiro

1. E se você puxasse a Lua pra bem pertinho da Terra? *(gancho)*
2. Se você quer uma Lua gigante no céu, puxa ela até a metade do caminho.
3. Ela fica duas vezes maior, linda de ver.
4. Mas aí o mar sobe e invade a praia.
5. A Lua puxa a água do oceano pra perto dela.
6. Na metade do caminho, esse puxão fica oito vezes mais forte.
7. Esse é o *efeito de maré*.
8. É por isso que o mar sobe mais na lua cheia e na lua nova.
9. Quer achar conchinha na maré bem baixa? Vai na praia nesses dias.
10. Então você puxa mais, até uns cem mil quilômetros.
11. Mas agora o puxão estica até o chão, igual massinha.
12. O chão racha, e vulcões acordam pelo mundo todo.
13. Então você puxa até uns dezoito mil quilômetros.
14. Mas a Terra puxa o lado de perto da Lua bem mais que o de longe.
15. A Lua estica igual chiclete e se despedaça.
16. Esse é o *limite de Roche*.
17. Os pedaços se espalham em volta da Terra, num círculo de pedra.
18. Esse é o *anel*, igual ao de Saturno.
19. É por isso que um cometa que passou perto de Júpiter se partiu em pedaços.
20. Calma: a Lua de verdade se afasta uns quatro centímetros por ano.
21. Coloque um anel brilhando no céu, meteoros caindo e uma boia pra cada vizinho.
22. Agora é só olhar pro céu à noite.
23. Parabéns! Você deu um anel de presente pra Terra.
24. Qual coisa do espaço a gente puxa no próximo? Comenta aí. E segue o Universo Curioso.

247 palavras, uns 78 segundos.

## Ciência conferida

- Distância média Terra-Lua: 384.400 km. Na metade do caminho, a Lua parece 2 vezes maior (o tamanho no céu cai com a distância)
- A força de maré cai com o cubo da distância: na metade, 2³ = 8 vezes mais forte; a 100 mil km, uns 57 vezes
- Maré de sizígia: na lua cheia e na lua nova, Sol e Lua puxam alinhados, e a maré sobe mais e desce mais
- A maré também puxa a rocha (maré terrestre, uns 30 cm hoje); bem mais forte, ela aquece e racha a crosta, como em Io, a lua vulcânica de Júpiter
- Limite de Roche da Lua (corpo que se deforma): uns 18 mil km do centro da Terra; dentro dele, a diferença de puxão entre o lado de perto e o de longe vence a gravidade da própria Lua
- Os pedaços de um corpo despedaçado pela maré se espalham num anel; uma das hipóteses pros anéis de Saturno é essa
- O cometa Shoemaker-Levy 9 se partiu em mais de 20 pedaços ao passar perto de Júpiter em 1992
- A Lua se afasta uns 3,8 cm por ano (medido com laser nos espelhos deixados pela Apollo)

## Ficha de cena

**Cenário:** `espaco` (em cima do planetinha com crateras), de noite, porque o vídeo é sobre a Terra e a Lua. Peças do
cenário que entram nas frases: a Terra grande no céu lá atrás (`C.fundo`, frases 1 e 22), os asteroides passando
(frases 17 e 21), o satélite girando (frase 2) e o cristal brilhante (frase 23). Foto: `referencias/cenarios/espaco.jpg`.
**Hora:** noite. **Personagem:** o do canal, de capacete espacial (`menino.capaceteEspacial()`), quase sempre em `LADO`
(`[1.5, 0, 1.3]`), colado no globo da Terra, segurando a corda que puxa a Lua.
**Escala:** a Terra e a Lua viram globos que cabem do lado do personagem; as distâncias são encurtadas, e o número de
verdade aparece numa pílula na tela.

### Objetos do vídeo

| Nome | O que é | Feito com | Tamanho e cor | Onde fica | Aparece |
|---|---|---|---|---|---|
| `terra` | o globo da Terra, flutuando | `K.planeta('terra', 0.9)` + `K.nomear` | raio 0,9; azul e verde | `TERRA` = `[0, 1.25, 0]` | todas |
| `lua` | a Lua, que vem chegando | `K.planeta('lua', 0.25)` + `K.nomear` | raio 0,25; cinza com crateras | começa em `[3.6, 1.6, -2.4]` e chega até `[1.3, 1.3, 0.1]` | 1 a 15 e 20 |
| `corda` | a corda que o personagem puxa até a Lua | `K.cano` da mão dele até a Lua | raio 0,02; bege | da mão dele até a Lua | 1 a 3, 10, 13 |
| `mar` | a água do oceano esticando pra Lua | `K.peca` esfera transparente | raio 0,93; azul `#3d8be0`, transparente 0,45 | em volta da Terra, esticada pro lado da Lua | 4 a 9 |
| `praia` | a prainha com guarda-sol | `K.pecas`: areia (caixa), guarda-sol (cilindro + cone), água (caixa transparente) | areia 1,4 × 0,15 × 1,0 bege; água azul | `C.esquerda` | 4, 8, 9 |
| `vulcoes` | três vulcõezinhos no globo | `K.pecas`: cones marrons + `K.fogo` + `K.fumaca` | cone raio 0,12, altura 0,2 | na superfície da Terra | 11, 12 |
| `pedacos` | os pedaços da Lua quebrada | 40 `K.peca` esfera cinza | raio 0,03 a 0,08 | saem da Lua e vão pra órbita | 15 a 23 |
| `anel` | o anel de pedra em volta da Terra | `K.peca` anel | raio 1,6, grossura 0,07, cinza claro | em volta da Terra, inclinado 15° | 17 a 23 |
| `saturno` | Saturno pequeno com o anel dele | `K.pecas`: esfera bege + anel | esfera 0,45; anel 0,8 | `C.direita` | 18 |
| `jupiter` | Júpiter laranja com faixas | `K.pecas`: esfera laranja + 2 anéis finos marrons colados | raio 0,6 | `C.direita` | 19 |
| `cometa` | o cometa que se parte | `K.peca` esfera branca + `K.fumaca` (cauda) | raio 0,08 | passando perto de Júpiter | 19 |
| `meteoros` | pedras caindo com fogo | 3 `K.peca` esfera + `K.fogo` | raio 0,05 | caindo na Terra | 21 |
| `boia` | a boia de praia | `K.peca` anel | raio 0,22, laranja e branca | na mão do personagem | 21 |

### Teste dos substantivos

- Lua: frases 1 a 16 e 20 (`lua`)
- Terra: todas (`terra`)
- céu: frases 2 e 22 (o céu de estrelas do cenário)
- metade do caminho: frase 2 e 6 (pílula "192 MIL KM" e a corda)
- mar, água, oceano: frases 4 a 6 (`mar`)
- praia: frases 4 e 9 (`praia`)
- lua cheia, lua nova: frase 8 (etiquetas "LUA CHEIA" e "LUA NOVA" e o mar subindo)
- conchinha: frase 9 (pequena demais: vira etiqueta "CONCHINHAS" na areia)
- cem mil quilômetros: frase 10 (pílula "100 MIL KM")
- chão, massinha: frase 11 (o globo esticando e tremendo; a massinha vira a comparação na etiqueta)
- vulcões: frase 12 (`vulcoes`)
- dezoito mil quilômetros: frase 13 (pílula "18 MIL KM")
- chiclete: frase 15 (a Lua esticando, etiqueta "IGUAL CHICLETE")
- pedaços, círculo de pedra: frases 15 e 17 (`pedacos`)
- anel: frases 18, 21, 23 (`anel`)
- Saturno: frase 18 (`saturno`)
- cometa, Júpiter: frase 19 (`cometa`, `jupiter`)
- quatro centímetros: frase 20 (contador "+4 CM POR ANO")
- meteoros: frase 21 (`meteoros`)
- boia, vizinho: frase 21 (`boia`; o vizinho é piada, fica só na fala)

### Cena por cena

#### 1 · plano `gancho` · ~3 s
> "E se você puxasse a Lua pra bem pertinho da Terra?"

- NA TELA: o globo da Terra no centro; a Lua pequenininha lá atrás, à direita; o personagem à direita da Terra, segurando a corda que vai até a Lua; a pergunta escrita no topo
- MOSTRA: ["terra", "lua", "personagem"]
- CENÁRIO: o planetinha com crateras de noite; a Terra grande no céu lá atrás e asteroides passando devagar
- ENTRA AGORA: a corda, esticando da mão dele até a Lua (na palavra "puxasse")
- OBJETOS SE MEXENDO: a Terra gira devagar (uma volta a cada 20 s); a Lua chega 0,3 m mais perto na palavra "puxasse"
- PERSONAGEM: em LADO, de frente pra câmera, olhando a Lua · começo: surpreso · na palavra "puxasse": empurrando (puxando a corda)
- INTERAÇÃO: ele puxa a corda e a Lua vem um pouquinho (na palavra "puxasse")
- CÂMERA: alvo a Terra e o personagem, no centro, ocupando 2/3 da altura · mergulho · medio · lado -20 · espacoCima 0,35 · começa no céu e desce até eles
- EFEITOS VISUAIS: a pergunta no topo (o motor põe) · brilho amarelo na Lua (palavra "Lua")
- SONS: whoosh da corda (palavra "puxasse")

#### 2 · plano `metade` · ~4 s
> "Se você quer uma Lua gigante no céu, puxa ela até a metade do caminho."

- NA TELA: o personagem no centro-direita puxando a corda com força; a Lua vindo da direita e ficando maior; a Terra à esquerda
- MOSTRA: ["lua", "personagem"]
- CENÁRIO: o planetinha; o satélite girando lá atrás, à direita
- ENTRA AGORA: a pílula azul "192 MIL KM" em cima da Lua (na palavra "metade")
- OBJETOS SE MEXENDO: a Lua anda de `[3.6, 1.6, -2.4]` até `[2.3, 1.45, -1.2]`, de "puxa" até o fim, devagar no começo e rápido no fim
- PERSONAGEM: em LADO, de lado pra Lua · começo: empurrando (puxando a corda, inclinado pra trás) · na palavra "metade": cansado (sua)
- INTERAÇÃO: ele puxa a corda e arrasta a Lua (de "puxa" até o fim)
- CÂMERA: alvo o personagem e a Lua · passando · medio · direita · altura olho · começa nele e termina na Lua (na frase 1: mergulho, medio, -20)
- EFEITOS VISUAIS: pílula azul "192 MIL KM" (palavra "metade") · seta vermelha da Lua até ele (palavra "puxa")
- SONS: range da corda (palavra "puxa") · passo (dois passos pra trás)

#### 3 · plano `linda` · ~2,5 s
> "Ela fica duas vezes maior, linda de ver."

- NA TELA: a Lua grande no centro, brilhando; o personagem embaixo à direita, olhando pra ela
- MOSTRA: ["lua"]
- CENÁRIO: as estrelas e a nebulosa atrás da Lua
- ENTRA AGORA: a etiqueta verde "2× MAIOR" (palavra "duas")
- OBJETOS SE MEXENDO: a Lua cresce de 1 pra 1,15 (pulsando de leve) e gira devagar
- PERSONAGEM: em LADO, olhando pra cima · começo: surpreso · na palavra "linda": vitoria
- INTERAÇÃO: a Lua ilumina o personagem (brilho nele na palavra "linda")
- CÂMERA: alvo a Lua · chegando · perto · baixo · esquerda (na frase 2: passando, medio, direita, olho)
- EFEITOS VISUAIS: etiqueta verde "2× MAIOR" (palavra "duas") · brilho na Lua (palavra "linda")
- SONS: brilho (palavra "linda")

#### 4 · plano `invade` · ~2,5 s · jogo `falha`
> "Mas aí o mar sobe e invade a praia."

- NA TELA: a prainha no centro, com o guarda-sol; o personagem em pé na areia; a água subindo e cobrindo a areia
- MOSTRA: ["praia", "personagem"]
- CENÁRIO: o planetinha de noite; a Lua grande no céu atrás
- ENTRA AGORA: a água da prainha, subindo do chão (palavra "sobe")
- OBJETOS SE MEXENDO: a água sobe de 0 até 0,6 m de "sobe" até "praia"; o guarda-sol tomba na palavra "invade"
- PERSONAGEM: na prainha (C.esquerda) · começo: duvida · na palavra "invade": susto (a água chega na cintura)
- INTERAÇÃO: a água molha o personagem (na palavra "invade")
- CÂMERA: alvo a praia e o personagem · chegando · perto · direita · olho (na frase 3: chegando, perto, baixo, esquerda: aqui troca o lado e a altura)
- EFEITOS VISUAIS: etiqueta vermelha "MAR SUBINDO" (palavra "sobe") · ✗ vermelho (palavra "praia") · preto e branco no fim (o jogo)
- SONS: ondas (palavra "mar") · respingo (palavra "invade")

#### 5 · plano `puxa_agua` · ~2,5 s
> "A Lua puxa a água do oceano pra perto dela."

- NA TELA: a Terra no centro, com o mar azul em volta esticando como um ovo pro lado da Lua; a Lua à direita
- MOSTRA: ["terra", "mar"]
- CENÁRIO: as estrelas atrás; asteroides passando no fundo
- ENTRA AGORA: o mar (a casca azul em volta da Terra) aparecendo (palavra "água")
- OBJETOS SE MEXENDO: o mar estica de 1 pra 1,2 na direção da Lua, de "puxa" até "dela"
- PERSONAGEM: em LADO, ao lado da Terra · começo: pensando · na palavra "oceano": apontar (aponta pro mar esticando)
- INTERAÇÃO: o personagem aponta o mar esticando (palavra "oceano")
- CÂMERA: alvo a Terra · girando · medio · angulo 60 · altura 20 (na frase 4: chegando, perto, direita, olho)
- EFEITOS VISUAIS: seta azul da Terra pra Lua (palavra "puxa")
- SONS: agua (palavra "água")

#### 6 · plano `oito` · ~3 s
> "Na metade do caminho, esse puxão fica oito vezes mais forte."

- NA TELA: a Terra à esquerda e a Lua à direita; uma seta vermelha grossa entre elas; o contador no meio
- MOSTRA: ["terra", "lua"]
- CENÁRIO: o planetinha; a nebulosa colorida atrás
- ENTRA AGORA: o contador "8×" (palavra "oito"), crescendo do 1×
- OBJETOS SE MEXENDO: o contador sobe de 1× até 8× de "puxão" até "forte"; a seta engrossa junto; o mar estica mais (1,2 pra 1,3)
- PERSONAGEM: em LADO · começo: mostrando (apresenta a seta) · na palavra "forte": susto
- INTERAÇÃO: a seta crescendo assusta o personagem (palavra "forte")
- CÂMERA: alvo a Terra e a Lua · afastando · medio · frente · alto (na frase 5: girando, medio, 20)
- EFEITOS VISUAIS: contador "8× MAIS FORTE" (palavra "oito") · seta vermelha (palavra "puxão")
- SONS: zumbido baixo (palavra "puxão") · bip (palavra "oito")

#### 7 · plano `mare_rotulo` · ~1,5 s
> "Esse é o efeito de maré."

- NA TELA: o mar esticado em volta da Terra, brilhando amarelo; o rótulo em cima
- MOSTRA: ["mar"]
- CENÁRIO: as estrelas atrás
- ENTRA AGORA: o rótulo amarelo "EFEITO DE MARÉ" (palavra "maré")
- OBJETOS SE MEXENDO: o mar pulsa (estica e volta um pouco) e brilha
- PERSONAGEM: em LADO · na palavra "maré": mostrando
- INTERAÇÃO: o personagem apresenta o mar com o braço (palavra "maré")
- CÂMERA: alvo o mar · girando · perto · altura 25 · angulo 70 · espacoCima 0,3 (na frase 6: afastando, medio, frente, alto)
- EFEITOS VISUAIS: rótulo amarelo "EFEITO DE MARÉ" (palavra "maré") · brilho amarelo no mar
- SONS: o do rótulo (o kit põe)

#### 8 · plano `lua_cheia` · ~3 s
> "É por isso que o mar sobe mais na lua cheia e na lua nova."

- NA TELA: a prainha à esquerda com a água subindo e descendo; a Lua no céu, à direita, ficando cheia (clara) e depois nova (escura)
- MOSTRA: ["praia", "lua"]
- CENÁRIO: o planetinha; a Terra grande no céu lá atrás (C.fundo), a vida real: a praia
- ENTRA AGORA: etiqueta laranja "LUA CHEIA" (palavra "cheia") e "LUA NOVA" (palavra "nova")
- OBJETOS SE MEXENDO: a água da praia sobe 0,3 m em "cheia" e de novo em "nova"; a Lua clareia em "cheia" e escurece em "nova"
- PERSONAGEM: na prainha · começo: pensando · na palavra "nova": apontar (pra Lua)
- INTERAÇÃO: o personagem aponta a Lua mudando (palavra "nova")
- CÂMERA: alvo a praia e a Lua · revelando · medio · baixo · esquerda (na frase 7: girando, perto, 25)
- EFEITOS VISUAIS: etiquetas laranja "LUA CHEIA" (palavra "cheia") e "LUA NOVA" (palavra "nova")
- SONS: ondas (palavra "mar") · ding (palavras "cheia" e "nova")

#### 9 · plano `conchinha` · ~3 s
> "Quer achar conchinha na maré bem baixa? Vai na praia nesses dias."

- NA TELA: a prainha bem seca, com a água lá embaixo; o personagem agachado na areia
- MOSTRA: ["praia", "personagem"]
- CENÁRIO: o planetinha de noite; o cristal brilhando ao lado
- ENTRA AGORA: a etiqueta verde "DICA: MARÉ BAIXA" (palavra "baixa")
- OBJETOS SE MEXENDO: a água da praia desce de 0,3 m pra 0 em "baixa"
- PERSONAGEM: na prainha · começo: segurando (pega uma conchinha) · na palavra "praia": vitoria
- INTERAÇÃO: o personagem pega uma conchinha na areia (palavra "conchinha")
- CÂMERA: alvo o personagem e a praia · subindo · perto · frente (na frase 8: revelando, medio, baixo, esquerda)
- EFEITOS VISUAIS: etiqueta verde "DICA: MARÉ BAIXA" (palavra "baixa") · ✓ verde (palavra "praia")
- SONS: pingo (palavra "baixa") · certo (palavra "praia")

#### 10 · plano `cem_mil` · ~3 s
> "Então você puxa mais, até uns cem mil quilômetros."

- NA TELA: o personagem no centro puxando a corda; a Lua vindo e ficando bem grande, à esquerda dele
- MOSTRA: ["lua", "personagem"]
- CENÁRIO: o planetinha; a nebulosa atrás
- ENTRA AGORA: pílula azul "100 MIL KM" (palavra "mil")
- OBJETOS SE MEXENDO: a Lua anda de `[2.3, 1.45, -1.2]` até `[1.75, 1.35, -0.5]` de "puxa" até "quilômetros"
- PERSONAGEM: em LADO · começo: ideia · na palavra "puxa": empurrando (puxa a corda com as duas mãos)
- INTERAÇÃO: ele puxa a corda e a Lua chega mais perto (palavra "puxa")
- CÂMERA: alvo a Lua e o personagem · subindo · medio · direita (na frase 9: subindo, perto, frente: aqui muda plano e lado)
- EFEITOS VISUAIS: pílula azul "100 MIL KM" (palavra "mil")
- SONS: range da corda (palavra "puxa") · whoosh (palavra "quilômetros")

#### 11 · plano `massinha` · ~3 s · jogo `falha`
> "Mas agora o puxão estica até o chão, igual massinha."

- NA TELA: a Terra no centro, esticando como um ovo pra Lua; a Lua grande à direita
- MOSTRA: ["terra"]
- CENÁRIO: as estrelas atrás
- ENTRA AGORA: a etiqueta vermelha "O CHÃO ESTICA" (palavra "chão")
- OBJETOS SE MEXENDO: a Terra estica de 1 pra 1,12 na direção da Lua de "estica" até "massinha" e treme
- PERSONAGEM: em LADO · começo: duvida · na palavra "massinha": susto
- INTERAÇÃO: a Terra tremendo assusta o personagem (palavra "massinha")
- CÂMERA: alvo a Terra · chegando · perto · esquerda · olho (na frase 10: subindo, medio, direita)
- EFEITOS VISUAIS: etiqueta vermelha "O CHÃO ESTICA" (palavra "chão") · etiqueta laranja "IGUAL MASSINHA" (palavra "massinha") · preto e branco no fim (o jogo)
- SONS: range (palavra "estica") · estrondo baixo (palavra "massinha")

#### 12 · plano `vulcoes` · ~3 s
> "O chão racha, e vulcões acordam pelo mundo todo."

- NA TELA: a Terra no centro, com três vulcõezinhos soltando fogo e fumaça
- MOSTRA: ["terra", "vulcoes"]
- CENÁRIO: as estrelas; asteroides passando
- ENTRA AGORA: os vulcões crescendo da superfície (palavra "vulcões"); as lascas (palavra "racha")
- OBJETOS SE MEXENDO: a Terra treme (K.falhar 'quebra') na palavra "racha"; o fogo e a fumaça sobem dos vulcões a partir de "acordam"
- PERSONAGEM: em LADO · começo: susto · na palavra "acordam": cansado (sua com o calor)
- INTERAÇÃO: o fogo dos vulcões esquenta o personagem (palavra "acordam")
- CÂMERA: alvo a Terra · girando · medio · angulo 80 · altura 30 (na frase 11: chegando, perto, esquerda, olho)
- EFEITOS VISUAIS: lascas (palavra "racha") · fogo e fumaça nos vulcões (palavra "acordam") · ✗ vermelho
- SONS: racha (palavra "racha") · fogo (palavra "acordam") · estrondo (palavra "vulcões")

#### 13 · plano `dezoito_mil` · ~3 s
> "Então você puxa até uns dezoito mil quilômetros."

- NA TELA: o personagem puxando a corda; a Lua chegando bem pertinho da Terra, quase encostando
- MOSTRA: ["lua", "personagem"]
- CENÁRIO: o planetinha; a nebulosa atrás
- ENTRA AGORA: pílula azul "18 MIL KM" (palavra "dezoito")
- OBJETOS SE MEXENDO: a Lua anda de `[1.75, 1.35, -0.5]` até `[1.3, 1.3, 0.1]` de "puxa" até "quilômetros"
- PERSONAGEM: em LADO · começo: bravo (decidido) · na palavra "puxa": empurrando
- INTERAÇÃO: ele puxa a corda com tudo (palavra "puxa")
- CÂMERA: alvo a Lua e o personagem · passando · medio · frente · baixo (na frase 12: girando, medio, 30)
- EFEITOS VISUAIS: pílula azul "18 MIL KM" (palavra "dezoito")
- SONS: range (palavra "puxa") · whoosh (palavra "quilômetros")

#### 14 · plano `dois_lados` · ~3,5 s
> "Mas a Terra puxa o lado de perto da Lua bem mais que o de longe."

- NA TELA: a Lua no centro, grande; uma seta vermelha grossa no lado de perto e uma seta fina no lado de longe; a Terra na borda esquerda
- MOSTRA: ["lua"]
- CENÁRIO: as estrelas atrás
- ENTRA AGORA: a seta grossa (palavra "perto") e a seta fina (palavra "longe")
- OBJETOS SE MEXENDO: a Lua começa a esticar (1 pra 1,1) na direção da Terra a partir de "mais"
- PERSONAGEM: em LADO, solta a corda · começo: duvida · na palavra "longe": apontar
- INTERAÇÃO: o personagem aponta as duas setas (palavra "longe")
- CÂMERA: alvo a Lua · chegando · perto · direita · alto (na frase 13: passando, medio, frente, baixo)
- EFEITOS VISUAIS: seta vermelha grossa (palavra "perto") · seta vermelha fina (palavra "longe")
- SONS: zumbido (palavra "puxa") · range (palavra "mais")

#### 15 · plano `chiclete` · ~3 s · jogo `falha`
> "A Lua estica igual chiclete e se despedaça."

- NA TELA: a Lua no centro, esticada, quebrando em dezenas de pedaços
- MOSTRA: ["lua", "pedacos"]
- CENÁRIO: as estrelas
- ENTRA AGORA: os pedaços, saindo da Lua (palavra "despedaça")
- OBJETOS SE MEXENDO: a Lua estica de 1,1 pra 1,4 de "estica" até "chiclete"; na palavra "despedaça" ela some e os 40 pedaços voam pra fora
- PERSONAGEM: em LADO · começo: susto · na palavra "despedaça": triste (mãos na cabeça)
- INTERAÇÃO: a Lua quebrando assusta o personagem (palavra "despedaça")
- CÂMERA: alvo a Lua · afastando · perto · esquerda · olho (na frase 14: chegando, perto, direita, alto)
- EFEITOS VISUAIS: etiqueta laranja "IGUAL CHICLETE" (palavra "chiclete") · lascas e tremida (palavra "despedaça") · preto e branco (o jogo)
- SONS: range (palavra "estica") · bomba (palavra "despedaça")

#### 16 · plano `roche` · ~1,5 s
> "Esse é o limite de Roche."

- NA TELA: a Terra no centro, com um círculo tracejado amarelo em volta, onde a Lua quebrou
- MOSTRA: ["terra"]
- CENÁRIO: as estrelas
- ENTRA AGORA: o círculo amarelo (um anel fino brilhante) e o rótulo "LIMITE DE ROCHE" (palavra "Roche")
- OBJETOS SE MEXENDO: o círculo cresce do zero até o raio 1,5
- PERSONAGEM: em LADO · na palavra "Roche": mostrando
- INTERAÇÃO: o personagem apresenta o círculo (palavra "Roche")
- CÂMERA: alvo a Terra · girando · perto · altura 40 · angulo 60 · espacoCima 0,3 (na frase 15: afastando, perto, esquerda)
- EFEITOS VISUAIS: rótulo amarelo "LIMITE DE ROCHE" (palavra "Roche") · círculo amarelo brilhando
- SONS: o do rótulo (o kit põe)

#### 17 · plano `circulo` · ~3 s
> "Os pedaços se espalham em volta da Terra, num círculo de pedra."

- NA TELA: a Terra no centro; os pedaços girando em volta e se juntando num anel achatado
- MOSTRA: ["terra", "pedacos"]
- CENÁRIO: as estrelas; asteroides passando atrás
- ENTRA AGORA: o anel aparecendo devagar por baixo dos pedaços (palavra "círculo")
- OBJETOS SE MEXENDO: os pedaços giram em volta da Terra, uma volta a cada 4 s, e descem pro plano do anel de "espalham" até "pedra"
- PERSONAGEM: em LADO · começo: surpreso · na palavra "círculo": apontar
- INTERAÇÃO: o personagem desvia de um pedaço que passa perto da cabeça (palavra "espalham")
- CÂMERA: alvo a Terra · subindo · medio · frente · de baixo pra alto (na frase 16: girando, perto, 40)
- EFEITOS VISUAIS: etiqueta azul "CÍRCULO DE PEDRA" (palavra "círculo")
- SONS: whoosh (palavra "espalham") · pedra (palavra "pedra")

#### 18 · plano `saturno` · ~2,5 s
> "Esse é o anel, igual ao de Saturno."

- NA TELA: a Terra com o anel à esquerda e Saturno com o anel dele à direita, lado a lado
- MOSTRA: ["anel", "saturno"]
- CENÁRIO: as estrelas e a nebulosa
- ENTRA AGORA: rótulo amarelo "ANEL" (palavra "anel") · Saturno, surgindo à direita (palavra "Saturno")
- OBJETOS SE MEXENDO: o anel brilha amarelo; Saturno cresce do zero e gira
- PERSONAGEM: em LADO · começo: mostrando · na palavra "Saturno": surpreso
- INTERAÇÃO: o personagem compara os dois anéis com as mãos (palavra "Saturno")
- CÂMERA: alvo o anel e Saturno · girando · medio · altura 20 · angulo 50 (na frase 17: subindo, medio, frente)
- EFEITOS VISUAIS: rótulo amarelo "ANEL" (palavra "anel") · brilho em Saturno
- SONS: brilho (palavra "Saturno")

#### 19 · plano `cometa` · ~3 s
> "É por isso que um cometa que passou perto de Júpiter se partiu em pedaços."

- NA TELA: Júpiter laranja à direita; um cometa branco com cauda passando perto e se partindo numa fila de pedaços
- MOSTRA: ["jupiter", "cometa"]
- CENÁRIO: o planetinha; a vida real: Júpiter no céu
- ENTRA AGORA: Júpiter (no lugar de Saturno, palavra "Júpiter") · o cometa vindo da esquerda (palavra "cometa")
- OBJETOS SE MEXENDO: o cometa passa da esquerda pra direita perto de Júpiter; na palavra "partiu" ele vira 6 pedaços em fila
- PERSONAGEM: em LADO · começo: pensando · na palavra "partiu": susto
- INTERAÇÃO: o personagem segue o cometa com o dedo (palavra "cometa")
- CÂMERA: alvo Júpiter e o cometa · revelando · medio · baixo · direita (na frase 18: girando, medio, 20)
- EFEITOS VISUAIS: etiqueta laranja "JÚPITER" (palavra "Júpiter") · lascas (palavra "partiu")
- SONS: whoosh (palavra "cometa") · racha (palavra "partiu")

#### 20 · plano `afasta` · ~3 s · jogo `conserta`
> "Calma: a Lua de verdade se afasta uns quatro centímetros por ano."

- NA TELA: a Lua inteira de novo (o vídeo rebobina), indo embora devagar pra direita; a Terra à esquerda
- MOSTRA: ["lua"]
- CENÁRIO: o planetinha; o satélite girando
- ENTRA AGORA: a Lua inteira, voltando (rebobinar) · contador verde "+4 CM POR ANO" (palavra "quatro")
- OBJETOS SE MEXENDO: a Lua anda de `[2.3, 1.45, -1.2]` até `[3.6, 1.6, -2.4]` de "afasta" até "ano"
- PERSONAGEM: em LADO · começo: cansado (alívio) · na palavra "afasta": vitoria
- INTERAÇÃO: o personagem dá tchau pra Lua (palavra "afasta")
- CÂMERA: alvo a Lua · afastando · medio · esquerda · alto (na frase 19: revelando, medio, baixo, direita)
- EFEITOS VISUAIS: ⏪ rebobinar (o jogo) · contador verde "+4 CM POR ANO" (palavra "quatro") · ✓ verde
- SONS: rebobina (o jogo) · ding (palavra "quatro")

#### 21 · plano `coloque` · ~4 s
> "Coloque um anel brilhando no céu, meteoros caindo e uma boia pra cada vizinho."

- NA TELA: a Terra com o anel brilhando; três meteoros com fogo caindo nela; o personagem segurando a boia
- MOSTRA: ["anel", "meteoros", "boia"]
- CENÁRIO: as estrelas; asteroides passando
- ENTRA AGORA: o anel brilha (palavra "anel") · os meteoros caem de cima (palavra "meteoros") · a boia na mão dele (palavra "boia")
- OBJETOS SE MEXENDO: o anel gira devagar; os meteoros caem do alto até a Terra em 1 s cada
- PERSONAGEM: em LADO · começo: mostrando · na palavra "boia": erguendo (a boia acima da cabeça)
- INTERAÇÃO: ele ergue a boia e coloca na cintura (palavra "boia")
- CÂMERA: alvo a Terra e o personagem · chegando · perto · direita · olho (na frase 20: afastando, medio, esquerda, alto)
- EFEITOS VISUAIS: brilho no anel (palavra "anel") · fogo nos meteoros · etiqueta laranja "1 BOIA POR VIZINHO" (palavra "vizinho")
- SONS: brilho (palavra "anel") · foguete (palavra "meteoros") · tampa (palavra "boia")

#### 22 · plano `ceu` · ~2 s
> "Agora é só olhar pro céu à noite."

- NA TELA: o personagem deitado de costas no chão olhando pra cima; o anel cruzando o céu de ponta a ponta
- MOSTRA: ["anel", "personagem"]
- CENÁRIO: o planetinha de noite, as estrelas e a Terra grande no céu
- ENTRA AGORA: nada
- OBJETOS SE MEXENDO: o anel gira devagar; estrelas cadentes passando
- PERSONAGEM: em LADO · começo: apontar (pro céu) · na palavra "noite": vitoria
- INTERAÇÃO: o personagem aponta o anel no céu (palavra "céu")
- CÂMERA: alvo o anel e o personagem · girando · medio · baixo · angulo 60 (na frase 21: chegando, perto, direita, olho)
- EFEITOS VISUAIS: brilho no anel
- SONS: brilho (palavra "céu")

#### 23 · plano `vitoria` · ~2,5 s
> "Parabéns! Você deu um anel de presente pra Terra."

- NA TELA: a Terra com o anel no centro; o personagem comemorando do lado; confete
- MOSTRA: ["terra", "anel", "personagem"]
- CENÁRIO: o planetinha; o cristal brilhando
- ENTRA AGORA: o laço de presente vermelho em cima da Terra (palavra "presente")
- OBJETOS SE MEXENDO: o anel gira; o laço cai de cima e encaixa
- PERSONAGEM: em LADO · começo: vitoria · na palavra "presente": mostrando
- INTERAÇÃO: o personagem entrega o presente (palavra "presente")
- CÂMERA: alvo a Terra e o personagem · afastando · medio · frente (na frase 22: girando, medio, baixo)
- EFEITOS VISUAIS: confete (palavra "Parabéns") · laço vermelho
- SONS: festa (palavra "Parabéns")

#### 24 · plano `segue` · ~4 s
> "Qual coisa do espaço a gente puxa no próximo? Comenta aí. E segue o Universo Curioso."

- NA TELA: a Terra com o anel e o personagem, colados; o cartão de seguir no topo
- MOSTRA: ["terra", "personagem"]
- CENÁRIO: o planetinha de noite, as estrelas
- ENTRA AGORA: o cartão de seguir (palavra "segue")
- OBJETOS SE MEXENDO: o anel gira; o botão "+ Seguir" é apertado
- PERSONAGEM: em LADO · começo: pensando · na palavra "segue": chamando (acena) e aponta pro cartão
- INTERAÇÃO: o personagem aponta o cartão de seguir (palavra "segue")
- CÂMERA: alvo a Terra e o personagem · parado · aberto · espacoCima 0,4
- EFEITOS VISUAIS: cartão de seguir (palavra "segue")
- SONS: brilho e clique do cartão (o kit põe) · final
