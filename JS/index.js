var email = document.getElementById('email');
var password = document.getElementById('password');
var invalidAll = document.getElementById('invalidAll');
var invalidPass = document.getElementById('invalidPass');
var invalidemail = document.getElementById('invalidemail');

var loginBtn = document.getElementById('loginBtn');
var logout = document.getElementById('logout');

function checkUser(){
    if( (email.value=='' && password.value == '' ) || (email.value=='' || password.value == '')){
        invalidAll.classList.replace("d-none" , "d-block");
        invalidemail.classList.replace("d-block" , "d-none");
        invalidPass.classList.replace("d-block" , "d-none");
    }
    else {
        var user ={
            email :email.value  , 
            password :password.value  , 
        }
      if(localStorage.getItem('users') != null){
            var localUsers = JSON.parse(localStorage.getItem('users')) ;
            for(var i=0 ; i<localUsers.length ; i++){
            if( (user.email==localUsers[i].email) &&  user.password == localUsers[i].password){
                location.href = 'home.html';
                localStorage.setItem("sessionUsername" , JSON.stringify(localUsers[i].userName) );
            }
            else if(user.email == localUsers[i].email &&  user.password != localUsers[i].password){
                invalidPass.classList.replace("d-none" , "d-block");
                invalidAll.classList.replace("d-block" , "d-none");
                invalidemail.classList.replace("d-block" , "d-none");
            }
            else if(user.email != localUsers[i].email ){
                invalidemail.classList.replace("d-none" , "d-block");
                invalidAll.classList.replace("d-block" , "d-none");
                invalidPass.classList.replace("d-block" , "d-none");
            }
        }
    }
  }
}

function getUserName (){
    document.getElementById('content').innerHTML += JSON.parse(localStorage.getItem('sessionUsername')) ;
}

function logOut(){
    location.href = 'index.html';
    localStorage.removeItem("sessionUsername");
}


// logout  (addEventListener)

// logout.addEventListener('click' , function(){
//     logout();
// })


// login (addEventListener)

// loginBtn.addEventListener('click' , function(){
//     checkUser();
//     var userName = JSON.parse(localStorage.getItem('sessionUsername')) ;
//     document.getElementById('content').innerHTML += userName ;
//     }
// )