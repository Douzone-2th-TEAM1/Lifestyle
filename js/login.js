/* SIGN IN FUNCTION */
var signIn = () => {
  let userName = document.getElementById('input-id').value;
  let userPassword = document.getElementById('input-password').value;
  if (userName.length === 0) {
    alert('아이디를 입력해주세요.');
    return;
  }
  if (userPassword.length === 0) {
    alert('비밀번호를 입력해주세요.');
    return;
  }

  if (localStorage.getItem('userInfo') === null) {
    alert('잘못된 아이디 혹는 비밀번호입니다.');
    return;
  }
  const originInfos = JSON.parse(localStorage.getItem('userInfo'));
  for (let i = 0; i < originInfos.length; i++) {
    if (originInfos[i][0] === userName && originInfos[i][1] === userPassword) {
      alert('로그인에 성공했습니다.');
      // 임시 로그인 유지 기능 sessionStorage
      $(document).ready(function () {
        $('body').load('/html/main.html');
      });
      return;
    }
  }
  alert('잘못된 아이디 혹는 비밀번호입니다.');
};
/* CREATE ACCOUNT FUNCTION */
var createAccount = () => {
  $('#layout').load('/html/signup.html');
};
