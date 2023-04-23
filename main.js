import pagePiling from '/assets/js/pagePiling';
import scrollHandler from './assets/js/scrollHandler';
import textAreaAutoScale from './assets/js/textAreaAutoScale';
import inputErrorHandler from './assets/js/inputErrorHandler';
import animateCSS from '/assets/js/animatePage';
import domElements from './assets/js/domElements';
import formSubmitHandler from './assets/js/formHandler';


// PRELOAD
window.addEventListener('load', () => {
  if (domElements.preload) {
    domElements.preload.classList.add('preload-hide');
    setTimeout(() => {
      domElements.preload.style.display = 'none';
    }, 300);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  pagePiling();
});


document.querySelectorAll('input, textarea').forEach(el => {
  el.addEventListener('focus', () => {
    $.fn.pagepiling.setAllowScrolling(false);
  });
  el.addEventListener('blur', () => {
    $.fn.pagepiling.setAllowScrolling(true);
  })
});

// NAV MENU
domElements.fixedHamburgerMenuBtn.addEventListener('click', () => {
  domElements.menu.classList.toggle('open');
  if (!domElements.fixedHamburgerMenuBtn.classList.contains('opened')) {
    domElements.fixedHamburgerMenuBtn.classList.remove('closed');
    domElements.fixedHamburgerMenuBtn.classList.add('opened');
  } else {
    domElements.fixedHamburgerMenuBtn.classList.remove('opened');
    domElements.fixedHamburgerMenuBtn.classList.add('closed');
  }
  domElements.menuBackground.classList.toggle('menuOpen');
  if (domElements.menu.classList.contains('open')) {
    animateCSS('#myMenu', 'fadeInUp', 'delay-1' , 'fast');
    animateCSS('.icons', 'fadeInUp', 'delay-5' , 'fast');
  }
});

// NAV MENU BACKGROUND
domElements.menuBackground.addEventListener('click', () => {
  if (domElements.menuBackground.classList.contains('menuOpen')) {
    domElements.menu.classList.remove('open');
    domElements.menuBackground.classList.remove('menuOpen');
    
    domElements.fixedHamburgerMenuBtn.classList.remove('opened');
    domElements.fixedHamburgerMenuBtn.classList.add('closed');
  }
});

// Close nav menu and go to selected page
domElements.menuItem.forEach(el => {
  el.addEventListener('click', () => {
    domElements.menu.classList.remove('open');
    domElements.menuBackground.classList.remove('menuOpen');
    domElements.fixedHamburgerMenuBtn.classList.remove('opened');
    domElements.fixedHamburgerMenuBtn.classList.add('closed');
  });
});

// CONTACT FORM

// Handle input field styles based on focus state and key press
['focusout', 'keydown'].forEach(e => {
  domElements.contactName.addEventListener(e, () => {
    if (domElements.contactName.value) {
      domElements.contactNameLabel.classList.add('focused');
      domElements.formName.removeAttribute('data-display-value');
    } else {
      domElements.contactNameLabel.classList.remove('focused');
    }
  });

  domElements.contactEmail.addEventListener(e, () => {
    if (domElements.contactEmail.value) {
      domElements.contactEmailLabel.classList.add('focused');
      domElements.formEmail.removeAttribute('data-display-value');
    } else {
      domElements.contactEmailLabel.classList.remove('focused');
    }
  });

  domElements.contactMessage.addEventListener(e, () => {
    if (domElements.contactMessage.value) {
      domElements.contactMessageLabel.classList.add('focused');
      domElements.formMessage.removeAttribute('data-display-value');
    } else {
      domElements.contactMessageLabel.classList.remove('focused');
    }
  });
  
  // Handle error in contact form
  inputErrorHandler();
});

// Handle submit form
domElements.contactForm.addEventListener("submit", formSubmitHandler);


// THANK YOU MODAL
document.querySelector('.thank-you__btn').addEventListener('click', () => {
  domElements.thankYouModal.classList.add('modal-closed');
});

document.querySelector('.thank-you__background').addEventListener('click', () => {
  domElements.thankYouModal.classList.add('modal-closed');
});

