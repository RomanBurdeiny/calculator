export const handleEqual = (state) => {
  if (state.operator && state.current && state.prev) {
    const result = state.calculate();
    state.current = isNaN(result) ? 'Error' : +result.toFixed(4);
    state.prev = '';
    state.operator = null;
    state.resultDisplayed = true;
  }
};
