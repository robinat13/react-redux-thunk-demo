export const fetchData = (prevState = { data: "" }, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...prevState, data: action.payload };
    default:
      return prevState;
  }
};
