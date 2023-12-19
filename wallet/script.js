// get references to HTML elements
const earningsInput = document.getElementById('earnings');
const calculateButton = document.getElementById('calculate-button');
const resultsDiv = document.getElementById('results');

// define expenses
const piano = 700;
const transporte_mama = 680;
const taxi = 200;
const higiene_personal = 100;
const recrativity = 100;
const FOOD = 500;

// calculate expenses and remaining balance
function calculateExpenses() {
  const earnings = parseFloat(earningsInput.value);
  const expenses = piano + transporte_mama + taxi + higiene_personal + recrativity + FOOD;
  const remainingBalance = earnings - expenses;
  
  // display results on the interface
  resultsDiv.innerHTML = `Your total expenses are: $${expenses.toFixed(2)}<br>Your remaining balance is: $${remainingBalance.toFixed(2)}`;
}

// add event listener to the "Calculate" button
calculateButton.addEventListener('click', calculateExpenses);
