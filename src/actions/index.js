export const fetchData = payload => {
  return {
    type: "FETCH_DATA",
    payload
  };
};

export const setId = payload => {
  return {
    type: "SET_ID",
    payload
  };
};
