export const handlePercent = (state) => {
  if (state.current && state.prev && state.operator) {
    const base = parseFloat(state.prev);
    const percent = parseFloat(state.current);
    state.current = ((base * percent) / 100).toString();
  } else if (state.current) {
    state.current = (parseFloat(state.current) / 100).toString();
  }
};
