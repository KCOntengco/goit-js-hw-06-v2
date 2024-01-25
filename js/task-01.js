// Count and display the number of categories
const categoryCount = document.querySelectorAll('#categories .item').length;
console.log(`Number of categories: ${categoryCount}`);

// Iterate through each category and display header text and the number of elements
document.querySelectorAll('#categories .item').forEach(category => {
  const headerText = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('ul li').length;

  console.log(`Category: ${headerText}`);
  console.log(`Elements: ${categoryElements}`);
  console.log('------------------------');
});
