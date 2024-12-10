// Checkout Scripts
const cartCountElement = document.getElementById('cart-count');  
const cartPopup = document.getElementById('cart-popup');  
const closeCartButton = document.getElementById('close-cart-button');  
const cartOpenButton = document.getElementById('cart-open-button');
const cartAddButton = document.getElementById('cart-add-button');
const cartRemoveButton = document.getElementById('cart-remove-button');

// Show cart popup when cart icon is clicked
cartOpenButton.addEventListener('click', function() {
    cartPopup.classList.add('visible');
});

// Hide cart popup when close button is clicked
closeCartButton.addEventListener('click', function() {
    cartPopup.classList.remove('visible');
});

/* Hide cart popup when user clicks outside of the cart popup
document.addEventListener('click', function(event) {
    if (event.target === cartPopup) {
      cartPopup.classList.remove('visible');
    }
}); */

// Update cart count when item is added or removed
let cartCount = 0;

// Hide cart count if cart is empty
function updateCartDisplay() {
    if (cartCount > 0) {
        cartCountElement.textContent = cartCount;
        cartCountElement.classList.add('visible');
    } else {
        cartCountElement.classList.remove('visible');
    }
}

// Update cart count when item is removed
cartAddButton.addEventListener('click', function() {
    cartCount++; 
    updateCartDisplay();
});

// Update cart count when item is added
cartRemoveButton.addEventListener('click', function() {
    cartCount--; 
    updateCartDisplay();
});

