import { buildNotificacion } from "./notification-view.js";

export function notificationController(notificationContainer){

    function showNotification(message){
        const notification = document.createElement('div');
        notification.innerHTML = buildNotificacion(message);
        notificationContainer.appendChild(notification);

        setTimeout(()=>{
            notification.remove()
        },5000);
    }

    return {
        showNotification
    }
}

