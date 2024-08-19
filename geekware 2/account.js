var email = document.forms['form'] ['email'];
var password = document.forms['form'] ['password']

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

email.addEventlister('textInput', email_Verify);
password.addEventlister('textInput', pass_Verify)

function validated(){
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
}
function email_Verify(){
    if (email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "noce";
        return true;

    }
}
function email_Verify(){
    if (password.value.length >= 5){
        password.style.border = "1px solid silver";
        pass_error.style.display = "noce";
        return true;

    }
}