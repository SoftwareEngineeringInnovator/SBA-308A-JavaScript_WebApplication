# Software Vulnerability Checker

## Project Overview

This project is a simple web application that allows users to search for known software vulnerabilities using the National Vulnerability Database (NVD) API.

The goal of this project is to demonstrate the use of JavaScript asynchronous programming, API communication, modules, and DOM manipulation while creating a useful cybersecurity-related tool.

Users can enter the name of a software product (for example: Windows, Chrome, Firefox, or Node.js) and the application will retrieve vulnerability information from the NVD database and display the results on the page.

---

## Features

* Search for software vulnerabilities by product name.
* Retrieve live vulnerability data from the NVD API.
* Display CVE IDs.
* Display publication dates.
* Display vulnerability descriptions.
* Display the total number of results returned by the API.
* Show status messages while searching.
* Handle searches that return no results.
* Handle API errors using try/catch.

---

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* Async/Await
* JavaScript Modules
* NVD (National Vulnerability Database) API

---

## Project Structure

```text
project-folder/
│
├── index.html
├── style.css
├── main.js
├── api.js
├── keys.js
├── README.md
```

### File Descriptions

**index.html**

* Contains the main structure of the web page.

**style.css**

* Provides styling and layout for the application.

**main.js**

* Handles user interaction, DOM updates, search functionality, and displaying results.

**api.js**

* Handles communication with the NVD API.

**keys.js**

* Stores the API key separately from the application code.

---

## How to Run the Project

1. Clone or download the repository.
2. Open the project in Visual Studio Code.
3. Add your NVD API key to the `keys.js` file.

Example:

* export const API_KEY = "YOUR_API_KEY_HERE";


4. Start the project using Live Server.
5. Enter a software name into the search box.
6. Click the Search button.
7. Review the vulnerability results displayed on the page.

---

## Example Searches

Try searching for:

* Windows
* Chrome
* PGP
* SSH
* Firefox
* Node.js
* OpenSSL

---

## Known Issues

### Pagination

The project includes the foundation for pagination using Previous and Next buttons.

At the time of submission, pagination is still being tested and refined. The buttons are present in the user interface, but the functionality has not been fully completed yet.

The plan is to continue development and enable users to move through multiple pages of vulnerability results once the feature is fully working.

---

## What I Learned

During this project I practiced:

* Working with external APIs.
* Using fetch requests.
* Using async/await.
* Using try/catch for error handling.
* Manipulating the DOM with JavaScript.
* Creating and updating elements dynamically.
* Organizing JavaScript code into multiple modules.
* Using Git commits throughout development.

---

## Future Improvements

* Complete pagination support.
* Add CVSS severity ratings.
* Add links to official NVD references.
* Improve card styling and layout.
* Add filtering options.
* Add loading animations.

---

## Author

Fredy Chilito-Ramos - Software Engineering Innovator - PerScholas Software Engineering Student 
Created as part of the Per Scholas Software Engineering Program.
Project Topic: Cybersecurity / Software Vulnerability Lookup Tool.