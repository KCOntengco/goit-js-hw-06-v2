// Get the input element from the DOM
    const validationInput = document.getElementById('validation-input');

    // Event listener for blur event
    validationInput.addEventListener('blur', () => {
      // Get the expected length from the data-length attribute
      const expectedLength = parseInt(validationInput.getAttribute('data-length'));

      // Get the actual length of the entered text
      const actualLength = validationInput.value.length;

      // Check if the length is correct and apply styles accordingly
      if (actualLength === expectedLength) {
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
      } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
      }
    });