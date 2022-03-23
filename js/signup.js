if (localStorage.getItem('userInfo') === null) {
  localStorage.setItem('userInfo', JSON.stringify([]));
}
let flag = false;
let checkIdFlag = false;
let user = '';

const checkID = () => {
  user = document.getElementById('userName').value;
  if (user.length === 0) {
    alert('아이디를 입력하세요.');
    return;
  }
  const originInfos = JSON.parse(localStorage.getItem('userInfo'));

  if (originInfos.length > 0) {
    for (let i = 0; i < originInfos.length; i++) {
      if (originInfos[i][0] === user) {
        flag = false;
        break;
      } else {
        flag = true;
      }
    }
  } else {
    flag = true;
  }
  checkIdFlag = true;
  if (flag) alert('사용가능한 ID입니다.');
  else {
    document.getElementById('userName').value = '';
    alert('사용 불가능한 ID입니다');
  }
};

const signUp = () => {
  let user = document.getElementById('userName').value;
  if (user.length === 0) {
    alert('아이디를 입력하세요.');
    return;
  }
  const event = document.getElementsByClassName('contents')[0];
  // debugger;
  let pwd = event[2].value;
  let pwdOk = event[3].value;

  if (checkIdFlag && flag) {
    const originInfos = JSON.parse(localStorage.getItem('userInfo'));
    if (pwd === pwdOk && pwd.length > 0) {
      originInfos.push([user, pwd]);
      localStorage.setItem('userInfo', JSON.stringify(originInfos));
      alert('회원가입 완료!');
      $(document).ready(function () {
        $('#layout').load('/html/login.html');
      });
      return;
    } else if (pwd.length <= 0 || pwdOk.length <= 0) {
      alert('잘못된 양식입니다.');
    } else {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  } else if (checkIdFlag === false) {
    alert('아이디 중복 체크 필요');
  } else {
    alert('잘못된 정보입니다.');
  }
};

const init = () => {
  flag = false;
  checkIdFlag = false;
  user = '';

  document.getElementById('userName').value = '';
  document.getElementById('password').value = '';
  document.getElementById('passwordOk').value = '';
};
