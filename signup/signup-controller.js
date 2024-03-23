import { spinnerController } from "../spinner/spinner-controller.js";
import { triggerEvent } from "../util/triggerEvent.js";
import { createUser} from "./signup-model.js";

export function signUpController(signUpForm){
    
    signUpForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        createOrNotCreateUser(signUpForm)
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

async function createOrNotCreateUser(signUpForm){
    const spinner = signUpForm.querySelector('.lds-ellipsis.hidden');
    const {showSpinner, hideSpinner} = spinnerController(spinner);

    let errors=[];        
        
        if(!validateEmail(signUpForm)){
            errors.push('El mail tiene un formato incorrecto')
        }
        if(!validatePass(signUpForm)){
            errors.push('Las contraseñas no coinciden')
        }
        
        errors.forEach(error=>{
            triggerEvent('signup-error',{
                message:error
            },signUpForm);
        })

        if (errors.length ===0){
            try {
                showSpinner();
                await createUser(email.value, password.value);
            triggerEvent('signup-success',{
                message: 'El registro ha sido correcto'
            }, signUpForm);
            setTimeout(() => {
                window.location.href = 'index.html';
              }, 4000);
            } catch (error) {
                triggerEvent('signup-error',{
                    message:error
                },signUpForm);
            }finally{
                hideSpinner();
            }
            
        }
}