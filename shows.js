function showsMobile() {
  var table = document.createElement("table");

  var date = document.createElement("td");
  date.classList.add("shows__date");

  var venue = document.createElement("td");
  venue.classList.add("shows__date");

  var tr = document.createElement("tr");
  tr.appendChild(date);
  tr.appendChild(venue);

  table.appendChild(tr);
}
