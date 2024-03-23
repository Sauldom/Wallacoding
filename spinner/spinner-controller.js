import { drawSpinner } from "./spinner-view.js";

export const spinnerController = (loader)=>{

    const showSpinner = ()=>{
        console.log(loader);
        loader.classList.remove('hidden');
        loader.innerHTML = drawSpinner();
    }
    const hideSpinner = ()=>{
        loader.classList.add('hidden');
        loader.innerHTML = '';
    }

    return{
        showSpinner,
        hideSpinner
    }
}