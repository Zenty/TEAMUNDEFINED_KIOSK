/* ********************** */
/*   Accordion scripts    */
/* ********************** */

// Function to expand an accordion
function expandAccordion(button, content) {
  button.classList.add("accordion_button--active"); //Adds CSS to the active button
  content.style.maxHeight = content.scrollHeight + "px"; //Makes the content visible
}

// Function to collapse an accordion
function collapseAccordion(button, content) {
  button.classList.remove("accordion_button--active"); //Removes the expanded button CSS
  content.style.maxHeight = 0; //Hides the content
}

// Function to toggle an accordion
function toggleAccordion(button, content) {
  if (button.classList.contains("accordion_button--active")) {
    collapseAccordion(button, content);
  } else {
    expandAccordion(button, content);
  }
}

// Initialize the accordion
function initializeAccordion() {
  const buttons = document.querySelectorAll(".accordion_button");

  buttons.forEach((button) => {
    const accordionContent = button.nextElementSibling;

    expandAccordion(button, accordionContent); //Expands the accordions on page load

    // Add click event listener to toggle on click
    button.addEventListener("click", () =>
      toggleAccordion(button, accordionContent)
    );
  });
}

// Call the initialization function on page load
initializeAccordion();
