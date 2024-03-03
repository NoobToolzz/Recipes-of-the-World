// Credit: GPT (JavaScript hurts my brain.)
// The script intention: Indicate that you've interacted with the card when you hover over it.
// The card will be large by default, upon hover it will be slightly smaller.

document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with an id containing the word "card"
  var cardElements = document.querySelectorAll('[id*="card"]');

  // Loop through each element and add event listeners
  cardElements.forEach(function (card) {
    // Get the maximum scale factor based on the viewport width
    var maxScale = Math.min(window.innerWidth / card.offsetWidth, 1.1);

    // Add a mouseover event listener to adjust the scale
    card.addEventListener("mouseover", function () {
      card.style.transform = "scale(" + maxScale + ")";
    });

    // Add a mouseout event listener to reset the scale
    card.addEventListener("mouseout", function () {
      card.style.transform = "scale(0.95)";
    });
  });
});
