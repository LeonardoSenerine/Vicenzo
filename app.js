// Catálogo da coleção Acervo, conforme vincenzosaggio.com (outubro de 2026).
// `soldOut` lista os tamanhos esgotados; `variants` são os IDs de cada tamanho na
// Shopify da loja oficial, usados para montar o carrinho no checkout.

// As fotos de produto saem do CDN da própria loja, que entrega cada largura sob medida
const CDN = 'https://cdn.shopify.com/s/files/1/0965/5799/0163/files/';
const cdn = (file, w) => `${CDN}${file}?width=${w}`;
const srcset = file => [400, 700, 1000, 1400, 1800].map(w => `${cdn(file, w)} ${w}w`).join(', ');

const FACTS = {
  calca: {
    fit: 'Cintura alta, pregas duplas e modelagem ampla.',
    material: '100% lã fria Paramount, Super 120’s.',
    materialNote: 'Leveza, fluidez e toque refinado.',
    use: 'Transita com naturalidade entre o casual e o formal: vai com camisas, camisetas, blazers e jaquetas.',
    model: 'O modelo tem 1,73 m, 70 kg e veste 38.',
  },
  camisa: {
    fit: 'Modelagem relaxed, com proporções amplas e pregas nos punhos e nas costas.',
    material: 'Tricoline leve, 100% algodão.',
    materialNote: 'Respirável, pensada para o clima brasileiro.',
    use: 'Aparência de camisa clássica com construção menos rígida: vai com alfaiataria, jeans, blazers e jaquetas.',
    model: 'O modelo tem 1,73 m, 70 kg e veste P.',
  },
};

// Transcritas das tabelas oficiais publicadas em cada produto
const CHARTS = {
  calca: {
    title: 'Calça Relaxed',
    cols: ['36', '38', '40', '42', '44', '46'],
    rows: [
      ['Cintura (circunferência)', 75, 79, 83, 88, 91, 95],
      ['Quadril (medida plana)', 51, 53, 56, 58, 59, 61],
      ['Comprimento', 108, 110, 112, 113, 114, 115],
    ],
    note: 'Medidas da peça em superfície plana. A circunferência da cintura foi calculada a partir da medida plana. Podem ocorrer pequenas variações de até 1 cm.',
  },
  camisa: {
    title: 'Camisa Relaxed',
    cols: ['P (2)', 'M (3)', 'G (4)'],
    rows: [
      ['Ombro a ombro, frente', 46, 47, 48],
      ['Ombro a ombro, costas', 48, 51, 52],
      ['Axila a axila', 57, 59, 60],
      ['Cintura', 53, 56, 57],
      ['Bíceps', 20, 21, 22],
      ['Comprimento, costas', 79, 81, 82],
      ['Comprimento, frente', 72, 74, 77],
      ['Manga', 64, 66, 67],
      ['Colarinho', 39, 41, 43],
    ],
    note: 'Medidas da peça em superfície plana, sem esticar o tecido. Podem ocorrer pequenas variações de até 1 cm.',
  },
};

const TYPE_LABEL = { calca: 'Calças', camisa: 'Camisas' };

// `back` é a foto que aparece ao passar o mouse no card; `wide` marca as fotos horizontais
const PRODUCTS = [
  {
    id: 'calca-camelo',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Camelo',
    price: 1190,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '46'],
    swatch: '#A67D5E',
    variants: { 36: 54662028722451, 38: 54662028755219, 40: 54662028787987, 42: 54662028820755, 44: 54662028853523, 46: 54662028886291 },
    back: 3,
    gallery: [
      { f: 'SAGGIO-360_e28783b4-a013-4b2a-a946-eab95beb490a.jpg', alt: 'Calça camelo vista de frente, com camisa branca por dentro' },
      { f: 'D75_1258.jpg', alt: 'Detalhe das pregas duplas e da cintura alta da calça camelo' },
      { f: 'SAGGIO-403_0bf6a51d-cb74-4ccb-9b4c-77a350db0dfe.jpg', alt: 'Calça camelo de corpo inteiro, com camisa branca' },
      { f: 'D75_1282.jpg', alt: 'Calça camelo vista de costas' },
      { f: 'D75_1283.jpg', alt: 'Calça camelo vista de lado, mostrando o caimento' },
      { f: 'D75_1218-2.jpg', alt: 'Vincenzo sentado ao lado de um criado-mudo antigo, de calça camelo e camisa branca', wide: true },
    ],
  },
  {
    id: 'calca-cinza-chumbo',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Cinza chumbo',
    price: 1190,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '38', '40', '46'],
    swatch: '#3D3B3C',
    variants: { 36: 54662026461459, 38: 54662026494227, 40: 54662026526995, 42: 54662026559763, 44: 54662026592531, 46: 54662026625299 },
    back: 2,
    gallery: [
      { f: 'SAGGIO-263.jpg', alt: 'Calça cinza chumbo vista de frente' },
      { f: 'SAGGIO-255_3068b66d-d7b5-4e5e-ab78-73f681c11992.jpg', alt: 'Calça cinza chumbo com camisa listrada, em três quartos' },
      { f: 'SAGGIO-288.jpg', alt: 'Calça cinza chumbo vista de costas' },
      { f: 'SAGGIO-276.jpg', alt: 'Calça cinza chumbo vista de lado' },
      { f: 'D75_1053.jpg', alt: 'Vincenzo sentado de blazer escuro e calça cinza chumbo' },
    ],
  },
  {
    id: 'calca-marrom',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Marrom',
    price: 1190,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '38', '40', '46'],
    swatch: '#4E362B',
    variants: { 36: 54661600608531, 38: 54661600641299, 40: 54661600674067, 42: 54661600706835, 44: 54661600739603, 46: 54661600772371 },
    back: 1,
    gallery: [
      { f: 'SAGGIO-434.jpg', alt: 'Calça marrom vista de frente, com cinto de couro' },
      { f: 'SAGGIO-200.jpg', alt: 'Calça marrom vista de lado' },
      { f: 'SAGGIO-162.jpg', alt: 'Calça marrom em movimento, mostrando o caimento da perna ampla' },
      { f: 'SAGGIO-210.jpg', alt: 'Calça marrom vista de frente, da cintura para baixo' },
      { f: 'SAGGIO-090_0a9bdbe5-beae-472e-9d32-460c49cab61b.jpg', alt: 'Vincenzo de corpo inteiro, de camisa branca e calça marrom' },
      { f: 'SAGGIO-528.jpg', alt: 'Vincenzo sentado num pufe de couro, de camisa listrada e calça marrom' },
    ],
  },
  {
    id: 'camisa-branca',
    type: 'camisa',
    name: 'Camisa Relaxed',
    color: 'Branca',
    price: 549,
    sizes: ['P', 'M', 'G'],
    soldOut: [],
    swatch: '#F7F4EF',
    variants: { P: 54661796659475, M: 54661865079059, G: 54661865111827 },
    back: 1,
    gallery: [
      { f: 'SAGGIO-086_315a302b-30e7-4110-b948-b5594070c02f.jpg', alt: 'Camisa branca vista de frente, com o colarinho aberto' },
      { f: 'SAGGIO-199.jpg', alt: 'Camisa branca vista de costas' },
      { f: 'SAGGIO-134.jpg', alt: 'Detalhe do colarinho aberto da camisa branca' },
      { f: 'SAGGIO-103_742f646d-f7b9-4cd6-aa26-731bc5ce3c17.jpg', alt: 'Camisa branca por dentro da calça' },
      { f: 'SAGGIO-090.jpg', alt: 'Vincenzo de corpo inteiro, de camisa branca e calça marrom' },
      { f: 'D75_1202.jpg', alt: 'Vincenzo sentado de camisa branca e calça camelo, ao lado de um criado-mudo', wide: true },
    ],
  },
  {
    id: 'camisa-listrada',
    type: 'camisa',
    name: 'Camisa Relaxed',
    color: 'Listrada',
    price: 579,
    sizes: ['P', 'M', 'G'],
    soldOut: [],
    swatch: 'repeating-linear-gradient(90deg, #F2F0EC 0 3px, #8C98B0 3px 4px)',
    variants: { P: 54662040486163, M: 54662040518931, G: 54662040551699 },
    back: 3,
    gallery: [
      { f: 'SAGGIO-298.jpg', alt: 'Camisa listrada vista de frente, com medalha dourada' },
      { f: 'SAGGIO-235_00b68f81-ef1b-4574-aa7c-c062f177d7e6.jpg', alt: 'Camisa listrada de corpo inteiro, com calça escura' },
      { f: 'D75_1320.jpg', alt: 'Detalhe do punho dobrado da camisa listrada' },
      { f: 'SAGGIO-308.jpg', alt: 'Camisa listrada vista de costas' },
      { f: 'SAGGIO-255_3068b66d-d7b5-4e5e-ab78-73f681c11992.jpg', alt: 'Camisa listrada com calça cinza chumbo' },
      { f: 'SAGGIO-301.jpg', alt: 'Detalhe do colarinho da camisa listrada' },
      { f: 'D75_0991.jpg', alt: 'Vincenzo sentado de camisa listrada e calça escura', wide: true },
    ],
  },
];

