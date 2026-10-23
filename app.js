// Catálogo da coleção Acervo, conforme vincenzosaggio.com (outubro de 2026).
// `soldOut` lista os tamanhos esgotados.
const CALCA_DESC = [
  'Cintura alta, pregas duplas e modelagem ampla.',
  'Tecido 100% lã fria Paramount, Super 120’s, que traz leveza, fluidez e toque refinado.',
  'Transita com naturalidade entre o casual e o formal: vai com camisas, camisetas, blazers e jaquetas.',
  'O modelo tem 1,73 m, 70 kg e veste 38.',
];
const CAMISA_DESC = [
  'Tricoline leve, 100% algodão, respirável e pensada para o clima brasileiro.',
  'Modelagem relaxed, com proporções amplas e pregas nos punhos e nas costas.',
  'Aparência de camisa clássica com construção menos rígida: vai com alfaiataria, jeans, blazers e jaquetas.',
  'O modelo tem 1,73 m, 70 kg e veste P.',
];
const PRODUCTS = [
  {
    id: 'calca-camelo',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Camelo',
    price: 1190,
    images: ['assets/img/11.jpg', 'assets/img/8.jpg', 'assets/img/6.jpg'],
    desc: CALCA_DESC,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '46'],
  },
  {
    id: 'calca-cinza-chumbo',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Cinza chumbo',
    price: 1190,
    images: ['assets/img/9.jpg', 'assets/img/1.jpg', 'assets/img/2.jpg'],
    desc: CALCA_DESC,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '38', '40', '46'],
  },
  {
    id: 'calca-marrom',
    type: 'calca',
    name: 'Calça Relaxed de Lã Fria',
    color: 'Marrom',
    price: 1190,
    images: ['assets/img/10.jpg', 'assets/img/3.jpg'],
    desc: CALCA_DESC,
    sizes: ['36', '38', '40', '42', '44', '46'],
    soldOut: ['36', '38', '40', '46'],
  },
  {
    id: 'camisa-branca',
    type: 'camisa',
    name: 'Camisa Relaxed',
    color: 'Branca',
    price: 549,
    images: ['assets/img/6.jpg', 'assets/img/11.jpg'],
    desc: CAMISA_DESC,
    sizes: ['P', 'M', 'G'],
    soldOut: [],
  },
  {
    id: 'camisa-listrada',
    type: 'camisa',
    name: 'Camisa Relaxed',
    color: 'Listrada',
    price: 579,
    images: ['assets/img/4.jpg', 'assets/img/5.jpg'],
    desc: CAMISA_DESC,
    sizes: ['P', 'M', 'G'],
    soldOut: [],
  },
];

const BAG_KEY = 'vs-sacola';
const brl = n => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const $ = (sel, root = document) => root.querySelector(sel);
const byId = id => PRODUCTS.find(p => p.id === id);

// Movimento só para quem não pediu menos movimento no sistema
const MOTION = !matchMedia('(prefers-reduced-motion: reduce)').matches;
if (MOTION) document.documentElement.classList.add('motion');
const lenis = MOTION && window.Lenis ? new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 }) : null;

// ---------- Grade ----------
const grid = $('[data-grid]');
grid.innerHTML = PRODUCTS.map((p, i) => `
  <li data-type="${p.type}">
    <button class="card" type="button" data-product="${p.id}" data-reveal style="--d:${(i % 3) * 110}ms" aria-label="${p.name}, ${p.color}, ${brl(p.price)}">
      <span class="card-media">
        <img src="${p.images[0]}" alt="" loading="lazy">
        <img src="${p.images[1]}" alt="" loading="lazy">
      </span>
      <span class="card-meta">
        <span class="card-name">${p.name}</span>
        <span class="card-color">${p.color}</span>
        <span class="card-price">${brl(p.price)}${p.sizes.length - p.soldOut.length <= 2 ? '<span class="card-tag">Últimos tamanhos</span>' : ''}</span>
      </span>
    </button>
  </li>`).join('') + `
  <li class="grid-photo" aria-hidden="true">
    <img src="assets/img/8.jpg" alt="" loading="lazy" data-reveal style="--d:220ms">
  </li>`;

