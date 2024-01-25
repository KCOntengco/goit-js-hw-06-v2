function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Get elements from the DOM
    const controlsDiv = document.getElementById('controls');
    const createButton = controlsDiv.querySelector('[data-create]');
    const destroyButton = controlsDiv.querySelector('[data-destroy]');
    const boxesDiv = document.getElementById('boxes');

    // Event listener for Create button
    createButton.addEventListener('click', () => {
      // Get the number of boxes to create from the input
      const amount = parseInt(controlsDiv.querySelector('input').value);

      // Call the createBoxes function
      createBoxes(amount);
    });

    // Event listener for Destroy button
    destroyButton.addEventListener('click', destroyBoxes);

    // Function to create boxes
    function createBoxes(amount) {
      // Clear existing boxes
      destroyBoxes();

      // Create new boxes
      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesDiv.appendChild(box);
      }
    }

    // Function to destroy boxes
    function destroyBoxes() {
      boxesDiv.innerHTML = '';
    }