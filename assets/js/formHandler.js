import domElements from "./domElements";

const formSubmitHandler = (event) => {
  // Prevent default submit action
  event.preventDefault();

  // Select form and create new FormData
  const myForm = event.target;
  const formData = new FormData(myForm);

  // Get input values
  const isValidName = domElements.contactName.value.trim();
  const isValidMessage = domElements.contactMessage.value.trim();
  const isValidEmail = domElements.contactEmail.value.trim();
  const emailHasSign = isValidEmail.indexOf('@');

  // Check if form is filled and if it's valid
  if (!isValidName || !isNaN(isValidName)) {
    domElements.formName.classList.add('form-error');
    setTimeout(() => {
      domElements.formName.setAttribute('data-display-value', 'none');
    }, 2000); 
    return;
  } 
  
  if (!isValidEmail) {
    domElements.formEmail.setAttribute('data-error-message', 'Email is required');
    domElements.formEmail.classList.add('form-error');
    setTimeout(() => {
      domElements.formEmail.setAttribute('data-display-value', 'none');
    }, 2000); 
    return;

  } else if (emailHasSign === -1) {
    domElements.formEmail.setAttribute('data-error-message', "Plese use '@' in email address");
    domElements.formEmail.classList.add('form-error');
    setTimeout(() => {
      domElements.formEmail.setAttribute('data-display-value', 'none');
    }, 2000); 
    return;
  }

  if (!isValidMessage.trim()) {
    domElements.formMessage.classList.add('form-error');
    setTimeout(() => {
      domElements.formMessage.setAttribute('data-display-value', 'none');
    }, 2000); 
    return;
  }

  
  // If everything is valid, handle POST request using form data
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      // after posting request, show 'thank you' modal
      domElements.thankYouModal.classList.remove('modal-closed');
      domElements.thankYouModal.style.display = 'flex';
      domElements.contactNameLabel.classList.remove('focused');
      domElements.contactEmailLabel.classList.remove('focused');
      domElements.contactMessageLabel.classList.remove('focused');
      domElements.contactName.value = '';
      domElements.contactEmail.value = '';
      domElements.contactMessage.value = '';
    })
    .catch((error) => alert(error));
 };

 export default formSubmitHandler;