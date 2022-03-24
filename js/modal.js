var modal = document.getElementById('modal');
// debugger;
modal.style.display = 'none';

function modalOn() {
  modal.style.display = 'flex';
  $('#root-body').css('overflow', 'hidden');
}

function isModalOn() {
  return modal.style.display === 'flex';
}

function modalOff() {
  modal.style.display = 'none';
  $('#root-body').css('overflow', 'scroll');
}

// var btnLogout = document.getElementById('btn-logout');
// btnLogout.addEventListener('click', (e) => {
//   // console.log(window.scrollY);
//   $('html').stop().animate({ scrollTop: 0 }, 0);
//   // $('html').stop().animate({ scrollTop: window.scrollY }, 0);
//   if (sessionStorage.getItem('loginFlag') !== 'true') {
//     document.getElementById('title').innerText = '잘못된 접근입니다.';
//   }
//   modalOn();
// });

// const btnCancel = document.getElementById('btn-cancel');
// btnCancel.addEventListener('click', (e) => {
//   modalOff();
// });

// var btnSubmit = document.getElementById('btn-submit');
// btnSubmit.addEventListener('click', (e) => {
//   sessionStorage.setItem('loginFlag', 'false');
//   modalOff();
//   $(document).ready(function () {
//     $('#root-body').load('/html/JSB/SB-login.html');
//   });
// });

modal.addEventListener('click', (e) => {
  var evTarget = e.target;
  if (evTarget.classList.contains('modal-button-bottom')) {
    modalOff();
  }
});

// ESC 누르면 꺼짐
window.addEventListener('keyup', (e) => {
  if (isModalOn() && e.key === 'Escape') {
    modalOff();
  }
});
