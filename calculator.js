// Select the display element
let display = document.getElementById('display');

// Function to add a number to the display
const addDisplay = (number) => display.value += number;

// Function to clear the display
const clearDisplay = () => display.value = '';

// Function to calculate the expression in the display
const calculate = () => display.value = eval(display.value);
