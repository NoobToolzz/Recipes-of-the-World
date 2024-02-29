// Credit: https://www.w3schools.com/howto/howto_css_modals.asp & GPT for remixing to gather all modals and buttons and attach click events to them

// Get all modals and buttons
var modals = document.querySelectorAll("[id*='Modal']");
var buttons = document.querySelectorAll("[id*='Btn']");

// Attach click event to all buttons
buttons.forEach(function (btn, index) {
  btn.onclick = function () {
    modals[index].style.display = "block";
  };
});

// Attach click event to close spans for all modals
modals.forEach(function (modal, index) {
  var spans = modal.getElementsByClassName("close")[0];
  if (spans) {
    spans.onclick = function () {
      modal.style.display = "none";
    };
  }
});

// When the user clicks anywhere outside of any modal, close it
window.onclick = function (event) {
  modals.forEach(function (modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
