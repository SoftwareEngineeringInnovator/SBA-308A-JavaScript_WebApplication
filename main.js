import { fetchVulnerabilities } from "./api.js";

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

// Create the user interaction with the API using the search field. / 15%
searchForm.addEventListener("submit", handleSearch);

async function handleSearch(event) {
    event.preventDefault();

    const searchTerm = searchInput.value.trim();

    console.log("Search Software or Product:", searchTerm);
}