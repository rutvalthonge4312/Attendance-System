var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var allContaint = document.getElementsByClassName(".allContaint");
var body = document.body;
var card = document.getElementsByClassName("card");

darkButton.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "grey";
    card[i].style.color = "white";
  }
});
lightButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "white";
    card[i].style.color = "black";
  }
});
