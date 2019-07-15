// This array will include 3 objects with the defaults comments

var defaultComments = [
  {
    name: "Micheal Lyons",
    timestamp: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once overyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed"
  },

  {
    name: "Gary Wong",
    timestamp: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },

  {
    name: "Theodore Duncan",
    timestamp: "12/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitly my favorite ever!"
  }
];

function displayComment(commentObject) {
  //we select our HTML section/ div by it's id
  var commentSection = document.querySelector("#originalComments");
  var outerDiv = document.createElement("div");

  //now create a div for the profile icon
  var profileDiv = document.createElement("div");
  outerDiv.appendChild(profileDiv);
  commentSection.prepend(outerDiv);
  profileDiv.setAttribute("class", "profile");

  //create an empty div to hold name+date and comment
  var nameDateCommentDiv = document.createElement("div");
  outerDiv.appendChild(nameDateCommentDiv);
  commentSection.prepend(outerDiv);
  nameDateCommentDiv.setAttribute("class", "nameDateComment");

  //create an empty div to hold name+date
  var nameDateDiv = document.createElement("div");
  nameDateCommentDiv.appendChild(nameDateDiv);
  commentSection.prepend(outerDiv);
  nameDateDiv.setAttribute("class", "nameDate");

  // div for the name
  var nameDiv = document.createElement("div");
  nameDiv.innerText = commentObject.name;
  nameDateDiv.appendChild(nameDiv);
  commentSection.prepend(outerDiv);
  nameDiv.classList.add("name");

  // div for the date
  var dateDiv = document.createElement("div");
  dateDiv.innerText = commentObject.timestamp;
  nameDateDiv.appendChild(dateDiv);
  commentSection.prepend(outerDiv);
  dateDiv.classList.add("date");

  //for the actual comment
  var commentDiv = document.createElement("div");
  commentDiv.innerText = commentObject.comment;
  nameDateCommentDiv.appendChild(commentDiv);
  commentSection.prepend(outerDiv);

  // For test purposes
  // outerDiv.setAttribute("class", "mainDiv");
  outerDiv.classList.add("mainDiv");
}
// The next step is to iterate through the Array
for (var i = 0; i < defaultComments.length; i++) {
  displayComment(defaultComments[i]);
}
