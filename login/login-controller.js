import { triggerEvent } from "../util/triggerEvent.js";
import { loginUser } from "./login-model.js";

export function loginController(loginForm){
    loginForm.addEventListener('submit',(event)=>{
        event.preventDefault();
        
        handleUser(loginForm);
        

    })
}

async function handleUser (loginForm){
    const email = loginForm.querySelector ('#email');
    const password = loginForm.querySelector ('#password');
    try{
        
        const jwtToken = await loginUser(email.value, password.value);
        alert('Usuario Creado')        
        localStorage.setItem('token', jwtToken);
       
        window.location="./index.html";
    } catch(error){
        triggerEvent('login-error',{
            message:error
        },loginForm) 
    }finally{
        triggerEvent('finishLog', null, loginForm)
    }
    
}