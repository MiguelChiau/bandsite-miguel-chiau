// This array will include 3 objects with the defaults comments

var comments = [
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

// This is to get our form from indexed.html
var form = document.querySelector("#commentsForm");

function displayComment(comment) {
  var commentSection = document.querySelector("#commentTest");
  var outerDiv = document.createElement("div");
  outerDiv.setAttribute("class", "chiau");

  var innerDiv = document.createElement("div");
  innerDiv.innerText = comment.comment;
  outerDiv.appendChild(innerDiv);
  commentSection.prepend(outerDiv);
}

// The next step is to iterate through the Array

for (var i = 0; i < comments.length; i++) {
  displayComment(comments[i]);
}

console.log("test");
