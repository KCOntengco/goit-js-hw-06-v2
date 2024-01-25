
    // Get elements from the DOM
    const fontSizeControl = document.getElementById('font-size-control');
    const textSpan = document.getElementById('text');

    // Event listener for input changes
    fontSizeControl.addEventListener('input', () => {
      // Update the font-size property based on the input value
      textSpan.style.fontSize = fontSizeControl.value + 'px';
    });
