// Loader credits go to W3Schools (https://www.w3schools.com/howto/howto_css_loader.asp)

var myLoader;

function loader() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loaderDiv").style.display = "block";
}
