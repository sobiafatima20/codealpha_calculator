
const display = document.getElementById('display');

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function appendToDisplay(value) {
  display.value += value;
}

function calculateResult() {
  try {
    let expression = display.value;

    // Replace square root symbols with Math.sqrt()
    expression = expression.replace(/√(\d+)/g, 'Math.sqrt($1)');

    // Replace power symbols (^) with exponentiation (**)
    expression = expression.replace(/\^/g, '**');

    // Evaluate the expression
    display.value = eval(expression);
  } catch (e) {
    display.value = 'Error';
  }
}
