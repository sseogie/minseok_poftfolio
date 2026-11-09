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

/* 이미지 저장 방지(우클릭·드래그 차단). img만 대상, 캔버스 인터랙션은 유지 */
(function () {
  function isImg(e) { return e.target && e.target.tagName === "IMG"; }
  document.addEventListener("contextmenu", function (e) { if (isImg(e)) e.preventDefault(); });
  document.addEventListener("dragstart", function (e) { if (isImg(e)) e.preventDefault(); });
})();
