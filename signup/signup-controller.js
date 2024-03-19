import { createUser} from "./signup-model.js";

export function signUpController(signUpForm){

    signUpForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        let errors=[];

        const email= signUpForm.querySelector('#email');
        const password =  signUpForm.querySelector('#password');
        const passwordConfirm = signUpForm.querySelector('#password-confirmation');
        
        const emailRegExp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if(!emailRegExp.test(email.value)){
            errors.push('El mail tiene un formato incorrecto')
        }
        if(password.value !== passwordConfirm.value){
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