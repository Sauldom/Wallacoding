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
        dispatchEvent('startLoginUser', null, loginForm)
        const jwtToken = await loginUser(email.value, password.value);
        alert('ok');
        localStorage.setItem('token', jwt);
        window.location="./index.html";
    } catch(error){
        alert(error) 
    }finally{
        triggerEvent('finishLog', null, loginForm)
    }
    
}