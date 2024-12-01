// Checkout Scripts
const cartCountElement = document.getElementById('cart-count');  
const cartPopup = document.getElementById('cart-popup');  
const closeCartButton = document.getElementById('close-cart');  
const cartIcon = document.getElementById('cart-icon');

// Show cart popup when cart icon is clicked
cartIcon.addEventListener('click', function() {
    cartPopup.classList.add('visible');
});

// Hide cart popup when close button is clicked
closeCartButton.addEventListener('click', function() {
    cartPopup.classList.remove('visible');
});

// Hide cart popup when user clicks outside of the cart popup
cartPopup.addEventListener('click', function(event) {
    if (event.target === cartPopup) {
      cartPopup.classList.remove('visible');
    }
});

// Update cart count when item is added or removed
let cartCount = 0;
function updateCart(action) {
    if (action === 'add') {
        cartCount++; 
    } else if (action === 'remove') {
        cartCount--;  
    }
    updateCartDisplay(); 
}

// Hide cart count if cart is empty
function updateCartDisplay() {
    if (cartCount > 0) {
 cartCountElement.textContent = cartCount;  
      cartCountElement.classList.add('visible');  
    } else {
      cartCountElement.classList.remove('visible'); 
    } 
}
  