
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
    display.value = eval(display.value.replace('√', 'Math.sqrt').replace('^', '**'));
  } catch (e) {
    display.value = 'Error';
  }
}