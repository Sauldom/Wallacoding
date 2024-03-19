import { notificationController } from "./notification-ads/notification-controller.js";
import {renderAds} from "./wallaCoding-ads/ads-controller.js";



const adsList = document.querySelector('.ads-list ');
const adsNotifications = document.querySelector('.notifications');

const { showNotification }  = notificationController(adsNotifications);

adsList.addEventListener('error', (event)=>{
    showNotification (event.detail.message);
    
    event.stopPropagation();
})

window.addEventListener('offline', () => {
    showNotification('Has perdido la conexión!');
  })


renderAds(adsList);