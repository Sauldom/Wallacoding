import { notificationController } from "./notification-ads/notification-controller.js";
import {renderAds} from "./wallaCoding-ads/ads-controller.js";



const adsList = document.querySelector('.ads-list ');
const adsNotifications = document.querySelector('.notifications');

notificationController(adsNotifications);
renderAds(adsList);