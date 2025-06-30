export const handleDecimal = (state) => {
  if (state.resultDisplayed) {
    state.current = '0.';
    state.resultDisplayed = false;
  } else if (!state.current.includes('.')) {
    state.current += state.current ? '.' : '0.';
  }
};
