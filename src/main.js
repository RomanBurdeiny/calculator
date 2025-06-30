import './styles.css';
import { handleClear } from './handlers/handleClear.js';
import { handleDecimal } from './handlers/handleDecimal.js';
import { handleNegate } from './handlers/handleNegate.js';
import { handlePercent } from './handlers/handlePercent.js';
import { handleOperator } from './handlers/handleOperator.js';
import { handleEqual } from './handlers/handleEqual.js';

document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const keys = document.querySelector('.calculator-keys');

  const state = {
    current: '',
    prev: '',
    operator: null,
    resultDisplayed: false,
    calculate() {
      const a = parseFloat(this.prev);
      const b = parseFloat(this.current);
      if (isNaN(a) || isNaN(b)) return '';
      switch (this.operator) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          return b !== 0 ? a / b : 'Error';
        default:
          return b;
      }
    },
  };

  const updateDisplay = () => {
    const { current, prev, operator } = state;
    if (current && operator && prev) {
      display.value = `${prev} ${operator} ${current}`;
    } else if (operator && prev && !current) {
      display.value = `${prev} ${operator}`;
    } else {
      display.value = current || prev || '0';
    }
  };

  keys.addEventListener('click', (event) => {
    const target = event.target;
    if (!target.matches('button')) return;

    const value = target.textContent;
    const action = target.dataset.action;

    if (!action) {
      if (state.resultDisplayed) {
        state.current = value;
        state.resultDisplayed = false;
      } else {
        state.current += value;
      }
    } else {
      switch (action) {
        case 'clear':
          handleClear(state);
          break;
        case 'decimal':
          handleDecimal(state);
          break;
        case 'negate':
          handleNegate(state);
          break;
        case 'percent':
          handlePercent(state);
          break;
        case 'operator':
          handleOperator(state, value);
          break;
        case 'equal':
          handleEqual(state);
          break;
      }
    }

    updateDisplay();
  });
});
