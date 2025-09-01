export const handleCubeRoot = (state) => {
  if (state.current) {
    state.current = (state.current ** (1 / 3)).toString();
  }
};
