<template>
    <div id="login">
        <div id="wrap">
            <div id="header"><!-- #header --></div>

            <div id="contents">
                <div class="inner">
                    <!--#contents -->
                    <div class="login-box">
                        <div class="box-contents">
                            <h1><img alt="healthbook" height="164" src="img/logologin.png" width="240"></h1>
                            <div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden"
                                    value="✓"><input name="authenticity_token" type="hidden"></div>
                            <dl>
                                <dt><img alt="ユーザーID" height="15" src="img/txt_id.png" width="78"></dt>
                                <dd><input class="beha code text" id="user_code" name="user_code"
                                        v-model="formLogin.user_code" size="20" type="text" tabindex="10000" />
                                </dd>
                                <dt><img alt="パスワード" src="img/txt_pass.png" width="70" height="15"></dt>
                                <dd><input class="beha password" id="password" name="password" size="20" type="password"
                                        v-model="formLogin.password" tabindex="10001"></dd>
                            </dl>
                            <div class="buttons">
                                <input type="button" value="ログイン" @click="getlogin()" class="nostyle" tabindex="10002">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="footer">
            <div id="copyright">Copyright (C) healthbook. ALL Right s Researved Edit by Lsky</div>
        </div>

    </div>
</template>
<script>

import axios from "axios";
export default {
    data() {
        return {
            formLogin: {
                password: '',
                user_code: ''
            },
            error: '',
        };
    },
    async mounted() {
        window.Menu = 'Login';
    },
    methods: {
        getlogin() {
            if (this.formLogin.password.length > 0) {
                axios.post('/api/v1/login', this.formLogin)
                    .then(response => {
                        if (response.data.success) {
                            this.$router.push({ name: "App" });
                            console.log(response.data.success);
                        } else {
                            this.$router.push({ name: "login" });
                        }
                    })
                    .catch(function (error) {
                        console.error(error);
                    });
            }
        }
    }
};
</script>