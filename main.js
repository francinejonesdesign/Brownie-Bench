/* The Brownie Bench — interactions */
(function () {
  'use strict';

  /* ---- current year ---- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- sticky header ---- */
  var header = document.querySelector('.site-header');
  var onScroll = function () {
    header.classList.toggle('stuck', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- menu overlay ---- */
  var btn = document.getElementById('menuBtn');
  var close = document.getElementById('navClose');
  var nav = document.getElementById('navOverlay');

  function setMenu(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) {
      var first = nav.querySelector('a');
      if (first) first.focus();
    } else {
      btn.focus();
    }
  }

  btn.addEventListener('click', function () {
    setMenu(!nav.classList.contains('open'));
  });
  close.addEventListener('click', function () { setMenu(false); });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) setMenu(false);
  });

  /* ---- flavour picker ---- */
  var picked = [];
  var out = document.getElementById('flavourPicked');

  Array.prototype.forEach.call(
    document.querySelectorAll('.flavour-card'),
    function (card) {
      card.setAttribute('aria-pressed', 'false');
      card.addEventListener('click', function () {
        var name = card.dataset.flavour;
        var on = card.getAttribute('aria-pressed') === 'true';
        card.setAttribute('aria-pressed', String(!on));

        if (on) {
          picked = picked.filter(function (f) { return f !== name; });
        } else {
          picked.push(name);
        }

        if (!picked.length) {
          out.textContent = '';
        } else if (picked.length === 1) {
          out.textContent = picked[0] + ' — good choice.';
        } else {
          out.textContent =
            picked.slice(0, -1).join(', ') + ' and ' + picked[picked.length - 1] + ' — nice mix.';
        }
      });
    }
  );

  /* ---- scroll reveal ---- */
  var targets = document.querySelectorAll(
    '.flavours-head, .split-copy, .split-media, .story-inner, .promise-card, ' +
    '.step, .box-card, .delivery-inner, .faq-item, .order-inner'
  );

  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (t) { t.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (t, i) {
    t.classList.add('reveal');
    t.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(t);
  });
})();
