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