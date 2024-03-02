// Credit to W3Schools for the loader code: (https://www.w3schools.com/howto/howto_css_loader.asp)
// Thanks to GPT for the loading messages.

var loaderMessages = document.getElementById("loaderMessages");

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderDiv").style.display = "block";
  loaderMessages.style.display = "none"; // Hide messages when loader finishes
}

// Function to get a random time between 1000ms and 3000ms
function getRandomTime() {
  return Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
}

// Function to display loader messages every 0.5 seconds
function displayMessages() {
  var messages = [
    "Preparing meals...",
    "Cooking...",
    "Baking...",
    "Serving...",
    "Enjoy your meals <3",
  ];
  var index = 0;

  setInterval(function () {
    loaderMessages.innerText = messages[index];
    index = (index + 1) % messages.length;
  }, 500);
}

displayMessages(); // Start displaying messages
loader(); // Start loader
