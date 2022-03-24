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
      $('html, body').stop().animate({ scrollTop: 0 }, 0);
    });
  } else {
    alert('잘못된 접근입니다.');
    sessionStorage.setItem('loginFlag', false);
    $(document).ready(function () {
      $('#root-body').load('/html/JSB/SB-login.html');
      $('html, body').stop().animate({ scrollTop: 0 }, 0);
    });
  }
};

var livigPage = () => {
  $(document).ready(function () {
    $('#main-contents').load('../../html/pcy/listpage.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var livingArticlePage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/pcy/articlePage.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var techPage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/LDH/page1.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var techArticlePage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/LDH/page2.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var economyPage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/JSB/SB-page2.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var economyArticlePage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/JSB/SB-page3.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var sportsPage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/TM/TM-page2.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};

var sportsArticlePage = () => {
  $(document).ready(function () {
    $('#main-contents').load('/html/TM/TM-page3.html');
    $('html, body').stop().animate({ scrollTop: 0 }, 0);
  });
};
