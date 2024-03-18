import { buildNotificacion } from "./notification-view.js";

export function notificationController(notificationContainer){

    function showNotificacion(message){
        const notification = document.createElement('div');
        notification.innerHTML = buildNotificacion(message);
        notificationContainer.appendChild(notification);
    }
    return showNotificacion
}

