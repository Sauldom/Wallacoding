import { signUpController } from "./signup/signup-controller.js";


document.addEventListener('DOMContentLoaded', ()=>{
    const signUpForm = document.querySelector('#register-form');


    signUpController(signUpForm);
});