const BAG_KEY = 'vs-sacola';
const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const byId = id => PRODUCTS.find(p => p.id === id);
const available = p => p.sizes.filter(s => !p.soldOut.includes(s));
const siblings = p => PRODUCTS.filter(x => x.type === p.type);
// "38, 40, 42 e 44"
const listPt = arr => arr.length < 2 ? arr.join('') : `${arr.slice(0, -1).join(', ')} e ${arr.at(-1)}`;

// Movimento só para quem não pediu menos movimento no sistema
const MOTION = !matchMedia('(prefers-reduced-motion: reduce)').matches;
if (MOTION) document.documentElement.classList.add('motion');
const lenis = MOTION && window.Lenis ? new Lenis({ lerp: 0.1, wheelMultiplier: 0.9 }) : null;

// ---------- Abertura ----------
// O <head> liga a classe "intro" na primeira visita da sessão. A marca aparece
// grande, as letras viram janelas para o hero e a câmera entra pela haste do I.
// Qualquer gesto acelera a entrada, como na Flanar.
const root = document.documentElement;
if (root.classList.contains('intro')) {
  try { sessionStorage.setItem('vs-intro', '1'); } catch { /* sem armazenamento: toca de novo na próxima visita */ }
  // A câmera entra no hero: a página precisa estar no topo, mesmo que o navegador
  // queira devolver a rolagem de uma visita anterior
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  scrollTo(0, 0);
  lenis?.scrollTo(0, { immediate: true, force: true });
  lenis?.stop();
  const veil = $('.intro-veil');
  const svg = $('.intro-svg', veil);
  const marca = $('.intro-marca', veil);
  const furo = $('.intro-furo', veil);
  const cortina = $('.intro-cortina', veil);
  const linha = $('.intro-linha', veil);
  const t0 = performance.now();

  const ease = {
    out: p => 1 - (1 - p) ** 4,
    inOut: p => (p < 0.5 ? 4 * p ** 3 : 1 - (-2 * p + 2) ** 3 / 2),
    in: p => p ** 3,
  };
  // valor, de, para, começo (s), duração (s), curva
  const passos = [
    ['cortina', 0, 1, 0.15, 1.1, ease.inOut],
    ['subida', 1, 0, 0.1, 1.3, ease.out],
    ['linha', 0, 1, 0.75, 0.9, ease.out],
    ['furo', 0, 1, 1.7, 0.35, ease.out],
    ['marca', 1, 0, 1.8, 0.35, ease.out],
    ['zoom', 0, 1, 1.95, 1.45, ease.inOut],
    ['centro', 0, 1, 1.95, 1.0, ease.inOut],
    ['veu', 1, 0, 2.85, 0.55, ease.inOut],
    ['foto', 0, 1, 1.75, 1.65, ease.out],
  ];
  const FIM = 3.4;
  const ABRIR = 2.1;
  const ZOOM_MAX = 60;
  const v = { cortina: 0, subida: 1, linha: 0, furo: 0, marca: 1, zoom: 0, centro: 0, veu: 1, foto: 0 };
  // A foto do hero chega um pouco ampliada e assenta junto com o zoom, terminando
  // exatamente na escala que ela tem depois da abertura (sem salto no fim)
  const heroFoto = $('.hero-media img');
  const fotoFinal = matchMedia('(max-width: 900px)').matches ? 1 : 1.08;
  let w = 0;
  let h = 0;
  let fs = 0;
  let foco = { x: 0, y: 0 };

  // Distância (em em) do começo do I até o centro da haste, medida desenhando a
  // letra num canvas e procurando a faixa de tinta na altura do meio da letra
  let haste = null;
  const hasteDoI = () => {
    if (haste !== null) return haste;
    const tam = 200;
    const c = document.createElement('canvas');
    c.width = tam;
    c.height = tam;
    const ctx = c.getContext('2d');
    ctx.font = `500 ${tam}px "Bodoni Moda"`;
    ctx.fillText('I', 0, tam * 0.9);
    const linhaPx = ctx.getImageData(0, Math.round(tam * 0.9 - tam * 0.34), tam, 1).data;
    let ini = -1;
    let fimPx = -1;
    for (let x = 0; x < tam; x++) {
      if (linhaPx[x * 4 + 3] > 128) { if (ini < 0) ini = x; fimPx = x; }
    }
    haste = ini < 0 ? 0.2 : (ini + fimPx) / 2 / tam;
    return haste;
  };

  const medir = () => {
    w = innerWidth;
    h = innerHeight;
    svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
    fs = Math.min((w * 0.86) / 5.6, h * 0.22);
    $$('text', veil).forEach(t => {
      t.setAttribute('x', w / 2);
      t.setAttribute('font-size', fs);
      t.setAttribute('y', t.classList.contains('intro-l1') ? h / 2 - fs * 0.08 : h / 2 + fs * 0.8);
    });
    // O foco do zoom fica no meio da haste do I, onde a letra é cheia
    try {
      const inicio = $('.intro-l1', marca).getStartPositionOfChar(1);
      foco = { x: inicio.x + hasteDoI() * fs, y: inicio.y - fs * 0.34 };
    } catch { foco = { x: w / 2, y: h / 2 }; }
  };

  const aplicar = () => {
    const dy = v.subida * fs * 0.35;
    // Enquanto a câmera entra, a haste do I desliza até o meio da tela
    const cx = foco.x + (w / 2 - foco.x) * v.centro;
    const cy = foco.y + (h / 2 - foco.y) * v.centro;
    const z = ZOOM_MAX ** v.zoom;
    const t = `translate(${cx} ${cy}) scale(${z}) translate(${-foco.x} ${-foco.y + dy})`;
    marca.setAttribute('transform', t);
    furo.setAttribute('transform', t);
    marca.setAttribute('opacity', v.marca);
    furo.setAttribute('opacity', v.furo);
    cortina.setAttribute('width', w * v.cortina);
    const meio = (Math.min(w * 0.3, 220) * v.linha) / 2;
    const y = h / 2 + fs * 1.15;
    linha.setAttribute('x1', w / 2 - meio);
    linha.setAttribute('x2', w / 2 + meio);
    linha.setAttribute('y1', y);
    linha.setAttribute('y2', y);
    linha.style.opacity = 0.55 * v.marca;
    veil.style.opacity = v.veu;
    heroFoto.style.scale = fotoFinal + 0.16 * (1 - v.foto);
  };

  let velocidade = 1;
  let alvo = 1;
  let tempo = 0;
  let ultimo = 0;
  let acabou = false;
  const fim = () => {
    if (acabou) return;
    acabou = true;
    heroFoto.style.scale = '';
    root.classList.add('intro-open', 'intro-done');
    lenis?.start();
  };
  const quadro = agora => {
    if (acabou) return;
    // Passo limitado só contra saltos grandes (aba que volta do segundo plano);
    // um aparelho lento perde quadros, mas a abertura mantém a duração
    const dt = Math.min((agora - ultimo) / 1000, 0.1);
    ultimo = agora;
    // A pressa cresce aos poucos, sem tranco na velocidade
    velocidade += (alvo - velocidade) * Math.min(1, dt * 7);
    tempo += dt * velocidade;
    passos.forEach(([k, de, para, ini, dur, curva]) => {
      const p = Math.min(Math.max((tempo - ini) / dur, 0), 1);
      v[k] = de + (para - de) * curva(p);
    });
    aplicar();
    if (tempo >= ABRIR) root.classList.add('intro-open');
    if (tempo >= FIM) { fim(); return; }
    requestAnimationFrame(quadro);
  };

  // O hero só começa a se montar quando a câmera termina de entrar
  const ajustarHero = () => {
    const decorrido = (performance.now() - t0) / 1000;
    root.style.setProperty('--intro-delay', `${(decorrido + (FIM - tempo) / Math.max(alvo, 1) - 0.6).toFixed(2)}s`);
  };

  const pressa = () => {
    if (alvo > 1 || acabou) return;
    alvo = 3;
    velocidade = 1.4;
    ajustarHero();
  };
  ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(ev => addEventListener(ev, pressa, { once: true, passive: true }));
  addEventListener('resize', () => { medir(); aplicar(); });

  // Espera a Bodoni carregar para medir as letras (no máximo 1,2 s)
  Promise.race([document.fonts.load('500 100px "Bodoni Moda"'), new Promise(r => setTimeout(r, 1200))]).then(() => {
    medir();
    aplicar();
    ajustarHero();
    ultimo = performance.now();
    requestAnimationFrame(quadro);
  });
  setTimeout(fim, 8000);
}

