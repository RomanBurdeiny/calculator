export const handleExponentiation = (state) => {
  if (state.current) {
    state.current = (10 ** state.current).toString();
  }
};
