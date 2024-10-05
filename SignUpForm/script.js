const password = document.querySelector('#passwordForm');
const confPassword = document.querySelector('#ConfpasswordForm');
const showError = document.querySelector('#showError');

function validatePassword() {
    if (password.value === confPassword.value) { 
        showError.textContent = "";
    } else {
        showError.textContent = "Password doesn't match";
    }
}

confPassword.addEventListener('input', validatePassword); 