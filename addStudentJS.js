var backButton = document.getElementById("backButton");
var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var body = document.body;
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
backButton.addEventListener("click", function () {
  window.location.href = "ActualPage.html";
});
darkButton.addEventListener("click", function () {
  body.style.backgroundColor = "Black";
  body.style.color = "white";
});
lightButton.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  body.style.color = "Black";
});
