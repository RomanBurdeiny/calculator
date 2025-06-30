export const handleClear = (state) => {
  state.current = '';
  state.prev = '';
  state.operator = null;
  state.resultDisplayed = false;
};
