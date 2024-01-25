// Get elements from the DOM
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    // Event listener for input changes
    nameInput.addEventListener('input', () => {
      // Get the current value of the input
      const inputValue = nameInput.value.trim();

      // Update the output span accordingly
      nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
    });