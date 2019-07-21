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

    //This is to capitalize only the first letter on dates
    function titleCase(str) {
      let words = str.split(" ");
      const capitalizedWords = words.map(word => {
        return word[0].toUpperCase() + word.toLowerCase().substring(1);
      });
      return capitalizedWords.join(" ");
    }

    document.querySelector("tbody").innerHTML += `<tr class="divider">
                <td data-label="DATE">${titleCase(shows[i].date)}</td>
                <td data-label="VENUE" class="show__venue">${
                  shows[i].place
                }</td>
                <td data-label="LOCATION" class="show__location">
                  ${shows[i].location}
                </td>
  
                <td><button type="button">BUY TICKETS</button></td>
              </tr> `;
  }
}
