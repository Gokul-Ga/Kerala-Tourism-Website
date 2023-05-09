// first name
var NameInput=document.getElementById('name');
NameInput.addEventListener('blur',validatename);
function validatename(){
    var Name=NameInput.value.trim();
    var regex=/^[a-zA-Z]{2,}$/; // regular expression to match letters only
    var error1=document.getElementById('error1');
    if(Name==''){
        error1.innerText="Field cannot be empty !";
        error1.style.background='white';
        error1.style.color='red';
    }
    else if(!regex.test(Name)){
        error1.innerText="Please enter a valid name";
        error1.style.background='white';
        error1.style.color='red';
    }
    else{
        error1.innerText="Valid";
        error1.style.background='white';
        error1.style.color='green';
    }
}
// Email
var emailInput=document.getElementById('email');
emailInput.addEventListener('blur',validateEmail);
function validateEmail(){
    var email=emailInput.value.trim();
    var regex_em=/^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regular expression to match email format
    var emlerror=document.getElementById('emlerror');
    if(email==''){
        emlerror.innerText="Field cannot be empty!!";
        emlerror.style.background='white';
        emlerror.style.color='red';
    }
    else if (!regex_em.test(email)){
        emlerror.innerText="Please enter a valid Email ID";
        emlerror.style.background='white';
        emlerror.style.color='red';
    }
    else{
        emlerror.innerText="Valid";
        emlerror.style.background='white';
        emlerror.style.color='Green';
    }
}
// phone number
var phoneInput=document.getElementById('phonenumber');
phoneInput.addEventListener('blur',validatephoneNumber);
function validatephoneNumber(){
    var phoneNumber=phoneInput.value.trim().replace(/[- .]/g, ''); // remove dashes, periods, and spaces from phone number
    var regex_num=/^[0-9]{10}$/; // regular expression to match phone number format
    var numerror=document.getElementById('numerror');
    if(phoneNumber==''){
        numerror.innerText="Field cannot be empty !";
        numerror.style.background='white';
        numerror.style.color='red';
    }
    else if(!regex_num.test(phoneNumber)){
        numerror.innerText="Please enter a valid phone number";
        numerror.style.background='white';
        numerror.style.color='red';
    }
    else{
        numerror.innerText="Valid";
        numerror.style.background='white';
        numerror.style.color='green';
    }
}
// Password Validation

var passwordInput=document.getElementById('pass');
passwordInput.addEventListener('input',validatePassword);
function validatePassword(){
    const password=passwordInput.value.trim();
    var regex_pas=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/; // regular expression to match password format
    var pswd=document.getElementById('pswderror');
    var str=document.getElementById('strength');
    if(!regex_pas.test(password)){
        pswd.innerText="Must contain Min. 8 chars with atleast one uppercase, lower case and a number";
        pswd.style.background='white';
        pswd.style.color='red';
    }
    else if(password==''){
        pswd.innerText="Field cannot be empty !";
        pswd.style.background='white';
        pswd.style.color='red';
    } else {
        pswd.innerText="Valid";
        pswd.style.background='white';
        pswd.style.color='Green';
    }
    
    // check password strength and set the input background color accordingly
    if(password.length>=12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)){
        str.style.backgroundColor='green';
        str.innerText=" Password is Strong";
    }
    else if(password.length>=8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password)){
        str.style.backgroundColor='orange';
        str.innerText="Password strength is Medium";
    }
    else {
        str.style.backgroundColor = 'red';
        str.innerText="Password Strength is Poor";
    }
}

//Password Confirmation 

var passwordrepeat=document.getElementById('pswd2');
passwordrepeat.addEventListener('blur',passwordvalidate);
function passwordvalidate(){
    var passre=document.getElementById('pswd2error');
    var passwordre=passwordrepeat.value.trim();

    var passwordInput=document.getElementById('pass');
    const password=passwordInput.value.trim();

    if(passwordre==''){
        passre.innerText="Field cannot be empty !"
        passre.style.background='white';
        passre.style.color='red';
    }
    else if(passwordre==password){
        passre.innerText="Password is Matching"
        passre.style.background='white';
        passre.style.color='green';
    }
    else{
        passre.innerText="Password do not match"
        passre.style.background='white';
        passre.style.color='red';
    }
}

