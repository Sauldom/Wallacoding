import { signUpController } from "./signup/signup-controller.js";
import { notificationController } from "./notification-ads/notification-controller.js";

document.addEventListener('DOMContentLoaded', ()=>{
    const signUpForm = document.querySelector('#register-form');
    const signNotifications = document.querySelector('.notifications');

    const { showNotification }  = notificationController(signNotifications);

    signUpForm.addEventListener('signup-error', (event)=>{
        console.log(event);
        showNotification (event.detail.message);
        
        event.stopPropagation();
    })
    signUpForm.addEventListener('signup-success', (event)=>{
        console.log(event);
        showNotification (event.detail.message);
        
        event.stopPropagation();
    })
    signUpController(signUpForm);
});