// Transição entre estados: a foto de origem recebe o nome "peca" antes da troca e a
// foto de destino recebe o mesmo nome depois, e o navegador anima uma até a outra.
const VT = MOTION && typeof document.startViewTransition === 'function';
let morphing = false;
const onScreen = el => {
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.bottom > 0 && r.top < innerHeight;
};
function morph(from, update, getTarget) {
  if (!VT) { update(); return; }
  let target = null;
  if (from && onScreen(from)) from.style.viewTransitionName = 'peca';
  morphing = true;
  const t = document.startViewTransition(() => {
    if (from) from.style.viewTransitionName = '';
    update();
    target = getTarget?.();
    if (target) target.style.viewTransitionName = 'peca';
  });
  t.finished.finally(() => {
    morphing = false;
    if (target) target.style.viewTransitionName = '';
  });
}
// A foto que está à vista no card (a de trás aparece no hover)
const cardImg = link => [...link.querySelectorAll('img')].reverse().find(i => getComputedStyle(i).opacity === '1') || link.querySelector('img');

// ---------- Coleção ----------
const grid = $('[data-grid]');

function cardHTML(p, big = false) {
  const sizes = big ? '(min-width: 1100px) 50vw, 100vw' : '(min-width: 1100px) 25vw, 50vw';
  const front = p.gallery[0].f;
  const back = p.gallery[p.back].f;
  const left = available(p);
  const stock = left.length <= 2
    ? `<span class="card-stock is-low">Últimos tamanhos: ${listPt(left)}</span>`
    : `<span class="card-stock">Tamanhos ${listPt(left)}</span>`;
  const dots = siblings(p).length > 1
    ? `<span class="card-dots" aria-label="${siblings(p).length} cores">${siblings(p).map(s =>
        `<span class="dot${s.id === p.id ? ' is-on' : ''}" style="--sw:${s.swatch}"></span>`).join('')}</span>`
    : '';
  return `
  <li data-type="${p.type}">
    <a class="card" href="#peca-${p.id}" data-product="${p.id}" data-reveal>
      <span class="card-media">
        <img src="${cdn(front, 800)}" srcset="${srcset(front)}" sizes="${sizes}" alt="${p.gallery[0].alt}" loading="lazy" width="800" height="1200">
        <img src="${cdn(back, 800)}" srcset="${srcset(back)}" sizes="${sizes}" alt="" loading="lazy" width="800" height="1200">
      </span>
      <span class="card-meta">
        <span class="card-row"><span class="card-name">${p.name}</span><span class="card-price">${brl(p.price)}</span></span>
        <span class="card-row"><span class="card-color">${p.color}</span>${dots}</span>
        ${stock}
      </span>
    </a>
  </li>`;
}
grid.innerHTML = PRODUCTS.map((p, i) => cardHTML(p, i === 0)).join('');

function setFilter(f) {
  $$('[data-filter]').forEach(b => {
    const on = b.dataset.filter === f;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', on);
  });
  let shown = 0;
  $$('li', grid).forEach(li => {
    li.hidden = f !== 'todas' && li.dataset.type !== f;
    if (!li.hidden) shown += 1;
  });
  grid.dataset.filter = f;
  movePill();
  $('[data-count]').textContent = `${shown} ${shown === 1 ? 'peça' : 'peças'}`;
}
const pill = document.createElement('span');
pill.className = 'filter-pill';
pill.setAttribute('aria-hidden', 'true');
$('.filters').prepend(pill);
function movePill() {
  const on = $('.filters .is-on');
  if (!on) return;
  pill.style.width = `${on.offsetWidth}px`;
  pill.style.translate = `${on.offsetLeft}px 0`;
}
addEventListener('resize', movePill);
document.fonts?.ready.then(movePill);

