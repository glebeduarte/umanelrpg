/* ================================================================
   SOMBRAS DE ERIADOR — nav.js
   Injeta o menu global fixo em todas as páginas e cuida do colapso
   no mobile (menu global e sumário lateral das páginas de livro).
   Uso: <script defer src="/assets/nav.js"></script> no <head>.
   Links são absolutos a partir da raiz: funcionam no Vercel
   (cleanUrls) e em qualquer servidor estático local.
   ================================================================ */
(function () {
  var ITENS = [
    { rot: 'Início',       href: '/index.html',            sec: 'inicio' },
    { rot: 'Aventuras',    href: '/index.html#aventuras',  sec: 'aventuras' },
    { rot: 'O Sistema',    href: '/regras.html',           sec: 'regras' },
    { rot: 'Heróis',       href: '/index.html#herois-sec', sec: 'herois' },
    { rot: 'Lugares',      href: '/index.html#lugares-sec',sec: 'lugares' },
    { rot: 'Ferramentas',  href: '/index.html#ferramentas-sec', sec: 'ferramentas' }
  ];

  function secaoAtual() {
    var p = location.pathname.replace(/\/index\.html$/, '/');
    if (p === '/' || p === '') return 'inicio';
    if (p.indexOf('/aventuras/') === 0 || p.indexOf('/convite/') === 0) return 'aventuras';
    if (p.indexOf('/herois/') === 0) return 'herois';
    if (p.indexOf('/lugares/') === 0) return 'lugares';
    if (p.indexOf('/ferramentas/') === 0) return 'ferramentas';
    if (/^\/regras(\.html)?$/.test(p)) return 'regras';
    return '';
  }

  function montarHeader() {
    var atual = secaoAtual();
    var h = document.createElement('header');
    h.className = 'gtopo';
    h.id = 'gtopo';
    var links = ITENS.map(function (i) {
      return '<a href="' + i.href + '"' + (i.sec === atual ? ' class="on"' : '') + '>' + i.rot + '</a>';
    }).join('');
    h.innerHTML =
      '<div class="g-in">' +
        '<a href="/index.html" class="g-logo"><span>Sombras de Eriador</span></a>' +
        '<button class="g-tog" type="button" aria-label="Abrir menu" aria-expanded="false">&#9776;</button>' +
        '<nav class="g-menu" aria-label="Navegação principal">' + links + '</nav>' +
      '</div>';
    h.querySelector('.g-tog').addEventListener('click', function () {
      var aberto = h.classList.toggle('aberto');
      this.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    // fecha ao clicar num link (mobile)
    h.querySelectorAll('.g-menu a').forEach(function (a) {
      a.addEventListener('click', function () { h.classList.remove('aberto'); });
    });
    return h;
  }

  function instalarHeader() {
    // remove qualquer header escrito à mão para não duplicar
    document.querySelectorAll('header.gtopo').forEach(function (e) { e.remove(); });
    var h = montarHeader();
    var perg = document.querySelector('.pergaminho');
    if (perg) { perg.insertBefore(h, perg.firstChild); }
    else { document.body.insertBefore(h, document.body.firstChild); }
  }

  function instalarSumario() {
    var s = document.querySelector('.sumario');
    if (!s) return;
    var nav = s.querySelector('nav');
    if (!nav) return;
    // botão "Nesta página" que só aparece no mobile (CSS)
    var tog = document.createElement('button');
    tog.type = 'button';
    tog.className = 's-tog';
    tog.setAttribute('aria-expanded', 'false');
    tog.innerHTML = '<span>Nesta página</span><i>&#9662;</i>';
    tog.addEventListener('click', function () {
      var aberto = s.classList.toggle('aberto');
      tog.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });
    s.insertBefore(tog, nav);
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { s.classList.remove('aberto'); });
    });
    // destaca a seção visível durante a rolagem (desktop)
    var alvos = [];
    nav.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      if (el) alvos.push({ a: a, el: el });
    });
    if ('IntersectionObserver' in window && alvos.length) {
      var obs = new IntersectionObserver(function (ents) {
        ents.forEach(function (e) {
          if (e.isIntersecting) {
            alvos.forEach(function (t) { t.a.classList.toggle('on', t.el === e.target); });
          }
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      alvos.forEach(function (t) { obs.observe(t.el); });
    }
  }

  function iniciar() { instalarHeader(); instalarSumario(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();
