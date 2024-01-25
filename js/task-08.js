// Get the form element from the DOM
    const loginForm = document.querySelector('.login-form');

    // Event listener for form submission
    loginForm.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the form elements
      const formElements = this.elements;

      // Check for empty fields
      if (!formElements.email.value || !formElements.password.value) {
        alert('All fields must be filled in.');
        return;
      }

      // Collect field values into an object
      const formData = {
        email: formElements.email.value,
        password: formElements.password.value,
      };

      // Display the object with entered data in the console
      console.log(formData);

      // Clear the values of the form fields using the reset method
      this.reset();
    });
