var userName = document.getElementById('userName');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signupBtn = document.getElementById('signupBtn');
var invalidAll = document.getElementById('invalidAll');
var validAll = document.getElementById('validAll');
var emailExist = document.getElementById('emailExist');
var invalidPass2 = document.getElementById('invalidPass2');
var invalidEmail = document.getElementById('invalidEmail');


var allUsers = [];

function validateEmail (){
    var regEx = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/i 
    return regEx.test(email.value);
}
function validatePassword (){
    var regEx = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm 
    return regEx.test(password.value);
}

if(localStorage.getItem('users') != null){
    JSON.parse(localStorage.getItem('users'));
}

function addUser(){
    // validate if any input empty 
    if((userName.value =='' && email.value=='' && password.value == '') ||
      (userName.value =='' || email.value=='' || password.value == '')  ||
      (userName.value =='' && email.value=='') ||
      (userName.value =='' && password.value == '') ||
      (email.value=='' && password.value == '') )
      {
        invalidAll.classList.replace("d-none" , "d-block");
        emailExist.classList.replace("d-block" , "d-none");
        validAll.classList.replace("d-block" , "d-none");
        invalidEmail.classList.replace("d-block" , "d-none");
        invalidPass2.classList.replace("d-block" , "d-none");
      }
        // validate if email empty or email and password empty
      else if(!validateEmail () ){
            invalidAll.classList.replace("d-block" , "d-none");
            emailExist.classList.replace("d-block" , "d-none");
            validAll.classList.replace("d-block" , "d-none");
            invalidPass2.classList.replace("d-block" , "d-none");
            invalidEmail.classList.replace("d-none" , "d-block");
              if(!validateEmail () && !validatePassword () ){
            invalidAll.classList.replace("d-block" , "d-none");
            emailExist.classList.replace("d-block" , "d-none");
            validAll.classList.replace("d-block" , "d-none");
            invalidEmail.classList.replace("d-none" , "d-block");
            invalidPass2.classList.replace("d-none" , "d-block");
          }
        }
 // validate if password empty or email and password empty
          else if(!validatePassword () ){
            invalidAll.classList.replace("d-block" , "d-none");
            emailExist.classList.replace("d-block" , "d-none");
            validAll.classList.replace("d-block" , "d-none");
            invalidEmail.classList.replace("d-block" , "d-none");
            invalidPass2.classList.replace("d-none" , "d-block");
            if(!validateEmail () && !validatePassword () ){
            invalidAll.classList.replace("d-block" , "d-none");
            emailExist.classList.replace("d-block" , "d-none");
            validAll.classList.replace("d-block" , "d-none");
            invalidEmail.classList.replace("d-none" , "d-block");
            invalidPass2.classList.replace("d-none" , "d-block");
          }
          }
        //   if validate correct
    else{
        var users ={
            userName : userName.value  , 
            email :email.value  , 
            password :password.value  , 
        }
        
        if(localStorage.getItem('users') != null)
        { 
            var localUsers = JSON.parse(localStorage.getItem('users')) ;
            for(var i=0 ; i<localUsers.length ; i++){
                // check if email is exist 
            if(users.email == localUsers[i].email){
                emailExist.classList.replace("d-none" , "d-block");
                validAll.classList.replace("d-block" , "d-none");
                invalidAll.classList.replace("d-block" , "d-none");
                invalidPass2.classList.replace("d-block" , "d-none");
                invalidEmail.classList.replace("d-block" , "d-none");
            }
            // add new user 
            else {
                allUsers.push(users);
                localStorage.setItem("users" , JSON.stringify(allUsers) );
                validAll.classList.replace("d-none" , "d-block");
                invalidAll.classList.replace("d-block" , "d-none");
                emailExist.classList.replace("d-block" , "d-none");
                invalidPass2.classList.replace("d-block" , "d-none");
                invalidEmail.classList.replace("d-block" , "d-none");
                clearForm ();
                location.href = 'index.html';
                }
            }
        }
         // add new user 
        else {
            allUsers.push(users);
            localStorage.setItem("users" , JSON.stringify(allUsers) );
            validAll.classList.replace("d-none" , "d-block");
            invalidAll.classList.replace("d-block" , "d-none");
            emailExist.classList.replace("d-block" , "d-none");
            invalidPass2.classList.replace("d-block" , "d-none");
            clearForm ();
            location.href = 'index.html';
        }
    }
}
signupBtn.addEventListener('click' , function(){
    addUser() ;
})
// clear all inputs 
function clearForm () {
    userName.value = "";
    email.value = "";
    password.value = "";
}
