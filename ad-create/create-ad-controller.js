import { createAd } from "./create-ad-model.js";
import { spinnerController} from "../spinner/spinner-controller.js"
import { triggerEvent } from "../util/triggerEvent.js";


export async function createAdController (creationAd){

    const spinner = creationAd.querySelector('.lds-ellipsis.hidden');
    const {showSpinner, hideSpinner} = spinnerController(spinner);

    creationAd.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const formData = new FormData(creationAd);
        try {
            showSpinner();
            await createAd(formData);
            triggerEvent('create-ad-success',{
                message: 'El anuncio ha sido creado correctamente'
            }, creationAd);
            setTimeout(() => {
                window.location = "index.html";
              }, 2000);
        } catch (error) {
            triggerEvent('create-ad-error',{
                message: error
            }, creationAd);
        }finally{
            hideSpinner();
            
        }
        
    })
}