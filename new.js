let email=document.querySelector('#email');
let password=document.querySelector('#password');
let address=document.querySelector('#address');
localStorage.setItem('cryptocodes','Crypto');
document.querySelector('button').addEventListener('click',()=>{
    if (email.value=='' || password.value==''||address.value!==localStorage.getItem('cryptocodes')) {
        alert('email or password or bitconin not matching');
    }else{
     document.querySelector('.first-block').style.display="none"
     setTimeout(()=>{
     document.querySelector('.show-case').style.display="initial"
     console.log(Math.floor(Math.random()*10))
     },Math.floor(Math.random()*1000))    
    }
})
document.querySelector('.go-back').addEventListener('click',()=>{
    document.querySelector('.show-case').style.display="none"
    location.reload();
    document.querySelector('.first-block').style.display="initial"  
})