function setFilter(f) {
  document.querySelectorAll('[data-filter]').forEach(b => {
    const on = b.dataset.filter === f;
    b.classList.toggle('is-on', on);
    b.setAttribute('aria-pressed', on);
  });
  grid.querySelectorAll('li').forEach(li => { li.hidden = f !== 'todas' && li.dataset.type !== f; });
}
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => setFilter(btn.dataset.filter));
});
// Categorias e itens do menu já chegam na coleção filtrada
document.querySelectorAll('[data-jump]').forEach(a => {
  a.addEventListener('click', () => setFilter(a.dataset.jump));
});

// ---------- Painéis ----------
const scrim = $('[data-scrim]');
const productPanel = $('[data-product-panel]');
const bagPanel = $('[data-bag-panel]');
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
  document.body.classList.remove('is-locked');
  lenis?.start();
  if (restore && lastFocus) lastFocus.focus({ preventScroll: true });
  if (!MOTION || instant) {
    panel.hidden = true;
    if (!openPanel) scrim.hidden = true;
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
document.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => close()));
document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

// ---------- Produto ----------
let current = null;
let chosenSize = null;

function showProduct(id) {
  current = byId(id);
  chosenSize = null;
  $('[data-pp-title]').textContent = current.name;
  $('[data-pp-color]').textContent = current.color;
  $('[data-pp-price]').textContent = brl(current.price);
  $('[data-pp-desc]').innerHTML = current.desc.map(line => `<p>${line}</p>`).join('');
  $('[data-pp-error]').textContent = '';
  $('[data-pp-gallery]').innerHTML = current.images
    .map((src, i) => `<img src="${src}" alt="${current.name} ${current.color}, foto ${i + 1}">`).join('');
  $('[data-pp-sizes]').innerHTML = current.sizes
    .map(s => current.soldOut.includes(s)
      ? `<button type="button" disabled aria-label="${s}, esgotado">${s}</button>`
      : `<button type="button" data-size="${s}" aria-pressed="false">${s}</button>`).join('');
  open(productPanel);
  productPanel.scrollTop = 0;
}

grid.addEventListener('click', e => {
  const card = e.target.closest('[data-product]');
  if (card) showProduct(card.dataset.product);
});

$('[data-pp-sizes]').addEventListener('click', e => {
  const b = e.target.closest('[data-size]');
  if (!b) return;
  chosenSize = b.dataset.size;
  $('[data-pp-sizes]').querySelectorAll('[data-size]').forEach(x => x.setAttribute('aria-pressed', x === b));
  $('[data-pp-error]').textContent = '';
});

$('[data-pp-add]').addEventListener('click', () => {
  if (!chosenSize) {
    $('[data-pp-error]').textContent = 'Escolha um tamanho para adicionar à sacola.';
    return;
  }
  addToBag(current.id, chosenSize);
  close();
  toast(`${current.name} ${current.color}, tamanho ${chosenSize}, adicionada à sacola`);
});

// ---------- Sacola ----------
function loadBag() {
  try { return JSON.parse(localStorage.getItem(BAG_KEY)) || []; } catch { return []; }
}
function saveBag() {
  try { localStorage.setItem(BAG_KEY, JSON.stringify(bag)); } catch { /* sacola só nesta visita */ }
}
let bag = loadBag().filter(i => byId(i.id));

function addToBag(id, size) {
  const found = bag.find(i => i.id === id && i.size === size);
  if (found) found.qty += 1; else bag.push({ id, size, qty: 1 });
  saveBag();
  renderBag();
  const btn = $('.bag-btn');
  btn.classList.remove('bump');
  void btn.offsetWidth;
  btn.classList.add('bump');
}

