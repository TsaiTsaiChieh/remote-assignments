const btn_sign_up = document.getElementsByClassName('sign-up')[0];
const btn_sign_in = document.getElementsByClassName('sign-in')[0];

const form_sign_up = document.getElementsByClassName('form-sign-up')[0];
const form_sign_in = document.getElementsByClassName('form-sign-in')[0];
var btn_sign_up_count = 0;
var btn_sign_in_count = 0;
const btn_sign_up_submit = document.getElementsByClassName('sign-up-submit')[0];

const signup_email = document.getElementsByClassName('sign-up-email')[0];
const signup_password = document.getElementsByClassName('sign-up-password')[0];
const signup_h3 = document.getElementsByClassName('sign-up-h3')[0];

const signin_email = document.getElementsByClassName('sign-in-email')[0];
const signin_password = document.getElementsByClassName('sign-in-password')[0];
const signin_h3 = document.getElementsByClassName('sign-in-h3')[0];

const sign_in_h3 = document.getElementsByClassName('sign-in-h3')[0];
const sign_up_h3 = document.getElementsByClassName('sign-up-h3')[0];

document.addEventListener("DOMContentLoaded", (e) => {
    // console.log('ready');


    // 登入和註冊按鈕的切換
    btn_sign_up.addEventListener('click', (e) => {

        if (btn_sign_up_count % 2 == 0) {
            form_sign_up.style.display = 'flex';
            btn_sign_up_count += 1;
            form_sign_in.style.display = 'none';
            btn_sign_in_count = 0;
        } else {
            form_sign_up.style.display = 'none';
            btn_sign_up_count += 1;
        }
    });
    btn_sign_in.addEventListener('click', (e) => {

        if (btn_sign_in_count % 2 == 0) {
            form_sign_in.style.display = 'flex';
            btn_sign_in_count += 1;
            form_sign_up.style.display = 'none';
            btn_sign_up_count = 0;
        } else {
            form_sign_in.style.display = 'none';
            btn_sign_in_count += 1;
        }
    });

    // console.log(sign_in_h3);
    // console.log(sign_up_h3);

    if (sign_up_h3) {
        form_sign_up.style.display = 'flex';
    }
    if (sign_in_h3) {
        form_sign_in.style.display = 'flex';
    }

});

function signup_check() {
    if (!signup_email.value) {
        signup_h3.innerHTML = 'E-mail should not be empty.'
        return false;
    } else if (!signup_password.value) {
        signup_h3.innerHTML = 'Password should not be empty.'
        return false;
    } else {
        return true;
    }

}
function signin_check() {
    if (!signin_email.value) {
        signin_h3.innerHTML = 'E-mail should not be empty.'
        return false;
    } else if (!signin_password.value) {
        signin_h3.innerHTML = 'Password should not be empty.'
        return false;
    } else {
        return true;
    }
}
