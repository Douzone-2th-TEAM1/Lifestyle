var modal = document.getElementById('modal');
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

var btnLogout = document.getElementById('btn-logout');
btnLogout.addEventListener('click', (e) => {
  // 아 왜 안돼 이렇게라도 해야되나
  $('html').stop().animate({ scrollTop: 0 }, 0);
  modalOn();
});

// const btnCancel = document.getElementById('btn-cancel');
// btnCancel.addEventListener('click', (e) => {
//   modalOff();
// });

var btnSubmit = document.getElementById('btn-submit');
btnSubmit.addEventListener('click', (e) => {
  /**
   * 여기에 index.html로 이동하는 코드 넣으면 될듯
   */
  modalOff();
  $(document).ready(function () {
    $('#root-body').load('/html/JSB/SB-login.html');
  });
});

modal.addEventListener('click', (e) => {
  var evTarget = e.target;
  if (evTarget.classList.contains('modal-overlay')) {
    modalOff();
  }
});

// ESC 누르면 꺼짐
window.addEventListener('keyup', (e) => {
  if (isModalOn() && e.key === 'Escape') {
    modalOff();
  }
});
