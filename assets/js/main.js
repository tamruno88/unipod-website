/* Unipod — scroll-reveal on entering viewport. Progressive enhancement:
   without JS the .no-js rule keeps everything visible. */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  function reveal() {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState !== 'loading') reveal();
  else document.addEventListener('DOMContentLoaded', reveal);
})();
