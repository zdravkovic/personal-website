import animateCSS from './animatePage';
import domElements from './domElements';
import arrowIconHandler from './arrowIcons';



const pagePiling = () => {
  // pagePiling setup
  $('#pagepiling').pagepiling({
    scrollingSpeed: 280,
    direction: 'vertical',
    verticalCentered: false,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
    menu: '#myMenu',
    scrollOverflow: true,
    scrollOverflowReset: true,
    touchSensitivity: 9,
    navigation: {
      'position': 'right',
    },
    //events
    onLeave: function(index, nextIndex) {
      // remove scroll menu
      domElements.scrollMenu.classList.remove('show-nav', 'visible');
      if (document.querySelector('.pp-scrollable.active').scrollTop > 0) {
        domElements.scrollMenu.classList.add('show-nav', 'visible');
        domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-light-gray)';
        domElements.fixedLogo.classList.add('fixed-white');
        domElements.fixedEmail.classList.add('fixed-white');
      }

      // add and remove animations based on current page
      if (nextIndex === 1) {
        animateCSS('.home-page__blue-element', 'fadeInBottomRight', 'delay-0' , 'fast');
        animateCSS('.home-page__yellow-element', 'fadeInTopLeft', 'delay-0' , 'fast');
        animateCSS('.home-page__dots-square', 'fadeInDown', 'delay-2' , 'fast');
        animateCSS('.home-page__title', 'fadeInDown', 'delay-2', 'fast');
        animateCSS('.home-page__animation--bottom', 'fadeInUp', 'delay-2', 'fast');
        domElements.fixedIconGithubColor.style.fill = 'var(--clr-darker-gray)';
        domElements.fixedIconCVColor.style.fill = 'var(--clr-darker-gray)';
      } else {
        domElements.fixedIconGithubColor.style.fill = 'var(--clr-light-gray)';
        domElements.fixedIconCVColor.style.fill = 'var(--clr-light-gray)';
      }
      
      if (index === 1) {
        animateCSS('.home-page__blue-element', 'fadeOutBottomRight', 'delay-0' , 'fast');
        animateCSS('.home-page__yellow-element', 'fadeOutTopLeft', 'delay-0' , 'fast');
      }

      if (nextIndex === 2) {
        animateCSS('.portfolio-page__blue-element', 'fadeInTopLeft', 'delay-0' , 'fast');
        animateCSS('.portfolio-page__yellow-element', 'fadeInTopLeft', 'delay-0' , 'fast');
        animateCSS('.portfolio-page__animation--bottom', 'fadeInUp', 'delay-2', 'fast');
        animateCSS('.portfolio-page__title', 'fadeInDown', 'delay-2', 'fast');
      }
      
      if (index === 2) {
        animateCSS('.portfolio-page__blue-element', 'fadeOutTopLeft', 'delay-0' , 'fast');
        animateCSS('.portfolio-page__yellow-element', 'fadeOutBottomRight', 'delay-0' , 'fast');
      }

      if (nextIndex === 3) {
        animateCSS('.about-page__blue-element', 'fadeInBottomRight', 'delay-0' , 'fast');
        animateCSS('.about-page__yellow-element', 'fadeInTopLeft', 'delay-0' , 'fast');
        animateCSS('.about-page__dots-square', 'fadeInDown', 'delay-2' , 'fast');
        animateCSS('.about-page__title', 'fadeInDown', 'delay-2', 'fast');
        animateCSS('.about-page__animation--bottom', 'fadeInUp', 'delay-2', 'fast');
        domElements.fixedLogo.classList.add('fixed-white');
        domElements.fixedEmail.classList.add('fixed-white');

        if (!domElements.fixedHamburgerMenuBtn.classList.contains('opened')) {
          domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-light-gray)';
          domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-light-gray)';
          domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-light-gray)';
        }

        if (domElements.scrollMenu.classList.contains('visible')) {
          domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-dark-blue)';
          domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-dark-blue)';
          domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-dark-blue)';
          domElements.fixedLogo.classList.remove('fixed-white');
          domElements.fixedEmail.classList.remove('fixed-white');
        } else {
          domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-light-gray)';
          domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-light-gray)';
          domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-light-gray)';
          domElements.fixedLogo.classList.add('fixed-white');
          domElements.fixedEmail.classList.add('fixed-white');
        }
      } else {
        domElements.fixedHamburgerMenu.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedHamburgerMenuTop.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedHamburgerMenuBottom.style.backgroundColor = 'var(--clr-dark-blue)';
        domElements.fixedLogo.classList.remove('fixed-white');
        domElements.fixedEmail.classList.remove('fixed-white');
      }
      
      if (index === 3) {
        animateCSS('.about-page__blue-element', 'fadeOutBottomRight', 'delay-0' , 'fast');
        animateCSS('.about-page__yellow-element', 'fadeOutTopLeft', 'delay-0' , 'fast');
      }
      
      if(nextIndex === 4) {
        
        animateCSS('.contact-page__blue-element', 'fadeInTopLeft', 'delay-0' , 'fast');
        animateCSS('.contact-page__yellow-element', 'fadeInBottomRight', 'delay-0', 'fast');
        animateCSS('.contact-page__title', 'fadeInDown', 'delay-2', 'fast');
        animateCSS('.contact-page__animation--bottom', 'fadeInUp', 'delay-2', 'fast');
      }

      if (index === 4) {
        animateCSS('.contact-page__blue-element', 'fadeOutTopLeft', 'delay-0' , 'fast');
        animateCSS('.contact-page__yellow-element', 'fadeOutTopLeft', 'delay-0' , 'fast');
      }
      
      // Change scroll arrow direction based on page index
      arrowIconHandler(nextIndex, index);
    },
    afterLoad: (anchorLink, index) => {
    },
    afterRender: () => {
      // add background animations on first page, after first time site render
      animateCSS('.home-page__yellow-element', 'fadeInTopLeft', null , 'fast');
      animateCSS('.home-page__blue-element', 'fadeInBottomRight', null , 'fast');
      animateCSS('.home-page__dots-square', 'fadeInDown', 'delay-1' , 'fast');
      animateCSS('.home-page__title', 'fadeInDown', 'delay-2', 'fast');
      animateCSS('.home-page__animation--bottom', 'fadeInUp', 'delay-half', 'fast');
    }
  });
};

export default pagePiling;