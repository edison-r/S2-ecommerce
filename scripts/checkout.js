document.addEventListener("DOMContentLoaded", () => {
	const inputs = document.querySelectorAll("input");

	inputs.forEach(input => {
		input.addEventListener("blur", (event) => {
			const field = event.target;
			validateField(field);
		});
	});
});

function validateField(input){
	const errorMessage = getFieldError(input);
	errorMessage ? showError(input, errorMessage) : cleanError(input);
}

function getFieldError(input){
	const fieldValue = input.value.trim();
	const fieldId = input.id;

	if(fieldId === "fName" || fieldId === "fLastN"){
		if(!minCharacters(fieldValue))
			return `Please enter at least 3 characters.`
		if(!alphabet(fieldValue))
			return `Please enter only letters without any numbers or special characters.`
	}

	if(fieldId === "fEmail"){
		if(!validMail(fieldValue))
			return `Please enter a valid email address. Example: user@example.com`
	}

	if(fieldId === "fAddress"){
		if(!validAddress(fieldValue))
			return `Please enter a valid address`
	}

	if(fieldId === "fPassword"){
		if (fieldValue.length < 4 || fieldValue.length > 8)
			return `Your password must be between 4 and 8 characters long.`
		if(!validPass(fieldValue))
			return `Your password must contain both letters and numbers.`;
	}

	if(fieldId === "fPhone"){
		if(!validTelf(fieldValue))
			return `Please enter a valid 9-digit phone number.`;
	}

	return "";
}

const showError = (input, errorMessage) => {
	const errorDiv = input.nextElementSibling;
	errorDiv.textContent = errorMessage;
	input.classList.add("is-invalid");
	input.classList.remove("is-valid");
}

const cleanError = (input) => {
	const errorDiv = input.nextElementSibling;
	errorDiv.textContent = ""; 
	input.classList.remove("is-invalid");
	input.classList.add("is-valid");
}

const minCharacters = (str) => str.length >= 3;
const alphabet = (str) => /^[A-Za-z]+$/.test(str);
const validAddress = (address) => /^[A-Za-z0-9\s,.\-ºª]{5,}$/.test(address);
const validTelf = (num) => /^[0-9]{9}$/.test(num);
const validMail = (mail) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
const validPass = (pass) => /[a-zA-Z]/.test(pass) && /\d/.test(pass);

function validate(event) {
  event.preventDefault(); // Bloquea el envío por defecto
  let hasErrors = false;
  const inputs = document.querySelectorAll("input");

  inputs.forEach(input => {
    const error = getFieldError(input);
    if (error) {
      showError(input, error);
      hasErrors = true;
    } else {
      cleanError(input);
    }
  });

  if (!hasErrors) {
    alert("Formulario enviado correctamente ✅");
  }
}
