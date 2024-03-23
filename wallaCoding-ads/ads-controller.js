import { spinnerController } from "../spinner/spinner-controller.js";
import { triggerEvent } from "../util/triggerEvent.js";
import { getAds } from "./ads-model.js";
import { buildAd } from "./ads-view.js";




export async function renderAds(adsList){
    const spinner = adsList.querySelector('.lds-ellipsis.hidden');
    const {showSpinner, hideSpinner} = spinnerController(spinner);
    try {
        showSpinner();
        const ads = await getAds();

    ads.forEach(ad => {
        const adItem=document.createElement('div');
        adItem.className='contenedor-ad';
        adItem.innerHTML = buildAd(ad);
        adsList.appendChild(adItem);
    })
    } catch (errorMes) {
        triggerEvent('error-loading-ads', {            
                message:errorMes,
                type:'error'            
        },adsList)
    }finally{
        hideSpinner();

    }
    
    
};




