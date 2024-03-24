import { detailController } from "./details/ad-detail-controller.js";
import {notificationController} from "./notification-ads/notification-controller.js"


document.addEventListener ('DOMContentLoaded', ()=>{
    const adDetail = document.querySelector('#adDetail');
    
    const signNotifications = document.querySelector('.notifications');
    
    const { showNotification }  = notificationController(signNotifications);

    adDetail.addEventListener('remove-ad-error', (event)=>{
        
        showNotification (event.detail.message);        
        event.stopPropagation();
    })
    adDetail.addEventListener('remove-ad-success', (event)=>{
        
        showNotification (event.detail.message);        
        event.stopPropagation();
    })
    adDetail.addEventListener('Error-data-user-load', (event)=>{
        
        showNotification (event.detail.message);        
        event.stopPropagation();
    })

    detailController(adDetail);
})