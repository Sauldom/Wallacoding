import { getDetail, getUserData,deleteAd } from "./ad-detail-model.js";
import { spinnerController } from "../spinner/spinner-controller.js";
import { drawDetail } from "./ad-detail-view.js";
import { triggerEvent } from "../util/triggerEvent.js";

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
    
    handleRemoveAdButton(adDetail,detail);
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

   async function handleRemoveAdButton(adDetail,detail){
      const token = localStorage.getItem('token');
      
        const userData = await getUserData(token);      
                  
      if (detail.userId === userData.userId && userData.userId!== undefined) {
         
         const removeAdButton = adDetail.querySelector('#remove-ad-Button');
         removeAdButton.removeAttribute('disabled');
         removeAdButton.addEventListener('click', () => { removeAd(detail.id, token)})
      }                  
   }
   async function removeAd(detailId, token) {
      if (window.confirm('Seguro que quieres borrar el anuncio?')) {
        try {
          await deleteAd(detailId, token);
          triggerEvent('remove-ad-success',{
            message:'se ha quitado el anuncio correctamente'
          },adDetail);
          setTimeout(() => {
            window.location.href = 'index.html'
          }, 2000);
        } catch (error) {
            triggerEvent('remove-ad-error',{
               message:error
          },adDetail);
        }
      }
    }
}

