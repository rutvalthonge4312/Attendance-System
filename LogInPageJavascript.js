var changeThemeButton = document.getElementById("changeTheameButton");
var body = document.body;
var formBody = document.getElementsByClassName("formBody");
var navBar = document.getElementsByClassName("navbarHeader");
var logInButton = document.getElementById("logInButton");

changeThemeButton.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  formBody.style.color = "white";
  navBar.style.color = "white";

  changeThemeButton.style.backgroundColor = "white";
});

logInButton.addEventListener("click", function () {
  window.location.href = "ActualPage.html";
});
