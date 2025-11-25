
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
