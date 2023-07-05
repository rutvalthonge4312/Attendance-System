var darkButton = document.getElementById("darkMode");
var lightButton = document.getElementById("lightMode");
var body = document.body;
var table = document.getElementById("tableInShow");
var apiUrl = "http://localhost/Attendance_API/index.php/user/list?limit=50";
const request = new Request(apiUrl, {
  method: "GET",
});
fetch(request)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(JSON.stringify(responseJson));
    if (responseJson.status == 200) {
      console.log("hi Data Found!");
      let tableInShow = document.getElementById("tableInShow");
      var html;
      var i = 0;

      html =
        "<tr><th>Sr.No</th><th>Name</th><th>Roll Number</th><th>Total Attendance</th><th>Division</th>";
      responseJson.data.forEach((element) => {
        let trHtml = "<tr>";
        trHtml += "<td>" + (i + 1) + "</td>";

        trHtml += "<td>" + element.Name + "</td>";
        trHtml += "<td>" + element.roll + "</td>";
        trHtml += "<td>" + element.totalAttendance + "</td>";
        trHtml += "<td>" + element.division + "</td>";
        trHtml += "</tr>";
        html += trHtml;
        i++;
      });
      tableInShow.innerHTML = html;
    }
  })
  .catch((err) => {
    console.log(err);
  });

//
darkMode.addEventListener("click", function () {
  body.style.backgroundColor = "black";
  table.classList.add("table-dark");
});

lightMode.addEventListener("click", function () {
  body.style.backgroundColor = "white";
  table.classList.remove("table-dark");
  table.classList.add("table-light");
});
var backButton = document.getElementById("backButton");
backButton.addEventListener("click", function () {
  window.location.href = "ActualPage.html";
});
