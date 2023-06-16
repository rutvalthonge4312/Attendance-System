var apiUrl = "http://localhost/Attendance_API/index.php/user/list?limit=50";
var button = document.createElement("button");
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
        "<tr><th>Sr.No</th><th>Name</th><th>Roll Number</th><th>Total Attendance</th><th>Division</th><th>Button</th>";
      responseJson.data.forEach((element) => {
        let trHtml = "<tr>";
        trHtml += "<td>" + (i + 1) + "</td>";

        trHtml += "<td>" + element.Name + "</td>";
        trHtml += "<td>" + element.roll + "</td>";
        trHtml += "<td>" + element.totalAttendance + "</td>";
        trHtml += "<td>" + element.division + "</td>";

        trHtml +=
          "<td>" +
          "<button type='button' class='btn-close' aria-label='Close'></button>" +
          "</td>";
        //<button type='button' class='btn-close' aria-label='Close'></button>
        trHtml += "</tr>"; //new row
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
