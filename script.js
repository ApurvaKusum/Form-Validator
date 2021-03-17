const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show input Error
function showError(input,message){
const fromControl = input.parentElement;
fromControl.className = 'form-control error';
const small = fromControl.querySelector('small');
small.innerText = message;
}
// Show Success
function showSuccess(input){
    const fromControl = input.parentElement;
    fromControl.className = 'form-control success';
}
// Email check

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input,'Email is not valid');
    }
}
//check required feilds
function checkRequired(inputArr){
inputArr.forEach((input) => {
   if(input.value.trim()===''){
       showError(input,`${getFieldName(input)} is required`);
   } else {
       showSuccess(input);
   }
});
}
//Get the name for the feilds in the error message
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() +input.id.slice(1);
}

//Password Match
function checkPassword(input,input1){
    if(input.value !== input1.value){
     showError(input2,'Password doesnt Match');
    } 
}

// check input length

function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }else if (input.value.length >max){
        showError(input,`${getFieldName(input)} must not be greater than ${max} characters`);
    }
    else{
        showSuccess(input);
    }

}

//Event Listener
form.addEventListener('submit',function(e){
e.preventDefault();
checkRequired([username,email,password,password2]);
checkLength(username,3, 15);
checkLength(password,6,25);
checkLength(password2,6,25);
checkEmail(email);
checkPassword(password,password2);
});