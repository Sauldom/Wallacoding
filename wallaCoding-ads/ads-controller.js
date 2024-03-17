import { getAds } from "./ads-model.js";
import { buildAd } from "./ads-view.js";




export async function renderAds(adsList){
    const ads = await getAds();
        ads.forEach(ad => {
        const adItem=document.createElement('div');
        adItem.className='contenedor-ad';
        adItem.innerHTML = buildAd(ad);
        adsList.appendChild(adItem);
    })
};


