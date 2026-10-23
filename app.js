// Catálogo da coleção Acervo, conforme vincenzosaggio.com (outubro de 2026).
// Fotos, medidas, estoque e textos vêm da loja oficial; nada aqui é inventado.
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
      ['Quadril', 51, 53, 56, 58, 59, 61],
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
  $('[data-count]').textContent = `${shown} ${shown === 1 ? 'peça' : 'peças'}`;
}
$$('[data-filter]').forEach(btn => btn.addEventListener('click', () => setFilter(btn.dataset.filter)));
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
  document.body.classList.add('is-locked');
  lenis?.stop();
  $('[data-close]', panel).focus({ preventScroll: true });
}
function close(restore = true, instant = false) {
  const panel = openPanel;
  if (!panel) return;
  openPanel = null;
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

function chartHTML(type) {
  const c = CHARTS[type];
  return `
    <div class="chart-scroll" tabindex="0" role="region" aria-label="Tabela de medidas, ${c.title}">
      <table class="chart">
        <caption class="sr-only">Tabela de medidas, ${c.title}, em centímetros</caption>
        <thead><tr><th scope="col">Medida</th>${c.cols.map(s => `<th scope="col">${s}</th>`).join('')}</tr></thead>
        <tbody>${c.rows.map(([label, ...v]) =>
          `<tr><th scope="row">${label}</th>${v.map(n => `<td>${n} cm</td>`).join('')}</tr>`).join('')}</tbody>
      </table>
    </div>
    <p class="chart-note">${c.note}</p>`;
}

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
  $('[data-pv-chart]').innerHTML = chartHTML(p.type);
  $('[data-pv-chart-box]').open = false;

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
    if (MOTION) enter(view);
    document.body.classList.add('is-locked');
    lenis?.stop();
  }
  view.scrollTop = 0;
  $('[data-pv-gallery]').scrollLeft = 0;
  $('[data-pv-title]').focus({ preventScroll: true });
  document.title = `${p.name}, ${p.color} · Vincenzo Saggio`;
  const hash = PIECE + id;
  if (location.hash !== hash) history[push && !wasOpen ? 'pushState' : 'replaceState'](null, '', hash);
}

function closeProduct({ fromHistory = false } = {}) {
  if (view.hidden) return;
  const finish = () => { view.hidden = true; view.classList.remove('is-leaving'); };
  if (MOTION) { view.classList.add('is-leaving'); setTimeout(finish, 380); } else finish();
  if (!openPanel) { document.body.classList.remove('is-locked'); lenis?.start(); }
  document.title = 'Vincenzo Saggio · Acervo';
  if (!fromHistory && location.hash.startsWith(PIECE)) history.replaceState(null, '', location.pathname + location.search);
  viewFrom?.focus({ preventScroll: true });
}

document.addEventListener('click', e => {
  const link = e.target.closest('[data-product]');
  if (!link) return;
  e.preventDefault();
  if (openPanel) close(false, true);
  showProduct(link.dataset.product);
});
$('[data-pv-close]').addEventListener('click', () => closeProduct());
view.addEventListener('click', e => {
  const pick = e.target.closest('[data-pv-color-pick]');
  if (pick) { e.preventDefault(); showProduct(pick.dataset.pvColorPick, { push: false }); return; }
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

function renderBag() {
  const count = bag.reduce((n, i) => n + i.qty, 0);
  $$('[data-bag-count]').forEach(el => { el.textContent = count; });
  const list = $('[data-bag-list]');
  const foot = $('[data-bag-foot]');
  renderPair();
  if (!bag.length) {
    list.innerHTML = `<li class="bag-empty">Sua sacola está vazia.<br><a href="#colecao" data-close-link>Ver a coleção</a></li>`;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;
  list.innerHTML = bag.map((i, idx) => {
    const p = byId(i.id);
    return `<li>
      <img src="${cdn(p.gallery[0].f, 200)}" alt="" width="84" height="126">
      <div>
        <a class="bag-item-name" href="#peca-${p.id}" data-product="${p.id}">${p.name}</a>
        <div class="bag-item-sub">${p.color}, tamanho ${i.size}</div>
        <div class="bag-qty">
          <button type="button" data-dec="${idx}" aria-label="Diminuir quantidade de ${p.name} ${p.color}">−</button>
          <span aria-live="polite">${i.qty}</span>
          <button type="button" data-inc="${idx}" aria-label="Aumentar quantidade de ${p.name} ${p.color}">+</button>
        </div>
      </div>
      <div class="bag-item-end">
        <div>${brl(p.price * i.qty)}</div>
        <button class="bag-remove" type="button" data-remove="${idx}">Remover</button>
      </div>
    </li>`;
  }).join('');
  $('[data-bag-total]').textContent = brl(bag.reduce((t, i) => t + byId(i.id).price * i.qty, 0));
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
  const t = e.target;
  if (t.matches('[data-close-link]')) { close(false); closeProduct(); return; }
  const idx = Number(t.dataset.inc ?? t.dataset.dec ?? t.dataset.remove);
  if (Number.isNaN(idx)) return;
  if ('inc' in t.dataset) bag[idx].qty += 1;
  if ('dec' in t.dataset) bag[idx].qty -= 1;
  const removed = 'remove' in t.dataset || bag[idx].qty < 1;
  if (removed) bag.splice(idx, 1);
  saveBag();
  renderBag();
  if (removed) $('[data-close]', bagPanel).focus();
});

$$('[data-open-bag]').forEach(b => b.addEventListener('click', () => open(bagPanel)));
$('[data-open-menu]').addEventListener('click', () => open(menuPanel));
$$('[data-menu-link]').forEach(a => a.addEventListener('click', () => close(false)));
// O carrinho da Shopify aceita a sacola inteira no endereço: /cart/ID:QTD,ID:QTD
$('[data-checkout]').addEventListener('click', () => {
  const items = bag.map(i => `${byId(i.id).variants[i.size]}:${i.qty}`).join(',');
  location.href = `https://vincenzosaggio.com/cart/${items}`;
});

// ---------- Monte o look ----------
// Para cada peça, a foto em que ela aparece inteira: a camisa mostra o recorte de cima, a calça o de baixo
const LOOK_IMG = {
  'camisa-branca': 'assets/img/11.jpg',
  'camisa-listrada': 'assets/img/4.jpg',
  'calca-camelo': 'assets/img/11.jpg',
  'calca-cinza-chumbo': 'assets/img/9.jpg',
  'calca-marrom': 'assets/img/10.jpg',
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
    if (img.getAttribute('src') !== LOOK_IMG[p.id]) {
      img.classList.remove('is-swap');
      void img.offsetWidth;
      img.src = LOOK_IMG[p.id];
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

// Entradas discretas: cada bloco aparece uma vez, quando chega à tela
if (MOTION) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  $$('[data-split], [data-reveal]').forEach(el => io.observe(el));
} else {
  $$('[data-split], [data-reveal]').forEach(el => el.classList.add('is-in'));
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

// Cabeçalho some ao descer e volta ao subir
const header = $('.top');
let lastY = window.scrollY;
function frame(time) {
  lenis?.raf(time);
  const y = window.scrollY;
  if (Math.abs(y - lastY) > 4) {
    header.classList.toggle('is-hidden', y > lastY && y > 400 && !openPanel);
    lastY = y;
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
