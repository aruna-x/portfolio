import emailjs from '@emailjs/browser';

function changeBorderColor(input, color) {
  input.style.border = `1px solid ${color}`;
}

// returns: true if email valid, false if not, null if empty string
function validateEmail(email) {
  let match = email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  return match ? email === match[0] : false;
};

function checkFormValidity(nameInput, emailInput, messageInput, formData) {
  // clear red borders
  [nameInput, emailInput, messageInput].forEach(input => changeBorderColor(input, 'gray'));

  // check if inputs are valid
  const isValidName = Boolean(formData.from_name);
  const isValidEmail = Boolean(validateEmail(formData.from_email));
  const isValidMessage = Boolean(formData.message);

  // add red border to invalid inputs. Note: switch is not the best solution for this :)
  if (!isValidName) {
      changeBorderColor(nameInput, 'red');
  }
  if (!isValidEmail) {
      changeBorderColor(emailInput, 'red');
  }
  if (!isValidMessage) {
      changeBorderColor(messageInput, 'red');
  }

  return isValidName && isValidEmail && isValidMessage;
}

function handleSubmit(e, formData, setFormData) {
  e.preventDefault();

  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let messageInput = document.getElementById("message");

  const isFormValid = checkFormValidity(nameInput, emailInput, messageInput, formData);

  if(isFormValid) {
      emailjs.send('portfolio_contact_form', 'portfolio_message', formData, process.env.REACT_APP_USER_ID)
          .then(r => {
              if (r.text){
                  setFormData({
                      from_name: "",
                      from_email: "", 
                      message: "SUCCESS! Thanks for your message :) Be in touch soon."
                  });
              }
          }, (error) => {
              changeBorderColor(messageInput, 'red');
              setFormData({
                  from_name: "",
                  from_email: "", 
                  message: "Oops! Something went wrong. Please try again or contact me directly via linkedin, github, or dev.to linked above."
              });
              console.log(error.text);
      });
  }
}

export default handleSubmit;
