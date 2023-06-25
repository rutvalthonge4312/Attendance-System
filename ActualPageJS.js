var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var allContaint = document.getElementsByClassName(".allContaint");
var body = document.body;
var card = document.getElementsByClassName("card");

/*function changeTheBackroundColor(card) {
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "red";
  }
}*/

darkButton.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  body.style.color = "white";
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "grey";
    card[i].style.color = "white";
    card[i].style.boxShadow = "2px 2px 4px rgba(0, 0, 0, 0.2)";
  }
});
lightButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "black";
  for (var i = 0; i < card.length; i++) {
    card[i].style.backgroundColor = "white";
    card[i].style.color = "black";
    card[i].style.boxShadow = " 11px 8px 17px 0px rgba(226, 229, 233)";
  }
});
Array.from(card).forEach(function (element) {
  element.addEventListener("mouseenter", function () {
    element.classList.add("myDivInside");
  });

  element.addEventListener("mouseleave", function () {
    element.classList.remove("myDivInside");
  });
});
