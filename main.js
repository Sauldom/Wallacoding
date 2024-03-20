import { notificationController } from "./notification-ads/notification-controller.js";
import {renderAds} from "./wallaCoding-ads/ads-controller.js";


document.addEventListener('DOMContentLoaded', ()=>{
  const adsList = document.querySelector('.ads-list ');
  const adsNotifications = document.querySelector('.notifications');

  const { showNotification }  = notificationController(adsNotifications);

  adsList.addEventListener('error', (event)=>{
      console.log(event);
      showNotification (event.detail.message);
      
      event.stopPropagation();
  })
  renderAds(adsList);
  window.addEventListener('offline', () => {
      showNotification('Has perdido la conexión!','error');
    })


 
});
