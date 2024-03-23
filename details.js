import { detailController } from "./details/ad-detail-controller.js";


document.addEventListener ('DOMContentLoaded', ()=>{
    const adDetail = document.querySelector('#adDetail');    
    detailController(adDetail);
})