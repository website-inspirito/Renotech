/* Renotech Air Engineering - home page behaviour. Website design by Inspirito Ventures Pvt Ltd. */
(function () {
  'use strict';
  var DATA = {"cat": [{"code": "DEC · 1 stage", "name": "Direct Evaporative Cooling Units", "blurb": "Cools air by adding moisture to the supply stream, bringing supply temperature very close to the inlet wet-bulb. Available with plug-type and blower fans.", "key": "95%", "keyLab": "Adiabatic efficiency, up to", "points": ["Direct temperature drop of 10–20°C", "100% fresh air, 2,000 to 2,00,000 CFM", "Non-corrosive body, leak-proof FRP water sump", "Lower water consumption, low-cost maintenance"]}, {"code": "IDEC · 2 stage", "name": "Indirect-Direct Evaporative Cooling Units", "blurb": "A replacement for conventional air washer and air cooler systems. The first stage cools the air sensibly through an air-to-air heat exchanger; the second cools it adiabatically, so supply air leaves below the ambient wet-bulb.", "key": "40%", "keyLab": "Savings in power and water, up to", "points": ["Cooling at as low as 300 W per ton", "Available from 10,000 CFM onward", "Standard AHU construction, indoor or outdoor duty", "Belt-driven or direct-driven fans"]}, {"code": "TFA", "name": "Treated Fresh Air Units", "blurb": "Two-stage TFA built on a “Divide and Rule” philosophy: an air-to-air heat exchanger cools the fresh air sensibly while the HVAC coil only dehumidifies, reducing the load on the chiller.", "key": "2-stage", "keyLab": "Sensible and latent load handled separately", "points": ["Reduces sensible load using IEC technology", "Free pre-cooling and re-heating", "Energy-efficient, low-maintenance direct-driven fans", "Condensate recovery to further reduce ambient air load"]}, {"code": "SensiCool", "name": "Renotech SensiCool Air-to-Air Heat Exchanger", "blurb": "A cross-flow polymer plate heat exchanger made for indirect evaporative cooling. It lowers dry-bulb and wet-bulb temperature without adding moisture, and has no moving parts.", "key": "<0.1%", "keyLab": "Air leakage under pressure of 700 Pa", "points": ["Total separation of fresh and exhaust air streams", "Anti-fungal, anti-bacterial coating", "Operating temperatures up to 65°C", "Custom sizes, vertical or horizontal construction"]}, {"code": "HRV", "name": "Heat Recovery Ventilators", "blurb": "Balanced ventilation: one fan blows the stale air out while another replaces it with fresh air, and the outgoing cold air pre-cools the incoming stream.", "key": "CO₂", "keyLab": "Level controlled inside the room", "points": ["Uses cold stale air to pre-cool the fresh air", "Reduces the load on the major cooling units", "Low power consumption", "Suited to hospitals and precision rooms"]}, {"code": "CPC", "name": "Condenser Pre-Cooling Units", "blurb": "Evaporative media ahead of the condenser coil cools the incoming air. Head pressure drops, so compressors run less and draw less energy when they run.", "key": "2–3 mm", "keyLab": "Pressure drop across the cooling media", "points": ["All-aluminium construction, 7090 rigid media", "Water recirculation to avoid wastage", "Adds capacity to undersized condensers", "Reduces demand charges at peak load"]}, {"code": "Turbine", "name": "Turbine Ventilator", "blurb": "Natural, economic, effective ventilation all year round without power or operating costs. Wind spins the vanes and draws hot air, humidity, smoke and fumes out through the roof.", "key": "Zero", "keyLab": "Operating cost. Runs on wind energy", "points": ["Stainless steel top plate and bottom ring", "Permanently lubricated, sealed ZZ bearings", "Rain-proof, rust-free, no maintenance", "Fits any type of roofing profile"]}], "probs": ["Planning a new HVAC system installation", "Air dampers not operating properly", "Heating / cooling coil or valves not operating properly", "Air filters in poor condition", "Leakages in the air duct", "Corrosion on the air ducts", "No proper ventilation in the conditioned space", "AHU makes a lot of noise", "Water leakages from the AHU", "HVAC system looks rusty", "Electricity bills going high", "Room temperature and humidity not meeting required values", "Bad smell coming from the HVAC system", "Water droplet carryover from the AHU", "Want more performance from the existing system", "Vibrations in the AHUs", "HVAC system is oversized", "Systems run at fixed speeds", "Controls not working properly", "Exhaust fans make too much noise"], "services": [["Complete HVAC project installation & commissioning", "We have a dedicated team for new installations of HVAC systems. Installing and commissioning has always been a painful task for manufacturers and end users alike, and it is an important part of any system: installation errors result in poor performance."], ["Retrofitting of existing HVAC set-up", "Renotech has the expertise to design and provide alternate solutions for energy conservation and efficient HVAC systems. We offer a cross-flow polymer plate heat exchanger that does the job better for most facilities and avoids conventional refrigeration, along with other solutions to keep your energy costs as low as possible."], ["Annual maintenance service of HVAC units", "HVAC systems need a specific periodic maintenance schedule. You need not worry about all your HVAC systems: just give us a call and we will be there with a complete solution for preventive as well as breakdown services."], ["Implementation of customised solution", ""], ["AHU check-up, modification & performance upgradation", "Most HVAC systems are designed and installed for normal temperature and humidity, but the site location affects performance greatly. Units built for normal ambient conditions perform poorly where the climate is hotter, and prove oversized where humidity is high."], ["Troubleshooting & breakdown maintenance of all types of AHUs", "HVAC systems are often the least cared-for equipment, and numerous factors reduce their performance. We provide breakdown maintenance, and also consult and advise on the correct way of implementing HVAC systems for your premises, depending on heat loads and climate conditions."], ["Maintenance & servicing of air washers", ""], ["New installations of ducting & insulation", "We provide fresh ducting installations, fabrication and thermal insulation, in various ducting types. With advanced metal-forming technology and a fully automated, modular duct manufacturing system, our ducting gives minimum leakage and accurate sizes."], ["Servicing & maintenance of existing ducting & insulation", "Ducting plays an important role in making an HVAC system efficient. Ducting with leakages or improper insulation results in poor performance, so it has to be serviced periodically to keep the system at its best."], ["Automation & instrumentation of HVAC systems", "Automation and instrumentation is the key factor in the upkeep of any large system, and it affects power consumption. A system without automation and controls gives lower performance and higher energy costs, so we give users the flexibility to implement automation in their HVAC systems."]]};
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); };
  var ARROW = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"></path></svg>';
  var PLUS = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M8 3v10M3 8h10"></path></svg>';
  var TICK = '<svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7"></path></svg>';

  function ar(x1, y1, x2, y2, c) {
    var a = Math.atan2(y2 - y1, x2 - x1), h = 9;
    var p = function (d) { return (x2 - h * Math.cos(a + d)).toFixed(1) + ',' + (y2 - h * Math.sin(a + d)).toFixed(1); };
    return '<path class="fl ' + c + '" d="M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2 + '"></path><path class="hd ' + c + '" d="M' + p(0.55) + 'L' + x2 + ',' + y2 + 'L' + p(-0.55) + '"></path>';
  }
  function hatch(x, y, w, h) {
    var s = '<rect class="t" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"></rect>';
    for (var i = y + 8; i < y + h; i += 9) s += '<path class="thin" d="M' + x + ',' + i + 'L' + (x + w) + ',' + (i - 7) + '"></path>';
    return s;
  }
  function plates(x, y, w, h) {
    var s = '<rect class="b" x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="3"></rect>';
    for (var i = x + 8; i < x + w; i += 8) s += '<path class="thin" d="M' + i + ',' + y + 'V' + (y + h) + '"></path>';
    return s;
  }
  function fan(cx, cy, r) {
    return '<circle class="f" cx="' + cx + '" cy="' + cy + '" r="' + r + '"></circle><g><path d="M' + cx + ',' + (cy - r + 5) + 'V' + (cy + r - 5) + 'M' + (cx - r + 5) + ',' + cy + 'H' + (cx + r - 5) + '"></path><animateTransform attributeName="transform" type="rotate" from="0 ' + cx + ' ' + cy + '" to="360 ' + cx + ' ' + cy + '" dur="2.4s" repeatCount="indefinite"></animateTransform></g><circle class="m" cx="' + cx + '" cy="' + cy + '" r="6"></circle>';
  }
  var drop = function (x, y) { return '<path class="drop" d="M' + x + ',' + y + 'c4,6 6,9 6,12a6,6 0 0 1-12,0c0-3 2-6 6-12z"></path>'; };
  var ART = [
    '<rect class="f" x="44" y="50" width="232" height="112" rx="12"></rect>' + fan(110, 106, 32) + hatch(196, 60, 28, 92) + drop(200, 22) + drop(220, 28) + ar(2, 106, 38, 106, 'hot') + ar(282, 106, 318, 106, 'cool'),
    '<rect class="f" x="26" y="56" width="268" height="106" rx="12"></rect>' + fan(72, 109, 27) + plates(122, 66, 52, 86) + hatch(210, 66, 24, 86) + ar(148, 56, 148, 18, 'mid') + ar(0, 109, 22, 109, 'hot') + ar(298, 109, 320, 109, 'cool'),
    '<rect class="f" x="26" y="56" width="268" height="106" rx="12"></rect>' + plates(70, 66, 52, 86) + '<path class="cool" d="M170,70v80M186,70v80M202,70v80M170,70h32M170,150h32"></path>' + fan(250, 109, 27) + ar(96, 56, 96, 18, 'mid') + ar(0, 109, 22, 109, 'hot') + ar(298, 109, 320, 109, 'cool'),
    '<path class="b" d="M160,34l72,36-72,36-72-36z"></path><path class="f" d="M88,70l72,36v70l-72-36z"></path><path class="m" d="M232,70l-72,36v70l72-36z"></path><path class="thin" d="M100,76v70M112,82v70M124,88v70M136,94v70M148,100v70M220,76v70M208,82v70M196,88v70M184,94v70M172,100v70"></path>' + ar(22, 92, 82, 114, 'hot') + ar(238, 114, 298, 92, 'cool') + ar(160, 30, 160, 2, 'mid'),
    '<rect class="f" x="44" y="40" width="232" height="120" rx="12"></rect><path class="m" d="M160,54l46,46-46,46-46-46z"></path><path class="thin" d="M137,77l46,46M183,77l-46,46"></path><path class="fl hot" d="M48,70H116"></path><path class="fl cool" d="M204,130H272"></path><path class="fl mid" d="M272,70H204"></path><path class="fl mid" d="M116,130H48"></path>' + ar(4, 70, 40, 70, 'hot') + ar(280, 130, 316, 130, 'cool') + ar(316, 70, 282, 70, 'mid') + ar(40, 130, 6, 130, 'mid'),
    '<rect class="f" x="84" y="74" width="152" height="88" rx="8"></rect><ellipse class="m" cx="124" cy="74" rx="28" ry="9"></ellipse><ellipse class="m" cx="196" cy="74" rx="28" ry="9"></ellipse>' + hatch(58, 80, 18, 76) + hatch(244, 80, 18, 76) + '<path class="thin" d="M100,96h120M100,112h120M100,128h120M100,144h120"></path>' + ar(6, 118, 52, 118, 'hot') + ar(314, 118, 268, 118, 'hot') + ar(124, 60, 124, 20, 'mid') + ar(196, 60, 196, 20, 'mid'),
    '<path d="M16,172L160,132L304,172"></path><rect class="f" x="134" y="112" width="52" height="30" rx="3"></rect><path class="m" d="M112,112C112,44 208,44 208,112z"></path><path class="thin" d="M160,60C132,74 126,96 128,112M160,60C146,78 144,98 146,112M160,60V112M160,60C174,78 176,98 174,112M160,60C188,74 194,96 192,112"></path><rect class="f" x="150" y="50" width="20" height="10" rx="3"></rect>' + ar(92, 66, 92, 26, 'mid') + ar(228, 66, 228, 26, 'mid') + ar(8, 98, 62, 98, 'cool')
  ];



  /* ---------- content ---------- */
  var PIMG = ['assets/img/products/direct-evaporative-cooling.webp', 'assets/img/products/indirect-direct-evaporative-cooling.webp', 'assets/img/products/treated-fresh-air.webp', 'assets/img/products/sensicool-heat-exchanger.webp', 'assets/img/products/heat-recovery-ventilator.webp', 'assets/img/products/condenser-pre-cooling.webp', 'assets/img/products/turbine-ventilator.webp'];
  var TONE = ['#14703A', '#1C2372', '#16602F', '#252D86', '#1B2366', '#A3232B', '#B4580F'];
  var ORDER = [[1, 'big'], [0, ''], [3, ''], [2, ''], [4, ''], [5, 'wide'], [6, 'wide']];
  var SIMG = ['assets/img/services/service-01.webp', 'assets/img/services/service-02.webp', 'assets/img/services/service-03.webp', 'assets/img/services/service-04.webp', 'assets/img/services/service-05.webp', 'assets/img/services/service-06.webp', 'assets/img/services/service-07.webp', 'assets/img/services/service-08.webp', 'assets/img/services/service-09.webp', 'assets/img/services/service-10.webp'];

  $('#pgrid').innerHTML = ORDER.map(function (o) {
    var i = o[0], p = DATA.cat[i];
    return '<article class="tile pt spot ' + o[1] + '" style="--tone:' + TONE[i] + '">' +
      '<img class="pimg" src="' + PIMG[i] + '" alt="" loading="lazy" decoding="async">' +
      '<div class="pt-top"><span class="tag glass"><i></i>' + esc(p.code) + '</span><div class="pt-art glass"><svg class="sv" viewBox="0 0 320 180" aria-hidden="true">' + ART[i] + '</svg></div></div>' +
      '<h3>' + esc(p.name) + '</h3>' +
      '<div class="pt-key"><b>' + esc(p.key) + '</b><span>' + esc(p.keyLab) + '</span></div>' +
      '<div class="more"><div><p>' + esc(p.blurb) + '</p><ul>' + p.points.slice(0, 3).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></div></div>' +
      '</article>';
  }).join('');

  $('#mega-p').innerHTML = ORDER.map(function (o) {
    var i = o[0], p = DATA.cat[i];
    return '<a href="#" class="mp"><img src="' + PIMG[i] + '" alt=""><small>' + esc(p.code) + '</small><b>' + esc(p.name) + '</b></a>';
  }).join('') + '<a href="#" class="feat mp" style="min-height:118px;padding:16px"><small>All products</small><strong style="font-size:17px">Explore the range</strong></a>';
  $$('[data-serv-list]').forEach(function (el) {
    var k = +el.getAttribute('data-serv-list');
    el.innerHTML = DATA.services.slice(k * 5, k * 5 + 5).map(function (s, i) {
      var n = k * 5 + i + 1;
      return '<a href="#" class="ml"><em>' + (n < 10 ? '0' : '') + n + '</em><b>' + esc(s[0]) + '</b></a>';
    }).join('');
  });
  $('[data-mob-prod]').innerHTML = DATA.cat.map(function (p) { return '<a href="#">' + esc(p.name) + '</a>'; }).join('');
  $('[data-mob-serv]').innerHTML = DATA.services.map(function (s) { return '<a href="#">' + esc(s[0]) + '</a>'; }).join('');
  $('[data-foot-prod]').innerHTML = DATA.cat.map(function (p) { return '<a class="fl" href="#">' + esc(p.name) + '</a>'; }).join('');

  var IND = [['assets/img/industries/manufacturing.webp', 'Manufacturing facilities'], ['assets/img/industries/pharmaceuticals.webp', 'Pharmaceuticals'], ['assets/img/industries/warehouses.webp', 'Warehouses'], ['assets/img/industries/food-processing.webp', 'Food processing'], ['assets/img/industries/clean-rooms.webp', 'Clean rooms'], ['assets/img/industries/hospitals.webp', 'Hospitals'], ['assets/img/industries/industrial-kitchens.webp', 'Industrial kitchens'], ['assets/img/industries/malls.webp', 'Malls'], ['assets/img/industries/cold-storage.webp', 'Cold storage'], ['assets/img/industries/computer-rooms.webp', 'Mainframe computer rooms'], ['assets/img/industries/printing-presses.webp', 'Printing presses'], ['assets/img/industries/hatcheries.webp', 'Hatcheries'], ['assets/img/industries/industrial-buildings.webp', 'Large industrial buildings']];
  var indHtml = IND.map(function (r, i) { return '<div class="icard"><img src="' + r[0] + '" alt="" loading="lazy" decoding="async"><em>' + (i < 9 ? '0' : '') + (i + 1) + '</em><span>' + esc(r[1]) + '</span></div>'; }).join('');
  $('#indRow').innerHTML = indHtml + indHtml;

  $('#accs').innerHTML = DATA.services.map(function (s, i) {
    var n = (i < 9 ? '0' : '') + (i + 1);
    if (!s[1]) return '<div class="acc" data-i="' + i + '"><div class="acc-h"><em>' + n + '</em><b>' + esc(s[0]) + '</b><span></span></div></div>';
    return '<div class="acc' + (i === 0 ? ' open' : '') + '" data-i="' + i + '"><button type="button" class="acc-h" aria-expanded="' + (i === 0) + '"><em>' + n + '</em><b>' + esc(s[0]) + '</b><i>' + PLUS + '</i></button><div class="acc-b"><div><p>' + esc(s[1]) + '</p></div></div></div>';
  }).join('');
  $('#prev').insertAdjacentHTML('afterbegin', SIMG.map(function (src, i) { return '<img src="' + src + '" alt="" class="' + (i === 0 ? 'on' : '') + '">'; }).join(''));
  var prevImgs = $$('#prev img');
  function preview(i) { prevImgs.forEach(function (im, k) { im.classList.toggle('on', k === i); }); $('#prevT').textContent = DATA.services[i][0]; }
  $$('#accs .acc').forEach(function (a) {
    var i = +a.getAttribute('data-i');
    a.addEventListener('mouseenter', function () { preview(i); });
    var b = $('button', a); if (!b) return;
    b.addEventListener('focus', function () { preview(i); });
    b.addEventListener('click', function () {
      var was = a.classList.contains('open');
      $$('#accs .acc.open').forEach(function (o) { o.classList.remove('open'); $('button', o).setAttribute('aria-expanded', 'false'); });
      if (!was) { a.classList.add('open'); b.setAttribute('aria-expanded', 'true'); }
      preview(i);
      if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 600);
    });
  });

  $('#chips').innerHTML = DATA.probs.map(function (t) { return '<button type="button" class="ck" aria-pressed="false"><i>' + TICK + '</i><span>' + esc(t) + '</span></button>'; }).join('');
  var ticked = 0;
  $$('#chips .ck').forEach(function (c) {
    c.addEventListener('click', function () {
      var on = c.classList.toggle('on'); c.setAttribute('aria-pressed', on ? 'true' : 'false');
      ticked += on ? 1 : -1;
      $('#tickN').textContent = ticked;
      $('#ringFg').style.strokeDashoffset = 440 * (1 - ticked / 20);
    });
  });
  $('#word').innerHTML = 'RENOTECH'.split('').map(function (l) { return '<span>' + l + '</span>'; }).join('');
  $('#form').addEventListener('submit', function (e) { e.preventDefault(); $('#sent').hidden = false; });

  $('#ckMore').addEventListener('click', function () {
    var w = this.parentNode, on = w.classList.toggle('all');
    this.textContent = on ? 'Show fewer' : 'Show all 20'; this.setAttribute('aria-expanded', on ? 'true' : 'false');
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });
  $$('.cp').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-copy');
      var done = function () { b.textContent = 'Copied'; b.classList.add('ok'); setTimeout(function () { b.textContent = 'Copy'; b.classList.remove('ok'); }, 1600); };
      var sel = function () { var sp = b.parentNode.querySelector('span'); var r = document.createRange(); r.selectNodeContents(sp); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(t).then(done, sel); else sel(); } catch (e) { sel(); }
    });
  });

  /* spotlight tiles */
  $$('.spot').forEach(function (t) {
    t.insertAdjacentHTML('afterbegin', '<span class="sp" aria-hidden="true"></span><span class="sb" aria-hidden="true"></span>');
    t.addEventListener('pointermove', function (e) {
      var r = t.getBoundingClientRect();
      t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- 3D cooling unit ---------- */
  function buildUnit(stage) {
    var i, h = '<div class="u-scale"><div class="u-rot"><div class="pl u-shadow"></div>';
    h += '<div class="u-g g-base"><div class="pl c-bt"></div><div class="pl c-bk"></div><div class="pl c-en c-in"></div></div>';
    h += '<div class="u-g g-filter"><div class="pl p-x p-filter" style="transform:translateX(-198px) rotateY(90deg)"></div></div>';
    h += '<div class="u-g g-fan"><div class="pl p-x p-fan" style="transform:translateX(-128px) rotateY(90deg)"><i></i></div></div>';
    h += '<div class="u-g g-hx">';
    for (i = -72; i <= 72; i += 18) h += '<div class="pl p-hx" style="transform:translateX(6px) translateZ(' + i + 'px)"></div>';
    h += '<div class="pl p-hxcap" style="transform:translateX(6px) rotateX(90deg) translateZ(80px)"></div></div>';
    h += '<div class="u-g g-pad">';
    for (i = 116; i <= 144; i += 14) h += '<div class="pl p-x p-pad" style="transform:translateX(' + i + 'px) rotateY(90deg)"></div>';
    h += '</div><div class="u-g g-air">';
    var ys = [-52, 30, -14, 56, -36, 8, 44, -60, 20, -24, 60, -4], zs = [40, -50, 70, 10, -70, -20, 60, -40, 30, 0, -60, 50];
    for (i = 0; i < 12; i++) h += '<div class="u-g" style="transform:translate3d(0,' + ys[i] + 'px,' + zs[i] + 'px)"><div class="pl air" style="animation-delay:' + (-i * 0.29).toFixed(2) + 's;animation-duration:' + (3 + (i % 4) * 0.35) + 's"></div></div>';
    h += '</div><div class="u-g g-out"><div class="pl c-en c-out"></div></div>';
    h += '<div class="u-g g-top"><div class="pl c-tp"></div></div><div class="u-g g-front"><div class="pl c-fr"></div></div></div></div>';
    stage.innerHTML = h;
    var how = stage.getAttribute('data-unit') === 'how';
    var fit = function () {
      var s = how ? stage.clientWidth / 730 : Math.min(stage.clientWidth / 560, stage.clientHeight / 360);
      $('.u-scale', stage).style.setProperty('--us', Math.max(0.3, Math.min(1.25, s)).toFixed(3));
    };
    fit(); window.addEventListener('resize', fit);
    $('.u-rot', stage).style.transform = 'rotateX(-20deg) rotateY(-34deg)';
  }
  $$('[data-unit]').forEach(buildUnit);

  /* ---------- airflow canvas ---------- */
  (function () {
    var cv = $('#flow'); if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d'), dpr = Math.min(2, window.devicePixelRatio || 1), w = 0, h = 0, P = [], t = 0, live = true;
    var N = window.innerWidth < 700 ? 90 : 230;
    var C = [[228, 49, 58], [247, 147, 30], [91, 141, 239], [30, 154, 71]];
    function col(k) { k = Math.max(0, Math.min(0.999, k)) * 3; var i = Math.floor(k), f = k - i, a = C[i], b = C[i + 1]; return 'rgba(' + Math.round(a[0] + (b[0] - a[0]) * f) + ',' + Math.round(a[1] + (b[1] - a[1]) * f) + ',' + Math.round(a[2] + (b[2] - a[2]) * f) + ',0.28)'; }
    function size() { w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function seed(p, any) { p.x = any ? Math.random() * w : -10 - Math.random() * 60; p.y = Math.random() * h; p.s = 0.7 + Math.random() * 1.3; p.l = 0; }
    size(); for (var i = 0; i < N; i++) { var p = {}; seed(p, true); P.push(p); }
    window.addEventListener('resize', size);
    function step() {
      if (live && !document.hidden) {
        t += 0.004;
        ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,0.07)'; ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = 'source-over'; ctx.lineWidth = 1.5; ctx.lineCap = 'round';
        for (var i = 0; i < P.length; i++) {
          var p = P[i];
          var a = Math.sin(p.x * 0.0042 + t * 3) * 1.1 + Math.cos(p.y * 0.0055 - t * 2) * 0.9 + Math.sin((p.x + p.y) * 0.002 + t * 4) * 0.6;
          var nx = p.x + (1.6 + Math.cos(a) * 0.9) * p.s, ny = p.y + Math.sin(a) * 1.25 * p.s;
          ctx.strokeStyle = col(p.x / w); ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
          p.x = nx; p.y = ny; p.l++;
          if (p.x > w + 10 || p.y < -10 || p.y > h + 10) seed(p, false);
        }
      }
      requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (e) { live = e[0].isIntersecting; }).observe(cv);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) live = false;
  })();

  /* ---------- menu bar ---------- */
  var nav = $('#nav'), mob = $('#mob'), burger = $('#burger'), openMenu = null, closeT = null, lenis = null;
  function setMenu(k) {
    clearTimeout(closeT);
    if (openMenu === k) return;
    if (openMenu) { var o = $('#mega-' + openMenu); o.classList.remove('open'); o.classList.remove('show'); var ob = $('[data-menu="' + openMenu + '"]'); ob.classList.remove('on'); ob.setAttribute('aria-expanded', 'false'); }
    openMenu = k;
    if (k) {
      var m = $('#mega-' + k); m.classList.add('show'); void m.offsetWidth; m.classList.add('open');
      var b = $('[data-menu="' + k + '"]'); b.classList.add('on'); b.setAttribute('aria-expanded', 'true');
      nav.classList.remove('hide');
      $$('.mp', m).forEach(function (el, i) { el.style.transitionDelay = (i * 0.035) + 's'; });
    }
  }
  $$('[data-menu]').forEach(function (b) {
    var k = b.getAttribute('data-menu'), at = 0;
    b.addEventListener('mouseenter', function () { at = Date.now(); setMenu(k); });
    b.addEventListener('click', function () { if (openMenu === k && Date.now() - at > 400) setMenu(null); else setMenu(k); });
  });
  $$('[data-close]').forEach(function (a) { a.addEventListener('mouseenter', function () { setMenu(null); }); });
  nav.addEventListener('mouseleave', function () { closeT = setTimeout(function () { setMenu(null); }, 220); });
  nav.addEventListener('mouseenter', function () { clearTimeout(closeT); });
  nav.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(null); });
  function setMob(on) {
    mob.classList.toggle('open', on); burger.classList.toggle('x', on); burger.setAttribute('aria-expanded', on ? 'true' : 'false');
    $$('.mob-i', mob).forEach(function (el, i) { el.style.transitionDelay = on ? (0.08 + i * 0.05) + 's' : '0s'; });
    if (lenis) { if (on) lenis.stop(); else lenis.start(); }
    if (on) nav.classList.remove('hide');
  }
  burger.addEventListener('click', function () { setMob(!mob.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mob.classList.contains('open')) { setMob(false); burger.focus(); } });
  window.addEventListener('resize', function () { if (window.innerWidth > 1100 && mob.classList.contains('open')) setMob(false); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var id = a.getAttribute('href').slice(1);
    if (!id) { e.preventDefault(); return; }
    var t = document.getElementById(id); if (!t) { e.preventDefault(); return; }
    e.preventDefault(); setMenu(null); if (mob.classList.contains('open')) setMob(false);
    if (lenis) lenis.scrollTo(t, { offset: t.id === 'top' ? 0 : -70, duration: 1.4 });
    else t.scrollIntoView({ behavior: 'smooth' });
  });

  /* ---------- motion ---------- */
  var root = document.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!window.gsap || !window.ScrollTrigger || reduce) {
    root.classList.remove('js');
    $$('#stateT').forEach(function (el) { el.style.color = '#fff'; });
    var onS = function () { var y = window.pageYOffset; nav.classList.toggle('solid', y > 40); $('#mobbar').classList.toggle('show', y > 500); };
    window.addEventListener('scroll', onS, { passive: true }); onS();
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out' });
  if (window.Lenis) {
    lenis = new Lenis({ lerp: 0.1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    window.__lenis = lenis;
  }
  var fine = window.matchMedia('(hover:hover) and (pointer:fine)').matches;

  /* text effects */
  function split(el) {
    var out = document.createDocumentFragment();
    Array.prototype.slice.call(el.childNodes).forEach(function (n) {
      var cls = n.nodeType === 1 ? n.className : '';
      (n.textContent || '').split(/(\s+)/).forEach(function (t) {
        if (!t) return;
        if (/^\s+$/.test(t)) { out.appendChild(document.createTextNode(' ')); return; }
        var w = document.createElement('span'); w.className = 'w';
        var s = document.createElement('span'); if (cls) s.className = cls; s.textContent = t;
        w.appendChild(s); out.appendChild(w);
      });
    });
    el.innerHTML = ''; el.appendChild(out);
    return $$('.w > span', el);
  }
  var heroWords = null;
  $$('[data-split]').forEach(function (el) {
    var words = split(el);
    if (el.closest('#hero')) { heroWords = words; gsap.set(words, { yPercent: 118 }); return; }
    gsap.from(words, { yPercent: 118, rotate: 4, duration: 1.1, ease: 'power4.out', stagger: 0.045, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  var GL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&';
  function scramble(el) {
    var fin = el.getAttribute('data-txt'), o = { p: 0 };
    gsap.to(o, { p: 1, duration: 0.9, ease: 'none', onUpdate: function () {
      var n = Math.floor(o.p * fin.length), s = fin.slice(0, n);
      for (var i = n; i < fin.length; i++) s += fin[i] === ' ' ? ' ' : GL[Math.floor(Math.random() * GL.length)];
      el.textContent = s;
    }, onComplete: function () { el.textContent = fin; } });
  }
  $$('[data-scr]').forEach(function (el) {
    el.setAttribute('data-txt', el.textContent);
    if (el.closest('#hero')) return;
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: function () { scramble(el); } });
  });
  $$('[data-rv]').forEach(function (el) { gsap.from(el, { y: 44, opacity: 0, duration: 1.1, scrollTrigger: { trigger: el, start: 'top 92%' } }); });
  $$('[data-stagger]').forEach(function (el) {
    var st = parseFloat(el.getAttribute('data-stagger')) || 0.08;
    gsap.from(el.children, { y: 40, opacity: 0, duration: 0.9, stagger: st, scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  $$('[data-count]').forEach(function (el) {
    var to = +el.getAttribute('data-count'), o = { v: 0 }; el.textContent = '0';
    gsap.to(o, { v: to, duration: 1.8, ease: 'power2.out', onUpdate: function () { el.textContent = Math.round(o.v); }, scrollTrigger: { trigger: el, start: 'top 90%' } });
  });

  /* parallax backgrounds */
  $$('[data-speed]').forEach(function (img) {
    var s = +img.getAttribute('data-speed');
    gsap.fromTo(img, { yPercent: -7 * s }, { yPercent: 7 * s, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  $$('[data-par]').forEach(function (el) {
    gsap.to(el, { yPercent: 100 * +el.getAttribute('data-par'), ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  });
  $$('.aur').forEach(function (o, i) { gsap.to(o, { x: (i % 2 ? -1 : 1) * 80, y: (i % 3 ? 40 : -30), duration: 7 + i * 1.7, ease: 'sine.inOut', yoyo: true, repeat: -1 }); });

  /* loader + hero entrance */
  var tiles = $$('#bento [data-tile]'), heroIn = $$('#hero [data-in]');
  gsap.set(heroIn, { y: 34, opacity: 0 });
  gsap.set(tiles, { clipPath: 'inset(100% 0% 0% 0% round 28px)' });
  gsap.set($$('#bento img.bg'), { scale: 1.35 });
  var hT = { v: 42.2 }, heroTn = $('#heroT'); heroTn.textContent = '42.2';
  var o = { n: 0 };
  var intro = gsap.timeline({ delay: 0.1 });
  intro.to(o, { n: 100, duration: 0.9, ease: 'power2.inOut', onUpdate: function () { $('#introN').textContent = Math.round(o.n); } }, 0)
    .to('#introBar', { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, 0)
    .to('.intro-in', { y: -24, opacity: 0, duration: 0.35, ease: 'power2.in' }, 0.92)
    .to('.intro-cols i', { yPercent: -101, duration: 0.85, ease: 'power4.inOut', stagger: 0.06 }, 1.05)
    .set('#intro', { display: 'none' })
    .from('.nav-bar', { y: -90, opacity: 0, duration: 0.9 }, 1.5)
    .to(heroWords, { yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: 0.07 }, 1.45)
    .to(heroIn, { y: 0, opacity: 1, duration: 0.9, stagger: 0.09 }, 1.7)
    .to(tiles, { clipPath: 'inset(0% 0% 0% 0% round 28px)', duration: 1.2, ease: 'power4.inOut', stagger: 0.12 }, 1.5)
    .to($$('#bento img.bg'), { scale: 1, duration: 1.8, ease: 'power3.out' }, 1.6)
    .add(function () { $$('#hero [data-scr]').forEach(scramble); }, 1.7)
    .to(hT, { v: 20.9, duration: 2.4, ease: 'power2.inOut', onUpdate: function () { heroTn.textContent = hT.v.toFixed(1); $('#heroDot').style.left = ((hT.v - 15) / 30 * 100).toFixed(1) + '%'; } }, 2.3)
    .set(tiles, { clearProps: 'clipPath' });

  /* hero pointer parallax + scroll */
  if (fine) {
    $('#hero').addEventListener('pointermove', function (e) {
      var mx = e.clientX / window.innerWidth - 0.5, my = e.clientY / window.innerHeight - 0.5;
      $$('#bento [data-hpar]').forEach(function (im) { var k = +im.getAttribute('data-hpar'); gsap.to(im, { x: -mx * k * 2, y: -my * k * 2, duration: 1.2, overwrite: 'auto' }); });
      gsap.to('#bento', { rotationY: mx * 4, rotationX: -my * 3, transformPerspective: 1400, duration: 1.2, overwrite: 'auto' });
    });
  }
  var hRot = $('#bento .u-rot'), rs = { y: -34 };
  gsap.to(rs, { y: -24, duration: 4.5, ease: 'sine.inOut', yoyo: true, repeat: -1, onUpdate: function () { hRot.style.transform = 'rotateX(-20deg) rotateY(' + rs.y.toFixed(2) + 'deg)'; } });
  gsap.to('.hero-l', { y: -80, opacity: 0.2, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('#bento', { y: 70, ease: 'none', scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* menu bar on scroll, progress, phone bar, marquee speed */
  var vel = 0, dir = 1;
  ScrollTrigger.create({
    start: 0, end: 'max',
    onUpdate: function (s) {
      var y = s.scroll(); vel = s.getVelocity(); if (s.direction) dir = s.direction;
      nav.classList.toggle('solid', y > 40);
      nav.classList.toggle('hide', s.direction === 1 && y > 500 && !openMenu && !mob.classList.contains('open'));
      gsap.set('#progress', { scaleX: s.progress });
      $('#mobbar').classList.toggle('show', y > 500);
    }
  });
  var indRow = $('#indRow'), ix = 0, indHover = false;
  indRow.addEventListener('mouseenter', function () { indHover = true; });
  indRow.addEventListener('mouseleave', function () { indHover = false; });
  var indSpeed = 1;
  gsap.ticker.add(function (t, dt) {
    var half = indRow.scrollWidth / 2; if (!half) return;
    var target = indHover ? 0.08 : 1 + Math.min(4, Math.abs(vel) / 500);
    indSpeed += (target - indSpeed) * 0.08;
    ix -= 0.045 * dt * indSpeed;
    if (ix <= -half) ix += half;
    indRow.style.transform = 'translate3d(' + ix.toFixed(1) + 'px,0,0)';
    vel *= 0.92;
  });

  /* statement lights up word by word */
  (function () {
    var el = $('#stateT'), words = [];
    Array.prototype.slice.call(el.childNodes).forEach(function (n) {
      var g = n.nodeType === 1;
      (n.textContent || '').split(/\s+/).forEach(function (t) { if (t) words.push([t, g]); });
    });
    el.innerHTML = words.map(function (w) { return '<span class="sw' + (w[1] ? ' g' : '') + '">' + esc(w[0]) + '</span>'; }).join(' ');
    var sp = $$('.sw', el);
    ScrollTrigger.create({ trigger: el, start: 'top 82%', end: 'bottom 50%', scrub: true, onUpdate: function (s) { var k = Math.round(s.progress * sp.length); sp.forEach(function (x, i) { x.classList.toggle('lit', i < k); }); } });
  })();

  /* pinned explainer */
  (function () {
    var st = $('#how .stage'), rot = $('.u-rot', st), steps = $$('#steps .step');
    var g = function (c) { return $('.' + c, st); }, leaves = function (c) { return $$('.' + c + ' .pl', st); };
    var r = { x: -20, y: -34 }, T = { v: 42.2 }, cur = 0;
    var setR = function () { rot.style.transform = 'rotateX(' + r.x.toFixed(2) + 'deg) rotateY(' + r.y.toFixed(2) + 'deg)'; };
    var mix = function (a, b, k) { return Math.round(a + (b - a) * k); };
    var paint = function () {
      var t = T.v, k = (t - 20.9) / (42.2 - 20.9), c;
      if (k > 0.5) { var a = (k - 0.5) * 2; c = [mix(240, 228, a), mix(140, 49, a), mix(30, 58, a)]; }
      else { var b = k * 2; c = [mix(47, 240, b), mix(128, 140, b), mix(237, 30, b)]; }
      $('#tempN').textContent = t.toFixed(1);
      $('#tempB').style.color = 'rgb(' + c.join(',') + ')';
      $('#tempDot').style.left = ((t - 15) / 30 * 100).toFixed(1) + '%';
    };
    var small = window.matchMedia('(max-width:900px)').matches;
    var tl = gsap.timeline({
      defaults: { ease: 'power2.inOut' },
      scrollTrigger: {
        trigger: '#howPin', start: 'top top', end: function () { return '+=' + (small ? 1900 : 2800); }, pin: true, scrub: 0.7, anticipatePin: 1, invalidateOnRefresh: true,
        onUpdate: function (s) { var p = s.progress, k = p < 0.26 ? 0 : p < 0.52 ? 1 : p < 0.8 ? 2 : 3; if (k !== cur) { cur = k; steps.forEach(function (x, i) { x.classList.toggle('on', i === k); }); } }
      }
    });
    tl.to(r, { x: -16, y: -24, duration: 1, onUpdate: setR }, 0)
      .to(g('g-top'), { y: -190, duration: 1 }, 0).to(leaves('g-top'), { opacity: 0, duration: 0.8 }, 0.2)
      .to(g('g-front'), { z: 210, duration: 1 }, 0).to(leaves('g-front'), { opacity: 0, duration: 0.8 }, 0.2)
      .to(g('g-filter'), { x: -60, duration: 1 }, 0).to(g('g-fan'), { x: -44, duration: 1 }, 0)
      .to(g('g-hx'), { x: -14, duration: 1 }, 0).to(g('g-pad'), { x: 30, duration: 1 }, 0).to(g('g-out'), { x: 70, duration: 1 }, 0)
      .to(leaves('g-hx').concat(leaves('g-pad')), { opacity: 0.22, duration: 0.6 }, 0.4)
      .to(leaves('g-hx'), { opacity: 1, duration: 0.5 }, 1.1)
      .to(leaves('g-filter').concat(leaves('g-fan')), { opacity: 0.22, duration: 0.5 }, 1.1)
      .to(g('g-hx'), { y: -22, duration: 0.6 }, 1.1)
      .to(T, { v: 30.0, duration: 1, ease: 'none', onUpdate: paint }, 1.15)
      .to('#how', { backgroundColor: '#FAFAFD', duration: 1, ease: 'none' }, 1.15)
      .to('#hg1', { opacity: 0.25, duration: 1, ease: 'none' }, 1.15).to('#cg1', { opacity: 0.4, duration: 1, ease: 'none' }, 1.15)
      .to(leaves('g-hx'), { opacity: 0.22, duration: 0.5 }, 2.3).to(g('g-hx'), { y: 0, duration: 0.6 }, 2.3)
      .to(leaves('g-pad'), { opacity: 1, duration: 0.5 }, 2.3).to(g('g-pad'), { y: -22, duration: 0.6 }, 2.3)
      .to(T, { v: 20.9, duration: 1, ease: 'none', onUpdate: paint }, 2.35)
      .to('#how', { backgroundColor: '#EEF1FF', duration: 1, ease: 'none' }, 2.35)
      .to('#hg1', { opacity: 0, duration: 1, ease: 'none' }, 2.35).to('#cg1', { opacity: 0.85, duration: 1, ease: 'none' }, 2.35)
      .to(g('g-pad'), { y: 0, duration: 0.5 }, 3.5)
      .to([g('g-filter'), g('g-fan'), g('g-hx'), g('g-pad'), g('g-out')], { x: 0, duration: 1 }, 3.5)
      .to(leaves('g-filter').concat(leaves('g-fan'), leaves('g-hx')), { opacity: 1, duration: 0.6 }, 3.5)
      .to(g('g-top'), { y: 0, duration: 1 }, 3.5).to(leaves('g-top'), { opacity: 1, duration: 0.7 }, 3.6)
      .to(g('g-front'), { z: 0, duration: 1 }, 3.5).to(leaves('g-front'), { opacity: 1, duration: 0.7 }, 3.6)
      .to(r, { x: -20, y: -40, duration: 1, onUpdate: setR }, 3.5)
      .to('#howNote', { opacity: 1, y: 0, duration: 0.5 }, 4.0)
      .to({}, { duration: 0.35 });
    gsap.set('#howNote', { y: 20 });
    paint();
  })();

  /* tile reveals */
  ScrollTrigger.batch('#pgrid .pt, #wgrid .tile', {
    start: 'top 90%', once: true,
    onEnter: function (b) {
      gsap.fromTo(b, { clipPath: 'inset(35% 0% 0% 0% round 28px)', y: 70, opacity: 0 }, { clipPath: 'inset(0% 0% 0% 0% round 28px)', y: 0, opacity: 1, duration: 1.15, ease: 'power4.out', stagger: 0.1, clearProps: 'clipPath' });
      b.forEach(function (t, i) { var im = $('.pimg, img.bg', t); if (im) gsap.fromTo(im, { scale: 1.3 }, { scale: 1, duration: 1.6, ease: 'power3.out', delay: i * 0.1 }); });
    }
  });
  if (fine) {
    $$('.pt, .wt, .t-b, .t-c').forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var b = c.getBoundingClientRect(), px = (e.clientX - b.left) / b.width - 0.5, py = (e.clientY - b.top) / b.height - 0.5;
        gsap.to(c, { rotationY: px * 6, rotationX: -py * 6, transformPerspective: 1000, duration: 0.5, overwrite: 'auto' });
      });
      c.addEventListener('pointerleave', function () { gsap.to(c, { rotationY: 0, rotationX: 0, duration: 0.9, ease: 'elastic.out(1,0.6)', overwrite: 'auto' }); });
    });
  }

  /* call to action opens up */
  gsap.fromTo('#ctaIn', { clipPath: 'inset(12% 10% 12% 10% round 44px)' }, { clipPath: 'inset(0% 0% 0% 0% round 44px)', ease: 'none', scrollTrigger: { trigger: '#cta', start: 'top 92%', end: 'top 30%', scrub: 0.5 } });
  gsap.from('#word span', { yPercent: 105, duration: 1.1, ease: 'power4.out', stagger: 0.06, scrollTrigger: { trigger: '#word', start: 'top 96%' } });

  /* cursor + magnetic buttons */
  if (fine) {
    var cur = $('#cursor'), cx = gsap.quickTo(cur, 'x', { duration: 0.35, ease: 'power3' }), cy = gsap.quickTo(cur, 'y', { duration: 0.35, ease: 'power3' });
    window.addEventListener('pointermove', function (e) {
      cur.classList.add('on'); cx(e.clientX); cy(e.clientY);
      cur.classList.toggle('big', !!e.target.closest('a,button,.tile,input,textarea'));
    });
    document.addEventListener('pointerleave', function () { cur.classList.remove('on'); });
    $$('[data-mag]').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.28, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.4, overwrite: 'auto' });
      });
      b.addEventListener('pointerleave', function () { gsap.to(b, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1,0.45)', overwrite: 'auto' }); });
    });
  }
  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
})();
