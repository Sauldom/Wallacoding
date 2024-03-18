import { getAds } from "./ads-model.js";
import { buildAd } from "./ads-view.js";




export async function renderAds(adsList){
    const spinner = adsList.querySelector('.lds-ellipsis');
    spinner.classList.toggle('hidden');
    try {
        const ads = await getAds();

    ads.forEach(ad => {
        const adItem=document.createElement('div');
        adItem.className='contenedor-ad';
        adItem.innerHTML = buildAd(ad);
        adsList.appendChild(adItem);
    })
    } catch (error) {
        dispatchErrorEvent(error, adsList);
    }
    
    //spinner.classList.toggle('hidden');
};

function dispatchErrorEvent(errorMessage, adsList){
    const event = new CustomEvent('error',{
        detail:{
            message:errorMessage
        }
    });
    adsList.dispatchEvent(event);
}


