if (localStorage.getItem('userInfo') === null) {
  localStorage.setItem('userInfo', JSON.stringify([]));
}
var flag = false;
var checkIdFlag = false;
var user = '';

const checkID = () => {
  user = document.getElementById('userName').value;
  if (user.length === 0) {
    modal.getElementsByClassName('title')[0].innerHTML = '아이디를 입력하세요.';
    modalOn();
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
  if (flag) {
    modal.getElementsByClassName('title')[0].innerHTML = '사용가능한 ID입니다.';
    modalOn();
  } else {
    document.getElementById('userName').value = '';
    modal.getElementsByClassName('title')[0].innerHTML =
      '이미 존재하는 ID입니다.';
    modalOn();
  }
};

const signUp = () => {
  let user = document.getElementById('userName').value;
  const event = document.getElementsByClassName('contents')[0];
  let pwd = event[2].value;
  let pwdOk = event[3].value;

  if (user && pwd && pwdOk) {
    if (checkIdFlag && flag) {
      const originInfos = JSON.parse(localStorage.getItem('userInfo'));
      if (pwd === pwdOk && pwd.length > 0) {
        originInfos.push([user, pwd]);
        localStorage.setItem('userInfo', JSON.stringify(originInfos));
        modal.getElementsByClassName('title')[0].innerHTML = '회원가입 완료!!';
        modalOn();
        $(document).ready(function () {
          $('#layout').load('/html/login.html');
        });
        return;
      } else {
        modal.getElementsByClassName('title')[0].innerHTML =
          '비밀번호가 일치하지 않습니다.';
        modalOn();

        return;
      }
    } else if (!checkIdFlag) {
      modal.getElementsByClassName('title')[0].innerHTML =
        '아이디 중복체크는 필수입니다.';
      modalOn();
    } else {
      modal.getElementsByClassName('title')[0].innerHTML = '잘못된 정보입니다.';
      modalOn();
      $(document).ready(function () {
        $('#layout').load('/html/login.html');
      });
    }
  } else {
    modal.getElementsByClassName('title')[0].innerHTML = '모든값은 필수입니다.';
    modalOn();
  }
};
