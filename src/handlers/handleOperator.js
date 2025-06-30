export const handleOperator = (state, value) => {
  if (state.operator && state.current && state.prev) {
    const result = state.calculate();
    state.prev = isNaN(result) ? 'Error' : result.toString();
    state.current = '';
  } else if (state.current) {
    state.prev = state.current;
    state.current = '';
  }
  state.operator = value;
  state.resultDisplayed = false;
};