// Ao filtrar, cada card desliza para o novo lugar em vez de pular
function animateFilter(f) {
  if (!VT) { setFilter(f); return; }
  const items = $$('li', grid);
  items.forEach((li, i) => { li.style.viewTransitionName = `card-${i}`; });
  document.startViewTransition(() => setFilter(f)).finished
    .finally(() => items.forEach(li => { li.style.viewTransitionName = ''; }));
}
$$('[data-filter]').forEach(btn => btn.addEventListener('click', () => animateFilter(btn.dataset.filter)));
// Itens do menu e links de categoria já chegam na coleção filtrada
$$('[data-jump]').forEach(a => a.addEventListener('click', () => setFilter(a.dataset.jump)));
setFilter('todas');

// ---------- Painéis (menu e sacola) ----------
const scrim = $('[data-scrim]');
const bagPanel = $('[data-bag-panel]');
const menuPanel = $('[data-menu-panel]');
let openPanel = null;
let lastFocus = null;

// Coloca a classe de estado, deixa o navegador pintar e tira: a transição faz o resto
function enter(...els) {
  els.forEach(el => el.classList.add('is-entering'));
  void document.body.offsetWidth;
  requestAnimationFrame(() => els.forEach(el => el.classList.remove('is-entering')));
}

function open(panel) {
  if (openPanel) close(false, true);
  lastFocus = document.activeElement;
  scrim.classList.remove('is-leaving');
  scrim.hidden = false;
  panel.hidden = false;
  if (MOTION) enter(panel, scrim);
  openPanel = panel;
  $('[data-open-menu]').setAttribute('aria-expanded', panel === menuPanel);
  $$('[data-open-bag]').forEach(b => b.setAttribute('aria-expanded', panel === bagPanel));
  document.body.classList.add('is-locked');
  lenis?.stop();
  $('[data-close]', panel).focus({ preventScroll: true });
}
function close(restore = true, instant = false) {
  const panel = openPanel;
  if (!panel) return;
  openPanel = null;
  $$('[data-open-menu], [data-open-bag]').forEach(b => b.setAttribute('aria-expanded', 'false'));
  if (!view.hidden) { $('[data-close]', panel).blur(); }
  else { document.body.classList.remove('is-locked'); lenis?.start(); }
  if (restore && lastFocus) lastFocus.focus({ preventScroll: true });
  if (!MOTION || instant) {
    panel.hidden = true;
    scrim.hidden = true;
    return;
  }
  panel.classList.add('is-leaving');
  scrim.classList.add('is-leaving');
  setTimeout(() => {
    panel.classList.remove('is-leaving');
    if (openPanel !== panel) panel.hidden = true;
    if (!openPanel) { scrim.hidden = true; scrim.classList.remove('is-leaving'); }
  }, 420);
}
scrim.addEventListener('click', () => close());
$$('[data-close]').forEach(b => b.addEventListener('click', () => close()));
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (openPanel) close();
  else if (!view.hidden) closeProduct();
});

// ---------- Página de produto ----------
// Cada peça tem endereço próprio (#peca-calca-camelo): dá para mandar a alguém,
// e o botão voltar do navegador fecha a página da peça.
const PIECE = '#peca-';
const view = $('[data-product-view]');
let current = null;
let chosenSize = null;
let viewFrom = null;

// ---------- Ficha de medidas ----------
// A tabela oficial vira uma ficha de ateliê. A ajuda compara a medida de uma peça
// que a pessoa já tem com a mesma medida da tabela e marca o tamanho mais próximo;
// nada além da tabela oficial entra na conta.
const AJUDA = {
  calca: {
    linha: 0,
    rotulo: 'Cintura da sua calça',
    instrucao: 'Pegue uma calça sua que vista bem. Feche, deite sobre a mesa e meça a cintura de uma ponta à outra. Dobre o valor: essa é a circunferência, a mesma medida da tabela.',
    faixa: [55, 130],
  },
  camisa: {
    linha: 2,
    rotulo: 'Axila a axila da sua camisa',
    instrucao: 'Pegue uma camisa sua que vista bem. Abotoe, deite sobre a mesa e meça de uma axila à outra, sem esticar o tecido.',
    faixa: [40, 80],
  },
};
let fichaRec = null;

