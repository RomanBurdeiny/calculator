export const handleFactorial = (state) => {
  if (state.current) {
    for (let i = state.current - 1; i > 0; i--) {
      state.current = state.current * i;
    }
  } else {
    state.current = 1;
  }
};
