const setUser = (user) => {
  return {
    type: "SETUSER",
    payload: user,
  };
};

export { setUser };