function renderFicha({ medida = null } = {}) {
  const p = current;
  const c = CHARTS[p.type];
  const a = AJUDA[p.type];
  $('[data-ficha-peca]').textContent = `${p.name}, ${p.color.toLowerCase()}`;
  $('[data-ficha-instrucao]').textContent = a.instrucao;
  $('[data-ficha-rotulo]').textContent = a.rotulo;
  $('[data-ficha-nota]').textContent = c.note;
  const tabela = $('[data-ficha-tabela]');
  tabela.innerHTML = `
    <div class="ficha-scroll" tabindex="0" role="region" aria-label="Tabela de medidas, ${c.title}">
      <table class="ficha-grade">
        <caption class="sr-only">Tabela de medidas, ${c.title}, em centímetros${fichaRec ? `; tamanho indicado ${fichaRec}` : ''}</caption>
        <thead><tr><th scope="col">Medida</th>${c.cols.map((col, i) => {
          const tam = p.sizes[i];
          const cls = [tam === fichaRec ? 'is-rec' : '', p.soldOut.includes(tam) ? 'is-out' : ''].join(' ').trim();
          return `<th scope="col" class="${cls}">${col}${p.soldOut.includes(tam) ? '<small>esgotado</small>' : ''}${tam === fichaRec ? '<span class="carimbo" aria-hidden="true">Seu<br>tamanho</span>' : ''}</th>`;
        }).join('')}</tr></thead>
        <tbody>${c.rows.map(([label, ...v], r) =>
          `<tr class="${r === a.linha ? 'is-base' : ''}"><th scope="row">${label}</th>${v.map((n, i) =>
            `<td class="${p.sizes[i] === fichaRec ? 'is-rec' : ''}${p.soldOut.includes(p.sizes[i]) ? ' is-out' : ''}">${n} cm</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>`;
  if (medida === null) {
    $('[data-ficha-resultado]').innerHTML = '';
    $('[data-ficha-input]').value = '';
  }
}

function sugerirTamanho(medida) {
  const p = current;
  const c = CHARTS[p.type];
  const a = AJUDA[p.type];
  const valores = c.rows[a.linha].slice(1);
  const out = $('[data-ficha-resultado]');
  if (!Number.isFinite(medida) || medida < a.faixa[0] || medida > a.faixa[1]) {
    fichaRec = null;
    renderFicha({ medida });
    out.innerHTML = `<p class="ficha-aviso">Digite a medida em centímetros, entre ${a.faixa[0]} e ${a.faixa[1]}.</p>`;
    return;
  }
  // Mais próximo pela tabela; no empate, o maior
  const perto = i => Math.abs(valores[i] - medida);
  const ordem = valores.map((_, i) => i).sort((x, y) => perto(x) - perto(y) || y - x);
  const melhor = ordem[0];
  const tamanho = p.sizes[melhor];
  const dif = Math.round(Math.abs(valores[melhor] - medida) * 10) / 10;
  const medidaTxt = String(medida).replace('.', ',');
  const rotuloLinha = c.rows[a.linha][0].toLowerCase();
  fichaRec = tamanho;
  renderFicha({ medida });
  // Se a tabela rola para o lado (celular), leva o tamanho indicado para a vista
  const grade = $('.ficha-scroll');
  const marcado = $('thead th.is-rec', grade);
  if (marcado && grade.scrollWidth > grade.clientWidth) {
    const fixa = $('thead th', grade).offsetWidth;
    grade.scrollTo({ left: marcado.offsetLeft - fixa - 12, behavior: MOTION ? 'smooth' : 'auto' });
  }

  const fora = medida < valores[0] - 3 || medida > valores.at(-1) + 3;
  let html = `<p class="ficha-diz">Pela tabela, o seu tamanho é o <strong>${tamanho}</strong>: ${rotuloLinha} de ${valores[melhor]} cm, ${dif === 0 ? 'igual à sua medida' : `a ${String(dif).replace('.', ',')} cm da sua medida de ${medidaTxt} cm`}.</p>`;
  if (fora) html += `<p class="ficha-aviso">Sua medida fica fora da grade da peça. Antes de comprar, <a href="mailto:comercial@vincenzosaggio.com">escreva para a gente</a>.</p>`;
  if (p.soldOut.includes(tamanho)) {
    const alt = ordem.map(i => p.sizes[i]).find(t => !p.soldOut.includes(t));
    const iAlt = p.sizes.indexOf(alt);
    html += alt
      ? `<p class="ficha-aviso">O ${tamanho} está esgotado nesta cor. O mais próximo disponível é o ${alt}, com ${valores[iAlt]} cm.</p><button class="btn btn-claro" type="button" data-ficha-escolher="${alt}">Escolher o ${alt}</button>`
      : `<p class="ficha-aviso">Esta cor está esgotada em todos os tamanhos.</p>`;
  } else {
    html += `<button class="btn btn-claro" type="button" data-ficha-escolher="${tamanho}">Escolher o ${tamanho}</button>`;
  }
  out.innerHTML = html;
}

$('[data-ficha-form]').addEventListener('submit', e => {
  e.preventDefault();
  sugerirTamanho(parseFloat(String($('[data-ficha-input]').value).replace(',', '.')));
});
$('[data-ficha-resultado]').addEventListener('click', e => {
  const b = e.target.closest('[data-ficha-escolher]');
  if (!b) return;
  // Seleciona o tamanho na área de compra e leva a pessoa até ela
  $(`[data-pv-sizes] [data-size="${b.dataset.fichaEscolher}"]`)?.click();
  const alvo = $('[data-pv-sizes]');
  view.scrollTo({ top: view.scrollTop + alvo.getBoundingClientRect().top - innerHeight / 3, behavior: MOTION ? 'smooth' : 'auto' });
  alvo.classList.remove('is-flash');
  void alvo.offsetWidth;
  alvo.classList.add('is-flash');
});
$('[data-ficha-ir]').addEventListener('click', () => {
  const ficha = $('#ficha');
  view.scrollTo({ top: view.scrollTop + ficha.getBoundingClientRect().top - 80, behavior: MOTION ? 'smooth' : 'auto' });
  setTimeout(() => $('[data-ficha-input]').focus({ preventScroll: true }), MOTION ? 700 : 0);
});

function renderProduct() {
  const p = current;
  const f = FACTS[p.type];
  const left = available(p);
  $('[data-pv-crumb]').innerHTML =
    `<a href="#colecao" data-jump="todas" data-pv-leave>Coleção</a><span aria-hidden="true">/</span><a href="#colecao" data-jump="${p.type}" data-pv-leave>${TYPE_LABEL[p.type]}</a><span aria-hidden="true">/</span><span aria-current="page">${p.name}, ${p.color.toLowerCase()}</span>`;
  $('[data-pv-title]').textContent = p.name;
  $('[data-pv-color]').textContent = p.color;
  $('[data-pv-price]').textContent = brl(p.price);
  $('[data-pv-bar-price]').textContent = brl(p.price);
  $('[data-pv-bar-name]').textContent = `${p.name}, ${p.color.toLowerCase()}`;

  const sib = siblings(p);
  $('[data-pv-colors]').hidden = sib.length < 2;
  $('[data-pv-swatches]').innerHTML = sib.map(s => `
    <a class="swatch" href="#peca-${s.id}" data-pv-color-pick="${s.id}" style="--sw:${s.swatch}"
       aria-label="${s.color}"${s.id === p.id ? ' aria-current="true"' : ''}></a>`).join('');
  $('[data-pv-color-name]').textContent = p.color;

  $('[data-pv-sizes]').innerHTML = p.sizes.map(s => p.soldOut.includes(s)
    ? `<button type="button" disabled aria-label="${s}, esgotado">${s}</button>`
    : `<button type="button" data-size="${s}" aria-pressed="false">${s}</button>`).join('');
  $('[data-pv-stock]').textContent = left.length <= 2
    ? `Últimos tamanhos disponíveis: ${listPt(left)}.`
    : `Disponível nos tamanhos ${listPt(left)}.`;
  $('[data-pv-error]').textContent = '';
  fichaRec = null;
  renderFicha();

  $('[data-pv-gallery]').innerHTML = p.gallery.map((g, i) => `
    <figure class="pv-shot${g.wide ? ' is-wide' : ''}">
      <img src="${cdn(g.f, 1000)}" srcset="${srcset(g.f)}" sizes="(min-width: 900px) 58vw, 88vw"
        alt="${g.alt}" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} width="${g.wide ? 1500 : 1000}" height="${g.wide ? 1000 : 1500}">
    </figure>`).join('');
  $('[data-pv-count]').textContent = `1 de ${p.gallery.length}`;

  $('[data-pv-fit]').textContent = f.fit;
  $('[data-pv-material]').textContent = f.material;
  $('[data-pv-material-note]').textContent = f.materialNote;
  $('[data-pv-use]').textContent = f.use;
  $('[data-pv-model]').textContent = f.model;

  // Combina com: as peças do outro tipo, com estoque
  const pairs = PRODUCTS.filter(x => x.type !== p.type && available(x).length);
  $('[data-pv-pairs-title]').textContent = p.type === 'calca' ? 'Camisas para esta calça' : 'Calças para esta camisa';
  $('[data-pv-pairs]').innerHTML = pairs.map(p => cardHTML(p)).join('');
  $$('[data-reveal]', $('[data-pv-pairs]')).forEach(el => el.classList.add('is-in'));
}

function showProduct(id, { push = true } = {}) {
  const p = byId(id);
  if (!p) return;
  const wasOpen = !view.hidden;
  current = p;
  chosenSize = null;
  renderProduct();
  if (!wasOpen) {
    viewFrom = document.activeElement;
    view.hidden = false;
    if (MOTION && !morphing) enter(view);
    document.body.classList.add('is-locked');
    lenis?.stop();
  }
  view.scrollTop = 0;
  $('[data-pv-gallery]').scrollLeft = 0;
  $('[data-pv-title]').focus({ preventScroll: true });
  document.title = `${p.name} (${p.color}) – Vincenzo Saggio`;
  const hash = PIECE + id;
  if (location.hash !== hash) history[push && !wasOpen ? 'pushState' : 'replaceState'](null, '', hash);
}

function closeProduct({ fromHistory = false } = {}) {
  if (view.hidden) return;
  const finish = () => { view.hidden = true; view.classList.remove('is-leaving'); };
  if (VT) {
    // A foto da peça volta para o card dela na coleção, se ele estiver à vista
    const back = $(`#colecao [data-product="${current.id}"]`);
    morph($('.pv-shot img'), finish, () => (back ? cardImg(back) : null));
  } else if (MOTION) { view.classList.add('is-leaving'); setTimeout(finish, 380); } else finish();
  if (!openPanel) { document.body.classList.remove('is-locked'); lenis?.start(); }
  document.title = 'Coleção Acervo – Vincenzo Saggio';
  if (!fromHistory && location.hash.startsWith(PIECE)) history.replaceState(null, '', location.pathname + location.search);
  viewFrom?.focus({ preventScroll: true });
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-product]');
  if (!link) return;
  e.preventDefault();
  if (openPanel) close(false, true);
  const img = link.querySelector('img') ? cardImg(link) : null;
  if (!img) { showProduct(link.dataset.product); return; }
  morph(img, () => showProduct(link.dataset.product), () => $('.pv-shot img'));
});
$('[data-pv-close]').addEventListener('click', () => closeProduct());
view.addEventListener('click', e => {
  const pick = e.target.closest('[data-pv-color-pick]');
  if (pick) {
    e.preventDefault();
    morph($('.pv-shot img'), () => showProduct(pick.dataset.pvColorPick, { push: false }), () => $('.pv-shot img'));
    return;
  }
  if (e.target.closest('[data-pv-leave]')) closeProduct();
});

