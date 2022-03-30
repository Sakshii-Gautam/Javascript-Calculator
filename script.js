const input = document.getElementById('input');

//function to get input from the buttons and display it to the input field
function display(value) {
  input.value += value;
}

//function that evaluates the digits and returns result
function calculate() {
  let result = eval(input.value);
  input.value = result;
}

//function thatclears the input
function clr() {
  input.value = '';
}
