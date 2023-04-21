//your JS code here. If required.
// Function to create a Promise that resolves after a random time between minTime and maxTime seconds
function createRandomPromise(minTime, maxTime) {
  const delay = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(delay);
    }, delay * 1000);
  });
}

// Add a row that spans 2 columns with the exact text Loading...
const table = document.getElementById('my-table');
const loadingRow = table.insertRow();
const loadingCell = loadingRow.insertCell();
loadingCell.colSpan = 2;
loadingCell.textContent = 'Loading...';

// Create an array of 3 Promises that resolve after a random time between 1 and 3 seconds
const promises = [
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
  createRandomPromise(1, 3),
];

// Use Promise.all to wait for all Promises to resolve
Promise.all(promises)
  .then(results => {
    // Remove the loading text
    table.deleteRow(0);

    // Populate the table with the required values
    const row1 = table.insertRow();
    row1.insertCell().textContent = 'Promise 1';
    row1.insertCell().textContent = `${results[0]}`;

    const row2 = table.insertRow();
    row2.insertCell().textContent = 'Promise 2';
    row2.insertCell().textContent = `${results[1]}`;

    const row3 = table.insertRow();
    row3.insertCell().textContent = 'Promise 3';
    row3.insertCell().textContent = `${results[2]}`;

    const totalTime = results.reduce((acc, val) => acc + val, 0).toFixed(3);
    const totalRow = table.insertRow();
    totalRow.insertCell().textContent = 'Total';
    totalRow.insertCell().textContent = `${totalTime}`;
  })
  .catch(error => {
    console.error(error);
  });

