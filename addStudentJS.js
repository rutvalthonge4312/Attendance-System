var backButton = document.getElementById("backButton");
var darkButton = document.getElementById("darkButton");
var lightButton = document.getElementById("lightButton");
var body = document.body;
var SubmitButton = document.getElementById("SubmitButton");
var Name = document.getElementById("validationCustom01");
var roll = document.getElementById("validationCustom03");
var division = document.getElementById("validationCustom04");
var totalAttendance = 0;
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

SubmitButton.addEventListener("click", function () {
  var apiUrl = "http://localhost/Attendance_API/index.php/user/addStudent";

  // console.log(edtUsername.value);
  var params = {
    Name: Name.value,
    roll: roll.value,
    division: division.value,
  };

  // console.log("payload" + JSON.stringify(params.values));
  console.log(params);
  let body = Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
  const request = new Request(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body,
  });

  fetch(request)
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(JSON.stringify(responseJson));
      if (responseJson.status == 200) {
        alert("STudent Added");
      } else {
        alert("something Wrong happened!");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //
});
