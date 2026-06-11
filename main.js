import { fetchVulnerabilities } from "./api.js";

// Pagination Variables - Variables keep track of the Current search term and the current page position
let currentSearchTerm = "";
let currentStartIndex = 0;

// Cache elements after the results section is created
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");


// Function creates the API results

function createApiResultsSection() {
    const apiResultsSection = document.getElementById("api-results-section");

    apiResultsSection.innerHTML = `
        <section class="log-panel">
            <div class="panel-title">
                <span class="panel-tag">LIVE</span>
                <h2>Vulnerability Results</h2>

                <!-- Total number of results returned by the API -->
                <span class="incident-count" id="result-count">0 results</span>
            </div>

            
            <p id="status-message">Ready to search the NVD database.</p>

            <div class="log-feed" id="results-container">
                <div class="empty-state" id="empty-state">
                    <p>Search for a product to see vulnerability results.</p>
                </div>
            </div>

            <div class="form-actions">
                <button class="btn-secondary" id="previous-button">Previous</button>

                <button class="btn-primary" id="next-button">Next</button>
            </div>
        </section>
    `;
}

createApiResultsSection();

// Pagination buttons:
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

// Event Listener for Pagination buttons
previousButton.addEventListener("click", handlePreviousPage);
nextButton.addEventListener("click", handleNextPage);

// Async function loading page
async function loadPage() {

    const data =
        await fetchVulnerabilities(
            currentSearchTerm,
            currentStartIndex
        );

    console.log("Current Page Data:", data);

}

// Functions for pagination buttons - handleNextPage and handlePreviousPage
async function handleNextPage() {

    // The vulnerability result will provide firts 10 result and when the user click "Next - button" it will provide the next 10 items
    currentStartIndex += 10;

    console.log("Next Page Start Index:", currentStartIndex);

    // Async loading page
    await loadPage();
    // console.log("Next button clicked");
}

// The vulnerability result will provide firts 10 result and when the user click "Next - button" it will provide the next 10 items
async function handlePreviousPage() {

    console.log("Previous Page Start Index:", currentStartIndex);

    // Async loading page
    await loadPage();
    // console.log("Previous button clicked");
}

// Initiate status message by using vairable statusMessage after user click on searh vulnerabilities button
const statusMessage = document.getElementById("status-message");

// Create the user interaction with the API using the search field. / 15%
searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
    event.preventDefault();

    // Provide status message after user click on searh vulnerabilities button
    statusMessage.textContent = "Searching vulnerability database";

    //Pagination
    const searchTerm = searchInput.value.trim();

    currentSearchTerm = searchTerm;
    console.log(currentSearchTerm);

    currentStartIndex = 0;
    console.log(currentStartIndex);

    //Pagination

    console.log("Search Software or Product:", searchTerm);

    // Make use of Promises and async/await syntax. / 15%
    // Function runs by importing the Async Function - async function fetchVulnerabilities

    // Add API error handling using try / catch
    try {
        const data = await fetchVulnerabilities(searchTerm);

        // API data to populate application content and features. / 20%
        // This section display the CVE result on the page.
        // The NVD documentation says the CVE API returns CVE records using fields like resultsPerPage, startIndex, totalResults, and a vulnerabilities array.
        // Cache elements after the results section is created

        const resultsContainer = document.getElementById("results-container");
        const resultCount = document.getElementById("result-count");

        // Clear search results
        resultsContainer.innerHTML = "";

        // Provide results found by the NVD API.

        resultCount.textContent = `${data.totalResults} results`;

        statusMessage.textContent = `Showing results for: ${searchTerm}`;

        if (data.totalResults === 0) {

            resultsContainer.innerHTML = `<p>No vulnerabilities found.</p>`;

            return;
        }

        // Loop through vulnerabilities returned by the API
        data.vulnerabilities.forEach((item) => {

            const cve = item.cve;

            resultsContainer.innerHTML += `<article class="incident-card">

            <h3>${cve.id}</h3>

            <p><strong>Published:</strong>${cve.published}</p>

            <p><strong>Description:</strong>${cve.descriptions[0].value}</p>

        </article>`;

            // API will return data from the search on the vulnerability data sructure

            console.log("API data returned:", data);
            console.log("Total Results:", data.totalResults);
            console.log("CVE Result by Index:", data.vulnerabilities[9]);
            console.log("CVE Result by ID:", data.vulnerabilities[0].cve.id);
            console.log("CVE Result by Published Date:", data.vulnerabilities[0].cve.published);
            console.log("CVE Result by Vulnerabiliti Description:", data.vulnerabilities[0].cve.descriptions[0].value);
            console.log("Vulnerabilities array:", data.vulnerabilities);
        });

    } catch (error) {
        statusMessage.textContent = "Unable to retrieve vulnerability data.";
        console.log("API Error:", error);
    }



    // const cve = data.vulnerabilities[0].cve;

    // resultsContainer.innerHTML = `<article class="incident-card">
    //     <h3>${cve.id}</h3>

    //     <p><strong>Published:</strong> ${cve.published}</p>

    //     <p><strong>Description:</strong>${cve.descriptions[0].value}</p>

    // </article>`;
}