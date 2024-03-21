import { loginController } from "./login/login-controller.js";
import { notificationController } from "./notification-ads/notification-controller.js";


document.addEventListener('DOMContentLoaded', ()=>{
    const loginForm = document.querySelector('#login-form');

    const loginNotifications = document.querySelector('.notifications');

    const { showNotification }  = notificationController(loginNotifications);
  
    loginForm.addEventListener('login-error', (event)=>{        
        showNotification(event.detail.message);        
        event.stopPropagation();
    })

   /* loginForm.addEventListener('LoginUser-success',(event)=>{
        showNotification(event.detail.message);        
        event.stopPropagation();
    })
    */
    loginController(loginForm);

})
