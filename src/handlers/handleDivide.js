export const handleDivide = (state) => {
  if (state.current) {
    state.current = (1 / state.current).toString();
  }
};
