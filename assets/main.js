(function () {
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.textContent, done = function () { b.textContent = '복사됨'; setTimeout(function () { b.textContent = t; }, 1500); };
      var sel = function () {
        var el = document.querySelector('[data-mail]'); if (!el) return;
        var r = document.createRange(); r.selectNodeContents(el);
        var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(b.dataset.copy).then(done, sel);
      else sel();
    });
  });
  var y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
