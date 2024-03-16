import { getAds } from "./ads-model.js";
import { buildAd } from "./ads-view.js";

const adsList = document.querySelector('.ads-list ');
const ads = await getAds();

function renderAds(ads, adsList){
        ads.forEach(ad => {
        const adItem=document.createElement('div');
        adItem.className='contenedor-ad';
        adItem.innerHTML = buildAd(ad);
        adsList.appendChild(adItem);
    })
};

renderAds(ads,adsList);
