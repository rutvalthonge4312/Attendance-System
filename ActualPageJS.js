var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var allContaint = document.getElementsByClassName("allContaint");
var body = document.body;

darkButton.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  card.style.backgroundColor = "black";
});
lightButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
});
