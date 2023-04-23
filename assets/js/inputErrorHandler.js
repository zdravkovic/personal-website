import domElements from "./domElements";

// Debounce function
const debounce_leading = (func, timeout = 300) => {
   let timer;
   return (...args) => {
     if (!timer) {
       func.apply(this, args);
     }
     clearTimeout(timer);
     timer = setTimeout(() => {
       func.apply(this, args);
       timer = undefined;
     }, timeout);
   };
 }

// When key is pressed, remove error class
const inputErrorHandler = () => {
   document.querySelector('.contact-page__form-wrapper').addEventListener('keydown', debounce_leading(() => {
      if (domElements.formName.classList.contains('form-error')) {
        domElements.formName.classList.remove('form-error');
      }
      if (domElements.formEmail.classList.contains('form-error')) {
        domElements.formEmail.classList.remove('form-error');
      }
      if (domElements.formMessage.classList.contains('form-error')) {
        domElements.formMessage.classList.remove('form-error');
      }
   }));
}


export default inputErrorHandler;