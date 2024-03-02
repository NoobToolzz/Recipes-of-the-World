// Loader credits go to W3Schools (https://www.w3schools.com/howto/howto_css_loader.asp)

var myLoader;

function loader() {
  var randomDelay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000; // Random delay between 1000 and 3000 ms
  myVar = setTimeout(showPage, randomDelay);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderDiv").style.display = "block";
}
