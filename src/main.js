import './styles.css';
import { handleClear } from './handlers/handleClear.js';
import { handleDecimal } from './handlers/handleDecimal.js';
import { handleNegate } from './handlers/handleNegate.js';
import { handlePercent } from './handlers/handlePercent.js';
import { handleOperator } from './handlers/handleOperator.js';
import { handleEqual } from './handlers/handleEqual.js';
import { handleDouble } from './handlers/handleDouble.js';
import { handleTriple } from './handlers/handleTriple.js';
import { handleExponentiation } from './handlers/handleExponentiation.js';
import { handleSquareRoot } from './handlers/handleSquareRoot.js';
import { handleCubeRoot } from './handlers/handleCubeRoot.js';
import { handleDivide } from './handlers/handleDivide.js';
import { handleFactorial } from './handlers/handleFactorial.js';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  root.setAttribute('data-theme', 'dark');
  const display = document.getElementById('display');
  const keys = document.querySelector('.calculator-keys');
  const toggle = document.getElementById('toggle');

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

  toggle.addEventListener('click', () => {
    root.setAttribute('data-theme', !toggle.checked ? 'dark' : 'light');
  });

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
  updateDisplay();

  keys.addEventListener('click', (event) => {
    const target = event.target;
    console.log(target);
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
        case 'double':
          handleDouble(state);
          break;
        case 'triple':
          handleTriple(state);
          break;
        case 'exponentiation':
          handleExponentiation(state);
          break;
        case 'squareRoot':
          handleSquareRoot(state);
          break;
        case 'cubeRoot':
          handleCubeRoot(state);
          break;
        case 'divide':
          handleDivide(state);
          break;
        case 'factorial':
          handleFactorial(state);
          break;
      }
    }

    updateDisplay();
  });
});
