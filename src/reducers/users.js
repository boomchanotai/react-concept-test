const user = (state = null, action) => {
  switch (action.type) {
    case "SETUSER":
      return action.payload;
    default:
      return state;
  }
};

export default user;
