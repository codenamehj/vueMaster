<template>
    <div>
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img src="../../public/kakao_login_medium_narrow.png" />
        </a>
        <button type="button" @click="kakaoLogout">로그아웃</button>
    </div>
</template>
<script>
export default {
    methods: {
        kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image, account_email',
                success: this.getKakaoAccount
            });
        },
        getKakaoAccount() {
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account);
                    const nickname = kakao_account.profile.nickname;
                    const email = kakao_account.email;

                    console.log('nickname', nickname);
                    console.log('email', email);

                    alert("로그인 성공!");
                },
                fail: error => {
                    console.log(error);
                }
            })
        },
        kakaoLogout() {
            window.Kakao.Auth.logout((res) => {
                console.log(res);
            });
        }
    }
}
</script>