// fetch product data from dummy api/product-database
async function fetchData(jsonFile) {
  try {
    const response = await fetch(jsonFile);
    if (!response.ok) {
      throw new Error("Could not fetch data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// Get data from json and stores them in separate categories
async function createProducts() {
  const jsonFile = "products.json";
  const data = await fetchData(jsonFile);

  if (!data) return;
  console.log(data);

  const snacks = data.products.snacks;
  const drinks = data.products.drinks;
  console.log(snacks);
  console.log(drinks);

  //Display categories under their category
  displayProduct(snacks, "snacks_section");
  displayProduct(drinks, "drinks_section");
}

// Display products takes product categories and ID for targeted section as argument
function displayProduct(products, productSectionID) {
  const productContainer = document.getElementById(productSectionID);

  if (!productContainer) return;

  productContainer.innerHTML = products
    .map(
      (product) =>
        `
      <div class="product-card stacked">
        <img
        class="product-image"
        src="${product.imageUrl}"
        alt="${product.name}" />
        <div class="product-info">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">Pris: ${product.price}</p>
        </div>
        </div>
      `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", createProducts);

// Event listeners for plus- och minus-knappar
document.querySelectorAll('.bi-plus-square').forEach((plusButton) => {
  plusButton.addEventListener('click', function () {
      const quantityElement = this.previousElementSibling;
      let currentQuantity = parseInt(quantityElement.textContent);
      currentQuantity++;
      quantityElement.textContent = currentQuantity;
  });
});

document.querySelectorAll('.bi-dash-square').forEach((minusButton) => {
  minusButton.addEventListener('click', function () {
      const quantityElement = this.nextElementSibling;
      let currentQuantity = parseInt(quantityElement.textContent);
      if (currentQuantity > 1) {
          currentQuantity--;
          quantityElement.textContent = currentQuantity;
      }
  });
});