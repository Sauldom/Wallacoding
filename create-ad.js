import { createAdController } from "./ad-create/create-ad-controller.js";
import { notificationController } from "./notification-ads/notification-controller.js";

document.addEventListener('DOMContentLoaded',()=>{

    const token = localStorage.getItem('token');

    if (!token) {
      window.location.href = 'index.html'
    }
    
    const creationAd= document.querySelector('#create-ad');  
    const signNotifications = document.querySelector('.notifications');  

    const { showNotification }  = notificationController(signNotifications);

    creationAd.addEventListener('create-ad-error', (event)=>{
        console.log(event);
        showNotification (event.detail.message);        
        event.stopPropagation();
    })
    creationAd.addEventListener('create-ad-success', (event)=>{
        console.log(event);
        showNotification (event.detail.message);        
        event.stopPropagation();
    })
    createAdController(creationAd);
})