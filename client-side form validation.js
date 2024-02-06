const submit = document.getElementById("submit");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("feedback");
    const contactMethodInputs = document.querySelectorAll('input[name="contactMethod"]');
    let valid = true;

    if (!nameInput.validity.valid) {
        handleValidationError(nameInput, "nameError");
        valid = false;
    } if (!emailInput.validity.valid) {
        handleValidationError(emailInput, "emailError");
        valid = false;
    } if (!phoneInput.value) {
        handleValidationError(phoneInput, "phoneError");
        valid = false;
    } if (!messageInput.value) {
        handleValidationError(messageInput, "messageError");
        valid = false;
    } 

    let contactMethodSelected = false;
    contactMethodInputs.forEach(input => {
        if (input.checked) {
            contactMethodSelected = true;
        }
    });

    if (!contactMethodSelected) {
        handleValidationError(contactMethodInputs, "contactMethodError");
        valid = false;
    }

    return valid;
}

function handleValidationError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.add("visible");
    input.classList.add("invalid");
    errorElement.setAttribute("aria-hidden", false);
    errorElement.setAttribute("aria-invalid", true);
}