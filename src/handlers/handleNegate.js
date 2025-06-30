export const handleNegate = (state) => {
  if (state.current) {
    state.current = (parseFloat(state.current) * -1).toString();
  }
};
