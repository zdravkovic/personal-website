const animateCSS = (element, animation, delay, speed, prefix = 'animate__') => {
    const animationName = `${prefix}${animation}`;
    const animationSpeed = `${prefix}${speed}`;
    const node = document.querySelector(element);
    
    // Add classes to selected element
    node.classList.add(`${prefix}animated`, animationName, delay, animationSpeed);


    // When the animation ends, clean the classes and resolve the Promise
    const handleAnimationEnd = (event) => {
      event.stopPropagation();

      // Remove classes from selected element
      node.classList.remove(`${prefix}animated`, animationName, delay, animationSpeed);
    }

    // After animation has ended, remove all animation classes
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  };

  export default animateCSS;