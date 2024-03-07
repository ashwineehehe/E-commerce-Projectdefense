let formBtn=document.querySelector('.signupbtn');
let loader=document.querySelector('.logo');

formBtn.addEventListener('click',()=>{
    let email=document.querySelector('#email');
    let password=document.querySelector('#password');
    let repeatpassword=document.querySelector('#repeat password');

    if(!email.value.length){
        showFormError('Enter your email');
    }else if(password.value.length<11){
        showFormError('Password must be 11 letters long');
    }else{

    }
    getdoc(doc(user,email)).then(user=>{
        if(user.exists()){
            return resizeBy.json({'alert':'email already exists'})
        }else{
            

        }
        }
    })
 