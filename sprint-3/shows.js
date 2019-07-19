var myKey = "61660787-78cb-44fa-b89d-c4003c1e91bc";

//Sending a GET request for the showdates
const showsURL = `https://project-1-api.herokuapp.com/showdates?api_key=${myKey}`;

const showsPromise = axios.get(showsURL);
showsPromise.then(response => {
  allShows(response.data);
});

// This will loop through the showdates array
function allShows(shows) {
  for (let i = 0; i < shows.length; i++) {
    console.log(shows[i]);
    document.querySelector("tbody").innerHTML += `<tr class="divider">
                <td data-label="Date">${shows[i].date}</td>
                <td data-label="Venue" class="show__venue">${
                  shows[i].place
                }</td>
                <td data-label="Location" class="show__location">
                  ${shows[i].location}
                </td>
  
                <td><button type="button">BUY TICKETS</button></td>
              </tr> `;
  }
}
