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

   backButton(adDetail);
   try {
    showSpinner();
    const detail = await getDetail(adId);
    const container = adDetail.querySelector('#container')
    container.innerHTML=drawDetail(detail);
    
   } catch (error) {
    throw new Error(error);
   }finally{
    hideSpinner();
    
   }
   


   function backButton(adDetail){
    const backButton = adDetail.querySelector('#back');
    backButton.addEventListener('click',()=>{window.history.back()}) 
   }
}

//mostrar datos del tweet

//capturar el id de la url
//obtener el tweet del id desde el api
//preparar la vista
//mostrar boton para volver atras