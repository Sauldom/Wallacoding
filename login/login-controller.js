import { spinnerController } from "../spinner/spinner-controller.js";
import { loginUser } from "./login-model.js";
import { triggerEvent } from "../util/triggerEvent.js";

export const loginController=(loginForm)=>{
    const spinner = loginForm.querySelector('.lds-ellipsis.hidden');
    const {showSpinner, hideSpinner} = spinnerController(spinner);
    

    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();        
        handleUser(loginForm);     
    })
    const handleUser = async (loginForm)=>{
        
        const email = loginForm.querySelector ('#email');
        const password = loginForm.querySelector ('#password');

        try{
            showSpinner();
            const jwtToken = await loginUser(email.value, password.value);
            alert('Usuario validado')        
            localStorage.setItem('token', jwtToken);
        
            window.location="./index.html";
        } catch(error){
            triggerEvent('login-error',{
                message:'error al logear el usuario'
            },loginForm) 
        }finally{
            hideSpinner();
        }
        
    }
}

