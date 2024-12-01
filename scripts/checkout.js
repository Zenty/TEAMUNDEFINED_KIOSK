// Checkout Scripts
const cartCountElement = document.getElementById('cart-count');  
const cartPopup = document.getElementById('cart-popup');  
const closeCartButton = document.getElementById('close-cart');  
const cartIcon = document.getElementById('cart-icon');

cartIcon.addEventListener('click', function() {
    cartPopup.classList.add('visible');  // 
});

closeCartButton.addEventListener('click', function() {
    cartPopup.classList.remove('visible');
});