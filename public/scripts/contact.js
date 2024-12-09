document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form from submitting to allow validation
  
      let valid = true;
      const errors = document.querySelectorAll('.error');
      errors.forEach(error => error.remove()); // Remove existing error messages
  
      // Validate Name
      const name = document.getElementById('name');
      if (name.value.trim() === "") {
        valid = false;
        showError(name, "Name is required");
      }
  
      // Validate Email
      const email = document.getElementById('email');
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (email.value.trim() === "" || !emailPattern.test(email.value)) {
        valid = false;
        showError(email, "Please enter a valid email address");
      }
  
      // Validate Message
      const message = document.getElementById('message');
      if (message.value.trim() === "") {
        valid = false;
        showError(message, "Message is required");
      }
  
      // If everything is valid, submit the form
      if (valid) {
        form.submit(); // Here you can submit the form to the server via AJAX or standard form submission
      }
    });
  
    function showError(field, message) {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('error');
      errorMessage.textContent = message;
      field.parentElement.appendChild(errorMessage);
    }
  });
  