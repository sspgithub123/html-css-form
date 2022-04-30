const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input',function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if(nameRegex.test(text.value)){
        textError.textContent = "";
    }else{
        textError.textContent = "Name is incorrect";
    }
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
email.addEventListener('input',function(){
    let emailRegex = RegExp('^[a-zA-Z0-9_]+[-+.]?[A-Za-z0-9_]+@[A-Za-z0-9]+[.][a-z]{2,}[.]?([a-z]{2,})?$');
    if(emailRegex.test(email.value)){
        emailError.textContent = "";
    }else{
        emailError.textContent = "Email is incorrect";
    }
});

const phone = document.querySelector('#tel'); 
const phoneError = document.querySelector('.tel-error');
phone.addEventListener('input',function(){
    let phoneRegex = RegExp('^([0-9]{2}[ ][0-9]{10})$');
    if(phoneRegex.test(phone.value)){
        phoneError.textContent = "";
    }else{
        phoneError.textContent = "Phone number is incorrect";
    }
});

const pass = document.querySelector('#pwd');
const passError = document.querySelector('.pass-error');
pass.addEventListener('input',function(){
    let passRegex = RegExp('(?=.*[A-Z])(?=.*\\d)((?=.*[@$!%*?&]){1})[A-Za-z0-9@$!%*?&]{8,}'); 
    if(passRegex.test(pass.value)){
        passError.textContent = "";
    }else{
        passError.textContent = "Password is incorrect";
    }
}); 
