export const handlePercent = (state) => {
  if (state.current && state.prev && state.operator) {
    state.current = ((state.prev * state.current) / 100).toString();
  } else if (state.current) {
    state.current = (state.current / 100).toString();
  }
};
