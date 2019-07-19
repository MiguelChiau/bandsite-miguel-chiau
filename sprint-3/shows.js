var myKey = "61660787-78cb-44fa-b89d-c4003c1e91bc";

//Sending a GET request for the showdates
const showsURL = `https://project-1-api.herokuapp.com/showdates?api_key=${myKey}`;

const showsPromise = axios.get(showsURL);
showsPromise.then(response => {
  // displayAllComments(response.data);
  console.log(response.data);
});
