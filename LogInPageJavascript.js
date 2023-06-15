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

let edtPassword = document.getElementById("password");

let edtUsername = document.getElementById("username");

logInButton.addEventListener("click", function () {
  var apiUrl = "http://localhost/Attendance_API/index.php/user/signin";

  console.log(edtUsername.value);
  var params = {
    username: edtUsername.value,
    password: edtPassword.value,
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
        window.location.href = "ActualPage.html";
      } else {
        alert("Invalid Credentials");
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //
});
