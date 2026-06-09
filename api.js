
// console.log("SBA-308A Cyber Vulnerability Lookup");

// Organize code into modules and imports. / 3%. Imports the API key from a separate module file.

import { API_KEY } from "./keys.js";

// Use fetch API to communicate with an external web API. / 20%. Thi is used to retrieve vulnerability data

const BASE_URL = "https://services.nvd.nist.gov/rest/json/cves/2.0";

// Use fetch API to communicate with an external web API. / 20%
// Create user interaction with the API through GET requests. / 15%
// Make use of Promises and async/await syntax. / 15%

// Function will receive software name from the user, then create API URL

export async function fetchVulnerabilities(searchTerm, startIndex = 0) {

  // Build the API URL using the user's search term.

  const url = `${BASE_URL}?keywordSearch=${encodeURIComponent(searchTerm)}&resultsPerPage=10&startIndex=${startIndex}`;

  // Send the request to the NVD API.
  const response = await fetch(url);

  // Ensure the program runs without errors. / 10%
  // Create if staments to validate API request

  if (!response.ok) {
    throw new Error("Something went wrong while getting vulnerability data.");
  }

  // Convert the API response into JSON.
  const data = await response.json();

  // Return the vulnerability data back to main.js.
  return data;
}
