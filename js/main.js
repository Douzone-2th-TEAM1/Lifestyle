var swiper = new Swiper('.swiper', {
  speed: 500,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
  },
});
// debugger;
var myswiper = document.querySelector('.swiper').swiper;

// Now you can use all slider methods like
myswiper.autoplay.running;
