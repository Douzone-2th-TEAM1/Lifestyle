var userName = document.getElementsByClassName('input-id')[0];
var userPassword = document.getElementsByClassName('input-password')[0];
var loginBtn = document.getElementsByClassName('btn-signin')[0];

function stateBtn() {
  if (userName.value && userPassword.value) {
    loginBtn.disabled = false;
  }
}
userName.addEventListener('keyup', stateBtn);
userPassword.addEventListener('keyup', stateBtn);

var signIn = () => {
  if (localStorage.getItem('userInfo') === null) {
    userName.value = '';
    userPassword.value = '';

    modal.getElementsByClassName('title')[0].innerHTML =
      '알 수 없는 에러가 발생했습니다.';
    modalOn();
    return;
  }
  const originInfos = JSON.parse(localStorage.getItem('userInfo'));
  for (let i = 0; i < originInfos.length; i++) {
    if (
      originInfos[i][0] === userName.value &&
      originInfos[i][1] === userPassword.value
    ) {
      sessionStorage.setItem('loginFlag', true);
      $(document).ready(function () {
        $('#root-body').load('/html/main.html');
      });
      return;
    }
  }
  userName.value = '';
  userPassword.value = '';

  modal.getElementsByClassName('title')[0].innerHTML =
    '잘못된 아이디 혹은 비밀번호입니다.';
  modalOn();
};

var createAccount = () => {
  $('#layout').load('/html/signup.html');
};
