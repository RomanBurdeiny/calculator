export const handleSquareRoot = (state) => {
  if (state.current) {
    state.current = (state.current ** 0.5).toString();
  }
};
