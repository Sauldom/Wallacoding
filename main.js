import { loggedControl } from "./logged/logged-controller.js";
import { notificationController } from "./notification-ads/notification-controller.js";
import {renderAds} from "./wallaCoding-ads/ads-controller.js";


document.addEventListener('DOMContentLoaded', ()=>{
  const adsList = document.querySelector('.ads-list ');
  const adsNotifications = document.querySelector('.notifications');
  const loggedin= document.querySelector('#logged');
  console.log(loggedin);
  debugger;
  loggedControl(loggedin);
  const { showNotification }  = notificationController(adsNotifications);

  adsList.addEventListener('error loading ads', (event)=>{
      console.log(event);
      showNotification (event.detail.message);
      
      event.stopPropagation();
  })
  renderAds(adsList);
  window.addEventListener('offline', () => {
      showNotification('Has perdido la conexión!','error');
    })


 
});
