/* Næste Skridt · site.js (v3)
   Mobilmenu: åbn og luk, Escape, luk ved klik på et link og ved skift til desktopbredde.
      Mens menuen er åben, er <main> og sidefoden inert, så tastaturfokus bliver i menuen. */
(function () {
  'use strict';
  var body = document.body;

  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('hovedmenu');
  if (!btn || !nav) return;
  var label = btn.querySelector('.menu-btn__label');
  var outside = document.querySelectorAll('main, .site-footer');

  function setOpen(open) {
    body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? 'Luk' : 'Menu';
    for (var i = 0; i < outside.length; i++) outside[i].inert = open;
  }

  btn.addEventListener('click', function () {
    setOpen(!body.classList.contains('menu-open'));
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('menu-open')) {
      setOpen(false);
      btn.focus();
    }
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  var desktop = window.matchMedia('(min-width: 64.0625rem)');
  if (desktop.addEventListener) {
    desktop.addEventListener('change', function (e) { if (e.matches) setOpen(false); });
  }
})();