$('[data-pv-sizes]').addEventListener('click', e => {
  const b = e.target.closest('[data-size]');
  if (!b) return;
  chosenSize = b.dataset.size;
  $$('[data-size]', $('[data-pv-sizes]')).forEach(x => x.setAttribute('aria-pressed', x === b));
  $('[data-pv-error]').textContent = '';
  $('[data-pv-bar-add]').textContent = `Adicionar, tamanho ${chosenSize}`;
});

function addCurrent() {
  if (!chosenSize) {
    $('[data-pv-error]').textContent = 'Escolha um tamanho para adicionar à sacola.';
    $('[data-pv-sizes]').scrollIntoView({ block: 'center', behavior: MOTION ? 'smooth' : 'auto' });
    $('[data-size]', $('[data-pv-sizes]'))?.focus({ preventScroll: true });
    return;
  }
  addToBag(current.id, chosenSize);
  // A sacola abre na hora: quem acabou de escolher vê a peça lá dentro e o que combina com ela
  open(bagPanel);
  toast(`${current.name} ${current.color.toLowerCase()}, tamanho ${chosenSize}, na sacola`);
}
$('[data-pv-add]').addEventListener('click', addCurrent);
$('[data-pv-bar-add]').addEventListener('click', addCurrent);

// Contador da galeria no celular, onde as fotos deslizam de lado
$('[data-pv-gallery]').addEventListener('scroll', e => {
  const g = e.currentTarget;
  if (g.scrollWidth <= g.clientWidth) return;
  const shots = $$('.pv-shot', g);
  const i = Math.round(g.scrollLeft / (shots[0].offsetWidth + 4));
  $('[data-pv-count]').textContent = `${Math.min(i + 1, shots.length)} de ${shots.length}`;
}, { passive: true });

// A barra de compra fixa no celular só aparece depois que o botão principal passou para cima
view.addEventListener('scroll', () => {
  view.classList.toggle('show-bar', $('[data-pv-add]').getBoundingClientRect().bottom < 0);
}, { passive: true });

const syncFromHash = () => {
  const id = location.hash.startsWith(PIECE) && location.hash.slice(PIECE.length);
  if (id && byId(id)) showProduct(id, { push: false });
  else closeProduct({ fromHistory: true });
};
window.addEventListener('popstate', syncFromHash);
window.addEventListener('hashchange', syncFromHash);

// ---------- Sacola ----------
function loadBag() {
  try { return JSON.parse(localStorage.getItem(BAG_KEY)) || []; } catch { return []; }
}
function saveBag() {
  try { localStorage.setItem(BAG_KEY, JSON.stringify(bag)); } catch { /* sacola só nesta visita */ }
}
let bag = loadBag().filter(i => byId(i.id) && byId(i.id).sizes.includes(i.size));

function addToBag(id, size) {
  const found = bag.find(i => i.id === id && i.size === size);
  if (found) found.qty += 1; else bag.push({ id, size, qty: 1 });
  saveBag();
  renderBag();
  $$('[data-bag-count]').forEach(el => {
    const btn = el.closest('button');
    btn.classList.remove('bump');
    void btn.offsetWidth;
    btn.classList.add('bump');
  });
}

const BAG_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8.6 8.6V6.8a3.4 3.4 0 0 1 6.8 0v1.8"/><path d="M4.9 8.6h14.2l-1.1 12.2H6z"/></svg>';

// Faz um número trocar com um pequeno movimento, só quando o valor muda
function setTicking(el, text) {
  if (el.textContent === text) return;
  el.textContent = text;
  el.classList.remove('tick');
  void el.offsetWidth;
  el.classList.add('tick');
}

