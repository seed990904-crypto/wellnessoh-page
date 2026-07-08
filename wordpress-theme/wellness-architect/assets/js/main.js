/* Wellness Architect — front-end interactions */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // --- Mobile menu toggle ---
    var toggle = document.querySelector('[data-menu-toggle]');
    var menu = document.querySelector('[data-mobile-menu]');
    var iconMenu = document.querySelector('[data-icon-menu]');
    var iconClose = document.querySelector('[data-icon-close]');

    function setMenu(open) {
      if (!menu) return;
      menu.classList.toggle('is-open', open);
      if (iconMenu) iconMenu.style.display = open ? 'none' : '';
      if (iconClose) iconClose.style.display = open ? '' : 'none';
    }

    if (toggle) {
      toggle.addEventListener('click', function () {
        setMenu(!(menu && menu.classList.contains('is-open')));
      });
    }

    // --- Smooth scroll for in-page anchor links, and close mobile menu ---
    document.querySelectorAll('a[href^="#"], [data-scroll-to]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var target = el.getAttribute('href') || el.getAttribute('data-scroll-to');
        if (!target || target === '#' || target.charAt(0) !== '#') return;
        var node = document.querySelector(target);
        if (!node) return;
        e.preventDefault();
        setMenu(false);
        node.scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
})();