function renderBag() {
  const count = bag.reduce((n, i) => n + i.qty, 0);
  $('[data-bag-count]').textContent = count;
  const list = $('[data-bag-list]');
  const foot = $('[data-bag-foot]');
  if (!bag.length) {
    list.innerHTML = `<li class="bag-empty" style="display:block">Sua sacola está vazia.<br><a href="#colecao" data-close-link>Ver a coleção</a></li>`;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;
  list.innerHTML = bag.map((i, idx) => {
    const p = byId(i.id);
    return `<li>
      <img src="${p.images[0]}" alt="">
      <div>
        <div class="bag-item-name">${p.name}</div>
        <div class="bag-item-sub">${p.color}, tamanho ${i.size}</div>
        <div class="bag-qty">
          <button type="button" data-dec="${idx}" aria-label="Diminuir quantidade">−</button>
          <span aria-live="polite">${i.qty}</span>
          <button type="button" data-inc="${idx}" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
      <div style="text-align:right">
        <div>${brl(p.price * i.qty)}</div>
        <button class="bag-remove" type="button" data-remove="${idx}">Remover</button>
      </div>
    </li>`;
  }).join('');
  $('[data-bag-total]').textContent = brl(bag.reduce((t, i) => t + byId(i.id).price * i.qty, 0));
}

$('[data-bag-list]').addEventListener('click', e => {
  const t = e.target;
  if (t.matches('[data-close-link]')) { close(false); return; }
  const idx = Number(t.dataset.inc ?? t.dataset.dec ?? t.dataset.remove);
  if (Number.isNaN(idx)) return;
  if ('inc' in t.dataset) bag[idx].qty += 1;
  if ('dec' in t.dataset) bag[idx].qty -= 1;
  if ('remove' in t.dataset || bag[idx].qty < 1) bag.splice(idx, 1);
  saveBag();
  renderBag();
  if (!bag.length) $('[data-close]', bagPanel).focus();
});

document.querySelectorAll('[data-open-bag]').forEach(b => b.addEventListener('click', () => open(bagPanel)));
$('[data-open-menu]').addEventListener('click', () => open($('[data-menu-panel]')));
document.querySelectorAll('[data-menu-link]').forEach(a => a.addEventListener('click', () => close(false)));
$('[data-checkout]').addEventListener('click', () => toast('O pagamento ainda não está conectado nesta prévia.'));

// ---------- Newsletter ----------
$('[data-news]').addEventListener('submit', e => {
  e.preventDefault();
  $('.news-msg').textContent = 'Inscrição feita. Você recebe as próximas peças antes de todo mundo.';
  e.target.reset();
});

// ---------- Toast e topo ----------
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
  document.querySelectorAll('video[autoplay]').forEach(v => { v.removeAttribute('autoplay'); v.pause(); v.controls = true; });
}

renderBag();

// ---------- Movimento ----------

// Palavras grandes viram letras que sobem uma a uma; o leitor de tela recebe o texto inteiro
document.querySelectorAll('[data-split]').forEach(el => {
  const text = el.textContent.trim();
  let i = 0;
  const words = text.split(' ').map(w =>
    `<span class="split-w">${[...w].map(c => `<span class="split-c" style="--i:${i++}">${c}</span>`).join('')}</span>`
  ).join(' ');
  el.innerHTML = `<span class="sr-only">${text}</span><span aria-hidden="true">${words}</span>`;
});

document.querySelectorAll('.menu-list a').forEach((a, i) => a.style.setProperty('--i', i));

if (MOTION) {
  // Uma foto com a cortina fechada (clip-path) nunca conta como visível,
  // então observamos o bloco que a contém e revelamos as fotos dele em sequência.
  const groups = new Map();
  document.querySelectorAll('[data-reveal]').forEach(el => {
    const box = el.parentElement;
    if (!groups.has(box)) groups.set(box, []);
    groups.get(box).push(el);
  });
  groups.forEach(els => els.forEach((el, i) => {
    if (els.length > 1 && !el.style.getPropertyValue('--d')) el.style.setProperty('--d', `${i * 120}ms`);
  }));

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      (groups.get(e.target) || [e.target]).forEach(el => el.classList.add('is-in'));
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  document.querySelectorAll('[data-split]').forEach(el => io.observe(el));
  groups.forEach((_, box) => io.observe(box));
} else {
  document.querySelectorAll('[data-split], [data-reveal]').forEach(el => el.classList.add('is-in'));
}

// Âncoras rolam com a mesma inércia, parando abaixo do cabeçalho
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a || !lenis) return;
  const id = a.getAttribute('href');
  const target = id === '#' ? 0 : document.querySelector(id);
  if (target === null) return;
  e.preventDefault();
  lenis.scrollTo(target, { offset: -64, duration: 1.4, force: true });
  if (id !== '#') history.replaceState(null, '', id);
});

// Paralaxe e cabeçalho, num único quadro por vez
const parallax = [...document.querySelectorAll('[data-parallax]')];
const header = $('.top');
let lastY = window.scrollY;

function frame(time) {
  lenis?.raf(time);
  const y = window.scrollY;
  if (Math.abs(y - lastY) > 4) {
    header.classList.toggle('is-hidden', y > lastY && y > 300 && !openPanel);
    lastY = y;
  }
  if (MOTION) {
    const vh = window.innerHeight;
    parallax.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh;
      el.style.setProperty('--p', `${(progress * r.height * -0.05).toFixed(1)}px`);
    });
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
