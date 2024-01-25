<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Counter</title>
</head>
<body>

  <div id="counter">
    <button type="button" data-action="decrement">-1</button>
    <span id="value">0</span>
    <button type="button" data-action="increment">+1</button>
  </div>

  <script>
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
  </script>

</body>
</html>
