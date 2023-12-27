function validate(){
    if(document.myForm.Email.value == ""){
        alert("Please enter your email!");
        document.myForm.Email.focus();
        return false;
    }
    else if(document.myForm.Password.value == ""){
        alert("Please enter your password!");
        document.myForm.Password.focus();
        return false;
    }
    else {
        return true;
    }
}