function renderBag() {
  const count = bag.reduce((n, i) => n + i.qty, 0);
  $$('[data-bag-count]').forEach(el => {
    el.textContent = count;
    el.classList.toggle('is-empty', count === 0);
  });
  $$('[data-open-bag]').forEach(b => b.setAttribute('aria-label', count ? `Abrir sacola, ${count} ${count === 1 ? 'peça' : 'peças'}` : 'Abrir sacola, vazia'));
  $('[data-bag-head-count]').textContent = count ? `(${count})` : '';
  const list = $('[data-bag-list]');
  const foot = $('[data-bag-foot]');
  renderPair();
  if (!bag.length) {
    list.innerHTML = `<li class="bag-empty">
      ${BAG_SVG}
      <p>Sua sacola está vazia</p>
      <span>As peças que você escolher aparecem aqui, com o tamanho e o total.</span>
      <a class="btn" href="#colecao" data-jump="todas" data-close-link>Ver a coleção</a>
    </li>`;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;
  list.innerHTML = bag.map((i, idx) => {
    const p = byId(i.id);
    return `<li style="--i:${idx}">
      <a class="bag-thumb" href="#peca-${p.id}" data-product="${p.id}" tabindex="-1" aria-hidden="true">
        <img src="${cdn(p.gallery[0].f, 240)}" alt="" width="96" height="144">
      </a>
      <div class="bag-info">
        <div class="bag-line">
          <a class="bag-item-name" href="#peca-${p.id}" data-product="${p.id}">${p.name}</a>
          <span class="bag-price">${brl(p.price * i.qty)}</span>
        </div>
        <div class="bag-item-sub">${p.color}, tamanho ${i.size}</div>
        <div class="bag-actions">
          <div class="bag-qty">
            <button type="button" data-dec="${idx}" aria-label="Diminuir quantidade de ${p.name} ${p.color}">−</button>
            <output data-qty="${idx}" aria-live="polite">${i.qty}</output>
            <button type="button" data-inc="${idx}" aria-label="Aumentar quantidade de ${p.name} ${p.color}">+</button>
          </div>
          <button class="bag-remove" type="button" data-remove="${idx}">Remover</button>
        </div>
      </div>
    </li>`;
  }).join('');
  setTicking($('[data-bag-total]'), brl(bag.reduce((t, i) => t + byId(i.id).price * i.qty, 0)));
}

// Camisa e calça andam juntas: se a sacola só tem um dos dois, sugere o outro
const PAIR_HINT = { calca: 'Vai bem com esta calça', camisa: 'Vai bem com esta camisa' };
function renderPair() {
  const box = $('[data-bag-pair]');
  const types = new Set(bag.map(i => byId(i.id).type));
  if (types.size !== 1) { box.hidden = true; return; }
  const [has] = types;
  const p = PRODUCTS.find(x => x.type !== has && available(x).length);
  box.hidden = false;
  box.innerHTML = `
    <p class="bag-pair-title">${PAIR_HINT[has]}</p>
    <a class="bag-pair-card" href="#peca-${p.id}" data-product="${p.id}">
      <img src="${cdn(p.gallery[0].f, 160)}" alt="" width="56" height="84">
      <span><span class="bag-item-name">${p.name}</span><span class="bag-item-sub">${p.color}, ${brl(p.price)}</span></span>
      <span class="bag-pair-cta">Ver a peça</span>
    </a>`;
}

$('[data-bag-list]').addEventListener('click', e => {
  if (e.target.closest('[data-close-link]')) { close(false); closeProduct(); return; }
  const t = e.target.closest('[data-inc], [data-dec], [data-remove]');
  if (!t) return;
  const idx = Number(t.dataset.inc ?? t.dataset.dec ?? t.dataset.remove);
  if ('inc' in t.dataset) bag[idx].qty += 1;
  if ('dec' in t.dataset) bag[idx].qty -= 1;
  const removed = 'remove' in t.dataset || bag[idx].qty < 1;
  if (!removed) {
    saveBag();
    renderBag();
    $(`[data-qty="${idx}"]`)?.classList.add('tick');
    $(`[data-${'inc' in t.dataset ? 'inc' : 'dec'}="${idx}"]`)?.focus();
    return;
  }
  // A peça removida desliza para fora antes de a lista se refazer
  const li = t.closest('li');
  const finish = () => {
    bag.splice(idx, 1);
    saveBag();
    renderBag();
    $('[data-close]', bagPanel).focus();
  };
  if (!MOTION) { finish(); return; }
  li.classList.add('is-removing');
  setTimeout(finish, 320);
});

$$('[data-open-bag]').forEach(b => b.addEventListener('click', () => open(bagPanel)));
$('[data-open-menu]').addEventListener('click', () => open(menuPanel));
$$('[data-menu-link]').forEach(a => a.addEventListener('click', () => close(false)));
// O carrinho da Shopify aceita a sacola inteira no endereço: /cart/ID:QTD,ID:QTD
$('[data-checkout]').addEventListener('click', e => {
  const btn = e.currentTarget;
  btn.classList.add('is-busy');
  $('.btn-label', btn).textContent = 'Abrindo o checkout';
  // Se a pessoa voltar do checkout pelo botão voltar, o botão volta ao normal
  addEventListener('pageshow', () => { btn.classList.remove('is-busy'); $('.btn-label', btn).textContent = 'Finalizar compra'; }, { once: true });
  const items = bag.map(i => `${byId(i.id).variants[i.size]}:${i.qty}`).join(',');
  location.href = `https://vincenzosaggio.com/cart/${items}`;
});

// ---------- Monte o look ----------
// Para cada peça, uma foto de frente do mesmo estúdio e a altura da cintura nela
// (fração da altura da foto). Altura/largura da foto converte a cintura para a
// unidade do palco, que é a largura dele.
const LOOK_IMG = {
  'camisa-branca': { src: 'assets/img/11.jpg', cintura: 0.285, proporcao: 4 / 3 },
  'camisa-listrada': { src: 'assets/img/look-listrada.jpg', cintura: 0.31, proporcao: 3 / 2 },
  'calca-camelo': { src: 'assets/img/11.jpg', cintura: 0.285, proporcao: 4 / 3 },
  'calca-cinza-chumbo': { src: 'assets/img/9.jpg', cintura: 0.30, proporcao: 4 / 3 },
  'calca-marrom': { src: 'assets/img/10.jpg', cintura: 0.29, proporcao: 4 / 3 },
};
const look = { camisa: { id: 'camisa-branca', size: null }, calca: { id: 'calca-camelo', size: null } };

function renderLook() {
  ['camisa', 'calca'].forEach(type => {
    const group = $(`[data-look-group="${type}"]`);
    const pick = look[type];
    const p = byId(pick.id);
    $('[data-look-swatches]', group).innerHTML = siblings(p).map(x => `
      <button type="button" class="swatch" data-look-pick="${x.id}" aria-pressed="${x.id === pick.id}"
        aria-label="${x.color}" style="--sw:${x.swatch}"></button>`).join('');
    $('[data-look-name]', group).textContent = `${p.color}, ${brl(p.price)}`;
    $('[data-look-sizes]', group).innerHTML = p.sizes.map(s => p.soldOut.includes(s)
      ? `<button type="button" disabled aria-label="${s}, esgotado">${s}</button>`
      : `<button type="button" data-look-size="${s}" aria-pressed="${s === pick.size}">${s}</button>`).join('');
    const img = $(`[data-look-img="${type}"]`);
    const foto = LOOK_IMG[p.id];
    if (img.getAttribute('src') !== foto.src) {
      img.classList.remove('is-swap');
      void img.offsetWidth;
      img.src = foto.src;
      img.style.setProperty('--cintura', (foto.cintura * foto.proporcao).toFixed(4));
      img.classList.add('is-swap');
    }
  });
  $('[data-look-total]').textContent = brl(byId(look.camisa.id).price + byId(look.calca.id).price);
}

$$('[data-look-group]').forEach(group => {
  const type = group.dataset.lookGroup;
  group.addEventListener('click', e => {
    const pick = e.target.closest('[data-look-pick]');
    const size = e.target.closest('[data-look-size]');
    if (pick) look[type] = { id: pick.dataset.lookPick, size: null };
    else if (size) look[type].size = size.dataset.lookSize;
    else return;
    $('[data-look-error]').textContent = '';
    renderLook();
  });
});

// Os looks da campanha preenchem o "Monte o look" com as duas peças da foto
$$('[data-use-look]').forEach(btn => btn.addEventListener('click', () => {
  const [camisa, calca] = btn.dataset.useLook.split(',');
  look.camisa = { id: camisa, size: null };
  look.calca = { id: calca, size: null };
  renderLook();
}));

$('[data-look-add]').addEventListener('click', () => {
  const missing = ['camisa', 'calca'].filter(t => !look[t].size);
  if (missing.length) {
    $('[data-look-error]').textContent = missing.length === 2
      ? 'Escolha o tamanho da camisa e da calça.'
      : `Falta o tamanho da ${missing[0] === 'camisa' ? 'camisa' : 'calça'}.`;
    return;
  }
  addToBag(look.camisa.id, look.camisa.size);
  addToBag(look.calca.id, look.calca.size);
  open(bagPanel);
  toast('O look está na sacola');
});
renderLook();

// ---------- Newsletter ----------
// Ainda sem serviço de e-mail ligado: o formulário só confirma na tela.
$('[data-news]').addEventListener('submit', e => {
  e.preventDefault();
  $('.news-msg').textContent = 'Inscrição feita. Você recebe as próximas peças antes de todo mundo.';
  e.target.reset();
});

// ---------- Toast ----------
let toastTimer;
function toast(msg) {
  const el = $('[data-toast]');
  el.textContent = msg;
  el.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('is-on'), 2800);
}

