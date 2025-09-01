export const handleDouble = (state) => {
  if (state.current) {
    state.current = (state.current * state.current).toString();
  }
};
