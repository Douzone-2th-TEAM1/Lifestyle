<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
    <link rel="stylesheet" href="../css/signup.css" />
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script type="text/javascript">

        let userName = '';
        userName = document.getElementById('userName');

        if (localStorage.getItem("userInfo") === null) {
            localStorage.setItem("userInfo", JSON.stringify([]));
        }

        const checkID = () => {
            user = document.getElementById('userName').value;

            const originInfos = JSON.parse(localStorage.getItem('userInfo'));
            
            for (let i = 0; i < originInfos.length; i++) {
                if (originInfos[i][0].includes(user)) {
                    alert('중복 ID');
                }
            };

            const signUp = () => {
                const user = event.target[0].value;
                const pwd = event.target[2].value;
                const pwdOk = event.target[3].value;

                const originInfos = JSON.parse(localStorage.getItem('userInfo'));

                if (pwd === pwdOk && !originInfos.includes(user)) {

                    // Set localStorage
                    originInfos.push([user, pwd]);
                    localStorage.setItem("userInfo", JSON.stringify(originInfos));

                } else if (pwd !== pwdOk) {
                    alert('비밀번호 불일치');
                } else if (Arr.includes(user)) {
                    alert('중복된 ID');
                }
            };
        }
    </script>
</head>

<body>
    <form class="contents" onsubmit="signUp()">
        <div class="id_layout">
            <input id="userName" class="userName" placeholder="UserName" />
            <input id="checkid" class="btn" type="button" value="Check ID" onclick="checkID()" />
        </div>
        <input id="password" class="password" placeholder="password" />
        <input id="passwordOk" class="passwordOk" placeholder="Confirm Password" />
        <input id="signup" class="btn" type="submit" value="SIGN UP" />
    </form>
</body>

</html>
