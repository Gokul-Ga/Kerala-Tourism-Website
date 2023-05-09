// var nam= document.getElementById('name');
var email=document.getElementById('email')
var pswd=document.getElementById('pswd');
var err1=document.getElementById('error1')
var err2=document.getElementById('error2')


// if(email.value==''||pswd.value==''){
//     alert('Fields cannot be empty');
// }
// else if(pswd.value.length<8)   {
// err2.innerText='Password must contain 8 characters'
// }
// else{
//     alert('Form Submitted')
// }
// }

// let regex_email=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
let regex_email=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let regex_pswd= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

var flag=false;
var flag1=true;
var flag2=true;

function validate(){
    // if(email.value==''||pswd.value==''){
    //  alert('Fields cannot be empty');
    // }
    if(email.value==''){
        err1.innerText='E-mail cannot be empty !'
        err1.style.color='red';
        err1.style.background='white';
    }
    else if(regex_email.test(email.value)){
        err1.innerText="Valid Email";
        err1.style.color='green';
        err1.style.background='white';
    }
    else{
        err1.innerText="Invalid Email";
        err1.style.color='red';
        err1.style.background='white';
        flag1=false;
    }

    if(pswd.value=='' && pswd.value.length<8){
        err2.innerText="Password cannot be empty !";
        err2.style.background='white';
        err2.style.color='red';
    }
    else if(regex_pswd.test(pswd.value) && pswd.value.length>8){
        err2.innerText="Valid format";
        err2.style.background='white';
        err2.style.color='green';
    }
    else{
        err2.innerText="Invalid format or less than 8 characters";
        err2.style.background='white';
        err2.style.color='red';
        flag2=false;
    }
    if(flag1 && flag2)
        flag=true;
    return flag;
}


