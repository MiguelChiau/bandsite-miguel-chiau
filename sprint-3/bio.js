// Below is the URL for the API
const URL = "https://project-1-api.herokuapp.com/";

// The first I requested the API key through the browser
var myKey = "15ec4905 - 237c - 4055 - ae1a - 83224a9e1d24";

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
  var profileDiv = document.createElement("IMG");
  profileDiv.setAttribute("src", "../assets/images/avatar.png");
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
  dateDiv.innerText = convertTimestamp(commentObject.timestamp);
  var timestamp = nameDateDiv.appendChild(dateDiv);
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

function displayAllComments(defaultComments) {
  console.log(defaultComments);
  document.querySelector("#originalComments").innerHTML = "";
  for (var i = defaultComments.length - 1; i >= 0; i--) {
    displayComment(defaultComments[i]);
  }
}

//This is to convert the epoch timestamp to full date
function convertTimestamp(epochTime) {
  const date = new Date(epochTime);
  const newDate =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();

  // date.now() - 11 * 1000 * 60 * 60;

  return newDate;
}

// // PUT request for likes by user Miguel
// const miguelID = "b1de2092-cd2c-412e-8e92-8f5eea67013a";

// const likesURL = `https://project-1-api.herokuapp.com/comments/${miguelID}/like?api_key=${myKey}`;

// const putPromise = axios.put(likesURL, {
//   name: name,
//   comment: comment
// });
// putPromise.then(response => {
//   //   displayAllComments(response.data);

//   console.log(response.data);
// });

// //DELETE comments
// const commentID = "1a34c118-5199-4ea3-9adc-0859770281ab";
// const deleteURL = `https://project-1-api.herokuapp.com/comments/${commentID}?api_key=${myKey}`;

// const deletePromise = axios.delete(deleteURL, {});
// deletePromise.then(response => {
//   //   displayAllComments(response.data);

//   console.log(response.data);
// });
