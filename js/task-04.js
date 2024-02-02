
    // Initialize counter value
    let counterValue = 0;

    // Get elements from the DOM
    const valueSpan = document.getElementById('value');
    const incrementButton = document.querySelector('[data-action="increment"]');
    const decrementButton = document.querySelector('[data-action="decrement"]');

    // Event listener for increment button
    incrementButton.addEventListener('click', () => {
      // Increment the counter value
      counterValue++;
      // Update the interface
      valueSpan.textContent = counterValue;
    });

    // Event listener for decrement button
    decrementButton.addEventListener('click', () => {
      // Decrement the counter value
      counterValue--;
      // Update the interface
      valueSpan.textContent = counterValue;
    });