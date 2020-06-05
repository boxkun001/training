document.getElementById('ok').addEventListener('click', () => {
    let a = document.getElementById('mail_address_form').value;
    let b = document.getElementById('password_form').value;

    document.getElementById('mail_address_error').textContent = addressCheck(a);
    document.getElementById('password_error').textContent = passwordCheck(b);

    if (document.getElementById('mail_address_error').textContent === '' && document.getElementById('password_error').textContent === '') {
        alertOk();
    }

});

/**
 * 
 * @param {string} mail_address
 */
function addressCheck(mail_address) {
    if (mail_address === '') {
        document.getElementById('mail_address_form').style.cssText = 'border:2px solid red; background-color: rgba(255, 99, 71, 0.4); ';
        document.getElementById('mail_address_error').style.display = 'inline-block';
        return '×必須入力です';
    } else if (!(mail_address.includes('@'))) {
        document.getElementById('mail_address_form').style.cssText = 'border:2px solid red; background-color: rgba(255, 99, 71, 0.4);';
        document.getElementById('mail_address_error').style.display = 'inline-block';
        return '×メールアドレスの形式が不正です';
    }

    document.getElementById('mail_address_form').style.cssText = 'border: 2px solid gold; background-color: lemonchiffon;';
    document.getElementById('mail_address_error').style.display = 'none';
    return '';
}

/**
 * 
 * @param {string} pw 
 */
function passwordCheck(pw) {
    if (pw === '') {
        document.getElementById('password_form').style.cssText = 'border:2px solid red; background-color: rgba(255, 99, 71, 0.4);';
        document.getElementById('password_error').style.display = 'inline-block';
        return '×必須入力です';
    } else if (pw.length < 8) {
        document.getElementById('password_form').style.cssText = 'border:2px solid red; background-color: rgba(255, 99, 71, 0.4); ';
        document.getElementById('password_error').style.display = 'inline-block';
        return '×パスワードは8文字以上で入力してください';
    }
    document.getElementById('password_error').style.display = 'none';
    document.getElementById('password_form').style.cssText = 'border: 2px solid gold; background-color: lemonchiffon;';

    return '';
}

function alertOk() {
    alert('ご登録ありがとうございました');
}