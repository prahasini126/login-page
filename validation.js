document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const errorDisplay = document.getElementById('error-message');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (validateInputs()) {
        console.log("Validation successful. Redirecting to final.html");
        window.location.href = "final.html";
      } else {
        console.log("Validation failed. Not redirecting.");
      }
    });
    const setError = (element, message) => {
      errorDisplay.innerText = message;
      element.parentElement.classList.add('error');
      element.parentElement.classList.remove('success');
    };
    const setSuccess = element => {
      errorDisplay.innerText = '';
      element.parentElement.classList.add('success');
      element.parentElement.classList.remove('error');
    };
    const togglePasswordVisibility = () => {
      const passwordInput = document.getElementById('password');
      const passwordToggle = document.querySelector('.password-toggle');
  
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.innerText = 'Hide';
      } else {
        passwordInput.type = 'password';
        passwordToggle.innerText = 'Show';
      }
    };
    const closeForm = () => {
      console.log("Closing the form");
    };
    const forgotPasswordLink = document.querySelector('.p6');
    forgotPasswordLink.addEventListener('click', function (e) {
      e.preventDefault();
      window.location.href = "forgot_password.html";
    });
    const validateInputs = () => {
      const usernameValue = username.value.trim();
      const passwordValue = password.value.trim();
      const testUsername = form.getAttribute('data-username');
      const testPassword = form.getAttribute('data-password');
      if (usernameValue === '') {
        setError(username, 'Username is required');
        return false;
      } else if (usernameValue !== testUsername) {
        setError(username, 'Invalid username');
        return false;
      } else {
        setSuccess(username);
      }
      if (passwordValue === '') {
        setError(password, 'Password is required');
        return false;
      } else if (passwordValue !== testPassword) {
        setError(password, 'Invalid password');
        return false;
      } else {
        setSuccess(password);
      }
      return true;
    };
  });