export const handleNegate = (state) => {
  if (state.current) {
    state.current = (state.current * -1).toString();
  }
};
