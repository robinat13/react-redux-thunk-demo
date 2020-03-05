export const setId = (prevState = "", action) => {
  switch (action.type) {
    case "SET_ID":
      return action.payload;
    default:
      return prevState;
  }
};
