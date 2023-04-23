import domElements from "./domElements";

const scrollableElements = document.querySelectorAll('.pp-scrollable');

// Change elemet styles based on scroll position
const scroll = scrollableElements.forEach(element => {
  element.addEventListener('scroll', (e) => {
    if(e.target.scrollTop > 0) { 
      domElements.scrollMenu.classList.add('show-nav', 'visible');

      // If current page is page-3 (About page) change hamburger menu color
      if (window.location.href.indexOf("#thirdPage") != -1) {
        domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedLogo.classList.remove('fixed-white');
        domElements.fixedEmail.classList.remove('fixed-white');
      }
    } else {
      domElements.scrollMenu.classList.remove('show-nav', 'visible');

      // If current page is page-3 (About page) change hamburger menu color
      if (window.location.href.indexOf("#thirdPage") != -1) {
        domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedLogo.classList.add('fixed-white');
        domElements.fixedEmail.classList.add('fixed-white');
      }
    }
  });
});

export default scroll;