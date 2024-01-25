function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')}`;
    }

    // Get elements from the DOM
    const bodyElement = document.body;
    const colorSpan = document.querySelector('.color');
    const changeColorButton = document.querySelector('.change-color');

    // Event listener for button click
    changeColorButton.addEventListener('click', () => {
      // Generate a random color
      const randomColor = getRandomHexColor();

      // Update the body background color
      bodyElement.style.backgroundColor = randomColor;

      // Update the color value in the span
      colorSpan.textContent = randomColor;
    });