// Vídeos só tocam sozinhos se a pessoa não pediu menos movimento
if (!MOTION) {
  $$('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
}

renderBag();
syncFromHash();

// ---------- Aviso de armazenamento ----------
// Só armazenamento estritamente necessário (a sacola), então o aviso informa e não bloqueia.
const NOTICE_KEY = 'vs-aviso';
let noticeSeen = false;
try { noticeSeen = localStorage.getItem(NOTICE_KEY) === '1'; } catch { /* sem armazenamento: mostra o aviso */ }
if (!noticeSeen) {
  const notice = document.createElement('div');
  notice.className = 'notice';
  notice.setAttribute('role', 'region');
  notice.setAttribute('aria-label', 'Aviso sobre armazenamento');
  notice.innerHTML = `
    <p>Usamos o armazenamento do seu navegador só para guardar a sua sacola. Não usamos cookies de publicidade nem de rastreamento.</p>
    <div class="notice-actions">
      <button type="button">Entendi</button>
      <a href="privacidade.html#cookies">Saiba mais</a>
    </div>`;
  document.body.append(notice);
  $('button', notice).addEventListener('click', () => {
    try { localStorage.setItem(NOTICE_KEY, '1'); } catch { /* fecha só nesta visita */ }
    if (!MOTION) { notice.remove(); return; }
    notice.classList.add('is-leaving');
    setTimeout(() => notice.remove(), 600);
  });
}

// ---------- Movimento ----------

// A marca do rodapé sobe letra por letra; o leitor de tela recebe o texto inteiro
$$('[data-split]').forEach(el => {
  const text = el.textContent.trim();
  let i = 0;
  const words = text.split(' ').map(w =>
    `<span class="split-w">${[...w].map(c => `<span class="split-c" style="--i:${i++}">${c}</span>`).join('')}</span>`
  ).join(' ');
  el.innerHTML = `<span class="sr-only">${text}</span><span aria-hidden="true">${words}</span>`;
});

$$('.menu-list a').forEach((a, i) => a.style.setProperty('--i', i));

// Entradas na rolagem: cada bloco aparece uma vez, quando chega à tela.
// Títulos sobem de trás de uma máscara; textos e fotos vizinhos entram em sequência.
$$('.title-lg, .marca-title, .spread-text h3, .pv-pairs h3').forEach(el => {
  el.dataset.rise = '';
  el.classList.add('is-mask');
  el.innerHTML = `<span class="rise-in">${el.innerHTML}</span>`;
});
$$('.colecao-intro, .colecao-tools, .looks-sub, .monte-sub, .spread-text p, .spread-text .link-arrow, .marca-lead, .marca-body, .contraste-palavras, .servico > div, .news, .foot-cols > div')
  .forEach(el => { el.dataset.rise = ''; });
const stagger = (els, step) => {
  const byParent = new Map();
  els.forEach(el => {
    if (el.style.getPropertyValue('--d')) return;
    const list = byParent.get(el.parentElement) || [];
    list.push(el);
    byParent.set(el.parentElement, list);
  });
  byParent.forEach(list => list.forEach((el, i) => el.style.setProperty('--d', `${i * step}ms`)));
};
stagger($$('[data-rise]'), 90);
stagger($$('.contraste > [data-reveal], .filme > [data-reveal]'), 140);
// Na grade, o atraso segue a coluna, para cada linha entrar da esquerda para a direita
$$('.grid > li').forEach((li, i) => li.querySelector('[data-reveal]')?.style.setProperty('--d', `${(i % 4) * 90}ms`));

if (MOTION) {
  // Um título recortado pela máscara nunca conta como visível, então quem é
  // observado é o bloco em volta dele.
  const watched = new Map();
  $$('[data-split], [data-reveal], [data-rise]').forEach(el => {
    const box = el.classList.contains('is-mask') ? el.parentElement : el;
    watched.set(box, [...(watched.get(box) || []), el]);
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      watched.get(e.target).forEach(el => el.classList.add('is-in'));
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  watched.forEach((_, box) => io.observe(box));
} else {
  $$('[data-split], [data-reveal], [data-rise]').forEach(el => el.classList.add('is-in'));
}

// Âncoras rolam com a mesma inércia, parando abaixo do cabeçalho
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || !lenis || a.matches('[data-product], [data-pv-color-pick]')) return;
  const id = a.getAttribute('href');
  if (id.startsWith(PIECE)) return;
  const target = id === '#' ? 0 : document.querySelector(id);
  if (target === null) return;
  e.preventDefault();
  if (!view.hidden) closeProduct();
  lenis.start();
  lenis.scrollTo(target, { offset: -72, duration: 1.2, force: true });
  if (id !== '#') history.replaceState(null, '', id);
});

// Cabeçalho some ao descer e volta ao subir; a foto da abertura desce mais devagar
const header = $('.top');
const heroImg = $('.hero-media img');
const encontros = $$('[data-encontro]');
let lastY = window.scrollY;
function frame(time) {
  lenis?.raf(time);
  const y = window.scrollY;
  if (Math.abs(y - lastY) > 4) {
    header.classList.toggle('is-hidden', y > lastY && y > 400 && !openPanel);
    lastY = y;
  }
  if (MOTION && y < innerHeight * 1.2) heroImg.style.setProperty('--hy', `${(y * 0.1).toFixed(1)}px`);
  if (MOTION) encontros.forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.bottom < -100 || r.top > innerHeight + 100) return;
    // 0 quando a faixa entra pela base da tela, 1 quando o meio dela chega ao meio da tela
    const c = Math.min(Math.max((innerHeight - r.top) / (innerHeight / 2 + r.height / 2), 0), 1);
    el.style.setProperty('--c', (1 - (1 - c) ** 3).toFixed(3));
  });
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
