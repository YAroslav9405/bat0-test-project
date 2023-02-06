let modal = document.querySelector('.modal');
let openButton = document.querySelector('.contact-button');
let closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', () => {
    modal.style.display = "block";
});

closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});


  // Get the form element
  let form = document.getElementById("form");

  // Get the form inputs
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let emailInput = document.getElementById("email");
  let companyInput = document.getElementById("company");
  let enquiryInput = document.getElementById("enquiry");
  let checkboxInput = document.getElementById("checkbox");

  // Get the error messages elements
  let firstNameError = document.getElementById("first-name-error");
  let lastNameError = document.getElementById("last-name-error");
  let emailError = document.getElementById("email-error");
  let enquiryError = document.getElementById("enquiry-error");
  let checkboxError = document.getElementById("checkbox-error");

 
  // Validate the form inputs when the form is submitted
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    // Validate the first name input
    if (firstNameInput.value.trim() === "") {
      firstNameError.innerHTML = "Please enter your first name.";
      firstNameError.style.display = "block";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }

    // Validate the last name input
    if (lastNameInput.value.trim() === "") {
      lastNameError.innerHTML = "Please enter your last name.";
      lastNameError.style.display = "block";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }

    // Validate the email input
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailInput.value)) {
      emailError.innerHTML = "Please enter a valid email address.";
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    };
  });
