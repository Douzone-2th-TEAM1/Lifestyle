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
  $('#root-body').css('overflow', 'auto');
}

modal.addEventListener('click', (e) => {
  var evTarget = e.target;
  if (evTarget.classList.contains('modal-button-bottom')) {
    modalOff();
  }
});

window.addEventListener('keyup', (e) => {
  if (isModalOn() && e.key === 'Escape') {
    modalOff();
  }
});
