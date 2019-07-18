// Below is the URL for the API
const URL = "https://project-1-api.herokuapp.com/";

// The first I requested the API key through the browser
var myKey = "3b8180e7-1bb1-4f96-8b58-201c916d970b";

//Then I append my API key into the URL

const commentsURL = `https://project-1-api.herokuapp.com/comments?api_key=${myKey}`;

//Sending a request to GET comments, note that "fullURL" includes "/comments"
const promise = axios.get(commentsURL);
promise.then(response => {
  displayComments(response.data);
});

//since I get those comments on console now I need to add them into my page

// function displayComment(commentObject)
function displayComment(commentObject) {
  {
    console.log(commentObject);
    //we select our HTML section/ div by it's id
    var commentSection = document.querySelector("#originalComments");
    // document.getElementById("#originalComments").reset();
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
    // nameDateDiv.setAttribute("class", "nameDate");
    nameDateDiv.classList.add("nameDate");

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
    commentSection.appendChild(outerDiv);

    // For test purposes
    outerDiv.classList.add("mainDiv");
  }

  // Get the form on HTML using DOM
  document.querySelector("form").addEventListener("submit", function(event) {
    // This is to prevent the browser from reloading
    event.preventDefault();

    //Now to get the info that the user types in the form fields
    const name = event.target.name.value;
    const comment = event.target.comment.value;
    // const timestamp = event.target.timestamp.value;

    console.log(name, comment);

    //now we want to push this info into an array
    //Since we want new comments on top then I'll use unshift intead of push
    defaultComments.unshift({
      name: name,
      comment: comment
      // timestamp: timestamp
    });

    displayComments();
    event.target.name.value = "";
    event.target.comment.value = "";
    console.log(defaultComments);
  });
}
function displayComments(defaultComments) {
  console.log(defaultComments);
  document.querySelector("#originalComments").innerHTML = "";
  for (var i = 0; i < defaultComments.length; i++) {
    displayComment(defaultComments[i]);
  }
  //displayComments();

  //Sending a request to GET showDates

  // const showsURL = `https://project-1-api.herokuapp.com/showdates?api_key=${myKey}`;

  // const shows = axios.get(showsURL);
  // shows.then(function(response) {
  //   const showDates = response.data;
  //   console.log(showDates);
  // });
}
