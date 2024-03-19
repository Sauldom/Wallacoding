import { createUser} from "./signup-model.js";

export function signUpController(signUpForm){

    signUpForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let errors=[];        
        
        if(!validateEmail(signUpForm)){
            errors.push('El mail tiene un formato incorrecto')
        }
        if(!validatePass(signUpForm)){
            errors.push('Las contraseñas no coinciden')
        }
        
        errors.forEach(error=>{
            alert(error);
        })

        if (errors.length ===0){
            createUser(email.value, password.value);
            alert('Usuario creado correctamente');
        }
})
}

function validateEmail(signUpForm){
    const email= signUpForm.querySelector('#email');
    const emailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        return emailRegExp.test(email.value)
}            

function validatePass(signUpForm){
    const password =  signUpForm.querySelector('#password');
    const passwordConfirm = signUpForm.querySelector('#password-confirmation');
    return password.value === passwordConfirm.value
    
}