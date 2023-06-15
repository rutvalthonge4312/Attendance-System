var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var body = document.body;
var formBody = document.getElementsByClassName("formBody");
var navBar = document.getElementsByClassName("navbarHeader");
var logInButton = document.getElementById("logInButton");

darkButton.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  formBody.style.color = "white";
  navBar.style.color = "white";

  changeThemeButton.style.backgroundColor = "white";
});
lightButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  formBody.style.color = "black";
  navBar.style.color = "black";

  changeThemeButton.style.backgroundColor = "white";
});

logInButton.addEventListener("click", function () {
  window.location.href = "ActualPage.html";
});
