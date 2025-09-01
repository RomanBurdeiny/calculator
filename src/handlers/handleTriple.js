export const handleTriple = (state) => {
  if (state.current) {
    state.current = (state.current * state.current * state.current).toString();
  }
};
