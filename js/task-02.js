// Array of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Reference to the ul#ingredients list
const ingredientsList = document.getElementById('ingredients');

// Create a document fragment to optimize DOM manipulation
const fragment = document.createDocumentFragment();

// Loop through the ingredients array and create <li> elements
ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  fragment.appendChild(listItem);
});

// Append all <li> elements to the ul#ingredients list in a single operation
ingredientsList.appendChild(fragment);

// Display the result
console.log(ingredientsList.innerHTML);
