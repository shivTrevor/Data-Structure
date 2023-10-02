// Data Cleaning and Validation
const userInput = "   john.doe@example.com   ";
const cleanedEmail = userInput.trim(); // Trim leading and trailing spaces from user input.

// Text Processing and Analysis
const textData = "This is a sample text for analysis.";
const tokens = textData.split(" "); // Tokenize the text for further analysis.

// String Formatting for Display
const date = new Date();
const formattedDate = date.toISOString(); // Format the date for display.

// URL and URI Handling
const urlParams = { search: "query string", page: 1 };
const queryString = new URLSearchParams(urlParams).toString(); // Convert URL parameters to a query string.

// Data Serialization and Deserialization
const dataObject = { name: "John Doe", age: 30 };
const serializedData = JSON.stringify(dataObject); // Serialize object data for storage or transmission.

// Regular Expressions
const textContent = "Contact us at support@example.com for assistance.";
const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
const emails = textContent.match(emailPattern); // Extract email addresses from text content.

// File and Path Handling
const filePath = "/usr/local/documents/";
const fileName = "document.txt";
const fullPath = `${filePath}${fileName}`; // Construct a full file path.

// Parsing and Extracting Information
const csvRow = "John,Doe,john.doe@example.com";
const csvValues = csvRow.split(","); // Parse a CSV row to extract values.

// Displaying Results
console.log("Cleaned Email:", cleanedEmail);
console.log("Tokens:", tokens);
console.log("Formatted Date:", formattedDate);
console.log("Query String:", queryString);
console.log("Serialized Data:", serializedData);
console.log("Emails Found:", emails);
console.log("Full Path:", fullPath);
console.log("CSV Values:", csvValues);
