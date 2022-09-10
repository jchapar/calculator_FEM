const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const resetBtn = document.querySelector('[data-reset]');
const previousNumberEl = document.querySelector('[data-previous-number]');
const currentNumberEl = document.querySelector('[data-current-number]');
const calculatorEl = document.querySelector('#calculator');
const toggleStandard = document.querySelector('#theme-standard-toggle');
const toggleOne = document.querySelector('#theme-one-toggle');
const toggleTwo = document.querySelector('#theme-two-toggle');

// Theme Switch
toggleOne.addEventListener('change', (e) => {
  if (e.target.checked) {
    toggleStandard.checked = false;
    toggleTwo.checked = false;
    calculatorEl.classList.add('theme-one');
    calculatorEl.classList.remove('theme-two');
  }
});
toggleTwo.addEventListener('change', (e) => {
  if (e.target.checked) {
    toggleStandard.checked = false;
    toggleOne.checked = false;
    calculatorEl.classList.add('theme-two');
    calculatorEl.classList.remove('theme-one');
  }
});
toggleStandard.addEventListener('change', (e) => {
  if (e.target.checked) {
    toggleOne.checked = false;
    toggleTwo.checked = false;
    calculatorEl.classList.remove('theme-two');
    calculatorEl.classList.remove('theme-one');
  }
});

// Calculator Class
class Calculator {
  constructor(previousNumberEl, currentNumberEl) {
    this.previousNumberEl = previousNumberEl;
    this.currentNumberEl = currentNumberEl;
    this.clear();
  }

  // Clear input fields
  clear() {
    this.currentNumber = '';
    this.previousNumber = '';
    this.operation = undefined;
  }

  // Delete a number
  delete() {
    this.currentNumber = this.currentNumber.toString().slice(0, -1);
  }

  // Appending our number to the current number El
  appendNum(num) {
    if (num === '.' && this.currentNumber.includes('.')) return;
    this.currentNumber = this.currentNumber.toString() + num.toString();
  }
  // Choose Operation
  chooseOperation(operation) {
    if (this.currentNumber === '') return;
    if (this.previousNumber !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousNumber = this.currentNumber;
    this.currentNumber = '';
  }

  // Math functionality
  compute() {
    let computation;
    const previous = parseFloat(this.previousNumber);
    const current = parseFloat(this.currentNumber);
    if (isNaN(previous) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = previous + current;
        break;
      case '-':
        computation = previous - current;
        break;
      case '*':
        computation = previous * current;
        break;
      case '/':
        computation = previous / current;
        break;
      default:
        return;
    }
    this.currentNumber = computation;
    this.operation = undefined;
    this.previousNumber = '';
  }

  //Getting the display number
  getDisplayNumber(num) {
    const stringNum = num.toString();
    const integerDigits = parseFloat(stringNum.split('.')[0]);
    const decimalDigits = stringNum.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // Update the screen display
  updateDisplay() {
    this.currentNumberEl.innerText = this.getDisplayNumber(this.currentNumber);
  }
}

// Init new Calculator ================================================================
const calculator = new Calculator(previousNumberEl, currentNumberEl);

// Number Buttons
numberBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.appendNum(btn.innerText);
    calculator.updateDisplay();
  });
});

// Operation Buttons
operationBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    calculator.chooseOperation(btn.innerText);
    calculator.updateDisplay();
  });
});

// Reset Button
resetBtn.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
});

// Delete Button
deleteBtn.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
});

// Equals Button
equalsBtn.addEventListener('click', () => {
  calculator.compute();
  calculator.updateDisplay();
});
