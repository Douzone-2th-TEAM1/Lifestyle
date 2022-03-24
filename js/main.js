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

var loadMain = () => {
  if (sessionStorage.getItem('loginFlag') === 'true') {
    $(document).ready(function () {
      $('#root-body').load('/html/main.html');
    });
  } else {
    alert('잘못된 접근입니다.');
    sessionStorage.setItem('loginFlag', false);
    $(document).ready(function () {
      $('#root-body').load('/html/JSB/SB-login.html');
    });
  }
};
