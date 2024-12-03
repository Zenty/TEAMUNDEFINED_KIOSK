// Main Scripts

// Toggles the visibility of the collapsible content in the drinks/food section

document.querySelectorAll('.accordion_button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;

    button.classList.toggle('accordion_button--active');

    if (button.classList.contains('accordion_button--active')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = 0;
    }
  });
});
