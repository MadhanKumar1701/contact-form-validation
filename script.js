const form = document.getElementById("contactForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMsg = document.getElementById("successMsg");

const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function validateInputs() {
  let isValid = true;
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (!emailRegex.test(emailField.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (messageField.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters.";
    isValid = false;
  }

  return isValid;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateInputs()) {
    successMsg.textContent = "Thank you! Your message has been received.";
    form.reset();
  }
});

// Live validation on input
[nameField, emailField, messageField].forEach(field => {
  field.addEventListener("input", validateInputs);
});
