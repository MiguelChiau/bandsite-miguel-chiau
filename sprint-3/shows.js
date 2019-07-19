// Below is the URL for the API
const URL = "https://project-1-api.herokuapp.com/";

// The first I requested the API key through the browser
var myKey = "61660787-78cb-44fa-b89d-c4003c1e91bc";

const commentsURL = `https://project-1-api.herokuapp.com/comments?api_key=${myKey}`;

//Sending a request to GET comments, note that "fullURL" includes "/comments"
const promise = axios.get(commentsURL);
promise.then(response => {
  displayAllComments(response.data);
});

//The code below target the HTML divs where the comments will go
function displayComment(commentObject) {
  console.log(commentObject);
  var commentSection = document.querySelector("#originalComments");
  var outerDiv = document.createElement("div");
  outerDiv.classList.add("mainDiv");

  //now create a div for the profile icon
  var profileDiv = document.createElement("div");
  outerDiv.appendChild(profileDiv);
  profileDiv.setAttribute("class", "profile");

  //create an empty div to hold name+date and comment
  var nameDateCommentDiv = document.createElement("div");
  outerDiv.appendChild(nameDateCommentDiv);
  nameDateCommentDiv.setAttribute("class", "nameDateComment");

  //create an empty div to hold name+date
  var nameDateDiv = document.createElement("div");
  nameDateCommentDiv.appendChild(nameDateDiv);
  nameDateDiv.classList.add("nameDate");

  // div for the name
  var nameDiv = document.createElement("div");
  nameDiv.innerText = commentObject.name;
  nameDateDiv.appendChild(nameDiv);
  nameDiv.classList.add("name");

  // div for the date
  var dateDiv = document.createElement("div");
  dateDiv.innerText = commentObject.timestamp;
  nameDateDiv.appendChild(dateDiv);
  dateDiv.classList.add("date");

  //for the actual comment
  var commentDiv = document.createElement("div");
  commentDiv.innerText = commentObject.comment;
  nameDateCommentDiv.appendChild(commentDiv);
  commentSection.appendChild(outerDiv);
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  //Now to get the info that the user types in the form fields
  const name = event.target.name.value;
  const comment = event.target.comment.value;

  // The POST request to post new comments
  const postPromise = axios.post(commentsURL, {
    name: name,
    comment: comment
  });
  postPromise.then(response => {
    //I make another GET request for all comments
    const promise = axios.get(commentsURL);
    promise.then(response => {
      displayAllComments(response.data);
    });
  });

  // This will clear the old comments in the input filds
  event.target.name.value = "";
  event.target.comment.value = "";
});

//PUT request
// axios.put(commentsURL, {
//   id: ":167bc98b-43d8-4f4c-9608-baa007c38c0f",
//   comment: comment,
//   name: name
// });

// promise.then(response => {
//   displayAllComments(response.data);
// });

function displayAllComments(defaultComments) {
  console.log(defaultComments);
  document.querySelector("#originalComments").innerHTML = "";
  for (var i = defaultComments.length - 1; i >= 0; i--) {
    displayComment(defaultComments[i]);
  }
}
