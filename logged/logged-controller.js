import { drawLogged, drawNotLogged } from "./logged-view.js";

export const loggedControl=(nav)=>{
    if(userLogged()){
        nav.innerHTML = drawLogged();
        const logoutButton = nav.querySelector('button');
        logoutButton.addEventListener('click', () => {
        localStorage.removeItem('token');
        loggedControl(nav)
        })
    }
    else{
        nav.innerHTML = drawNotLogged();
    }

    function userLogged(){
        return localStorage.getItem('token');
    }
}