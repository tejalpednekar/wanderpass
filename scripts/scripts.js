let visaData = []

    /* FETCH FUNCTION */

window.addEventListener("load", () => {

  fetch("data/data.json")
    .then(res => {
      console.log("Fetch status:", res.status)
      return res.json()
    })
    .then(data => {
      visaData = data
    })
    .catch(err => console.error("Fetch error:", err))

    /* GLOBALS */

  const formEl = document.getElementById("form")
  const inputEl = document.getElementById("searchBox")
  const resultsEl = document.getElementById("results")
  const buttonEl = document.getElementById("Btn")

  formEl.addEventListener("submit", (event) => {
    event.preventDefault()

    /* GO and RESET BUTTON */ 

    if (buttonEl.textContent === "Reset") {
      inputEl.value = ""
      resultsEl.innerHTML = ""
      buttonEl.textContent = "Go"
      return
    }

    const query = inputEl.value.trim().toLowerCase()

    const match = visaData.find(item =>
      item.country.toLowerCase() === query
    )

    /* RESULTS CARD and RESET BUTTON */

    if (!match) {
      resultsEl.innerHTML = `<div class="no-result-card">No results found for "${inputEl.value}".</div>`
      buttonEl.textContent = "Reset"
      return
    }

    resultsEl.innerHTML = `
      <div class="result-card">
        <div class="card-title">
          ${match.flag ? match.flag + " " : ""}${match.country}
        </div>

        <div class="card-row">
          <strong>Visa:</strong> ${match.visaRequired}
        </div>

        <div class="card-row">
          <strong>Travel Tip:</strong> ${match.travelTip}
        </div>

        <div class="card-row">
          <strong>Embassy Link:</strong>
          <a href="${match.embassyLink}" target="_blank" rel="noopener noreferrer">
            Visit official website
          </a>
        </div>
      </div>
    `
    buttonEl.textContent = "Reset"
  
})
})


/*let visaData;

window.addEventListener("load", () => {
  fetch("data.json")
  .then(response => response.json())
  .then(data => { 
    visaData = data;
  })
  .catch(error => console.log(error));
}); 

let inputEl = document.querySelector('input');
let buttonEl = document.querySelector('button');
let headingEl = document.querySelector(#result);

buttonEl.addEventListener("click", () => {
  let value = inputEl.value.trim().toLowerCase();

  let user = visaData.find(
    item => item.country.toLowerCase() === value
  );

  if (!user) {
    headingEl.textContent = "Not Found";
  } else {
    headingEl.textContent = `${user.country}: ${user.visaRequired}`;
  }
});




/*

WanderPASS — JavaScript Notes 

All visa information is stored in an external JSON file.

The JSON contains an array of objects, where each object has the following data:
      • Country: name of the country 
      • Visa requirements: YES/NO
      • Notes: Additional visa information
      • Travel Tip: Short tip for travelers
      • Embassy Link: URL to the country's embassy or visa application page

      Resource Reference: https://www.youtube.com/watch?v=mVGE-Aq-uRA&list=WL&index=33

      Example:
      [
        {
          "country": "France",
          "visaRequired": "NO",
          "notes": "Schengen Area. Passport must be valid for 6+ months.",
          "travelTip": "Lorem Ipsum.",
          "embassyLink": "https://france-visas.gouv.fr/"
        }
      ]

I will load this data using the fetch() function.

All of this data will load on the same HTML page (Homepage -index.html) to simplify organization of code. The results will replace the search bar. 

When the user submits a query and clicks on “Go” or presses the “Return/Enter” key, the website will search the JSON file with an object array to locate the country.

If a match is found, it will display all five fields including the clickable embassy page.
If a match is not found, it will display a “Country Not Found” message.

*/



  
