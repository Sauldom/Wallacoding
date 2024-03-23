import { spinnerController } from "../spinner/spinner-controller.js";
import { loginUser } from "./login-model.js";

export const loginController=(loginForm)=>{

    

    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();        
        handleUser(loginForm);     
    })
}

const handleUser = async (loginForm)=>{
    const spinner = loginForm.querySelector('.lds-ellipsis.hidden');
    const {showSpinner, hideSpinner} = spinnerController(spinner);
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
            message:error
        },loginForm) 
    }finally{
        hideSpinner();
    }
    
}