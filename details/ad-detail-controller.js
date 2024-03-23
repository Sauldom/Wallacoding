import { getDetail } from "./ad-detail-model.js";
import { spinnerController } from "../spinner/spinner-controller.js";
import { drawDetail } from "./ad-detail-view.js";

export async function detailController(adDetail){

   const params=  new URLSearchParams(window.location.search);
   const adId = params.get('adId');

   const spinner = adDetail.querySelector('.lds-ellipsis.hidden');
   const {showSpinner, hideSpinner} = spinnerController(spinner);

   if (!adId){
    window.location.href = './index.html'
   }
   try {
    showSpinner();
    const detail = await getDetail(adId);
    console.log(detail);
    adDetail.innerHTML=drawDetail(detail);
    
   } catch (error) {
    
   }finally{
    hideSpinner();
   }
   
}

//mostrar datos del tweet

//capturar el id de la url
//obtener el tweet del id desde el api
//preparar la vista
//mostrar boton para volver atras