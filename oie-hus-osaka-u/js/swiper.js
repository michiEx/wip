(function() {
  'use strict';


/* works-slide
------------------------------*/

(function() {
  const swiper = new Swiper(".swiper", {
  loop: true, // ループ有効
  slidesPerView: 5, // 一度に表示する枚数
  speed: 5000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  autoplay: {
    delay: 0, // 途切れなくループ
  },
  breakpoints: {
  640: {
    slidesPerView: 1, // 表示するスライド数
    spaceBetween: 10, // スライド間のスペース
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
},
});
}());

})();
