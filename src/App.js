import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchData, setId } from "./actions";

import "./App.css";

function App() {
  const content = useSelector(state => state.fetchData);
  const id = useSelector(state => state.setId);

  const dispatch = useDispatch();

  useEffect(() => {});

  const getData = () => {
    return dispatch => {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/" + id)
        .then(response => {
          dispatch(fetchData(response.data));
        });
    };
  };

  console.log(getData());

  // const onFetchData = () => {
  //   dispatch(getData());
  // };

  const handleIdChange = e => {
    dispatch(setId(e.target.value));
  };

  return (
    <div>
      {content.data && (
        <ul>
          <li>{content.data.id}</li>
          <li>{content.data.title}</li>
        </ul>
      )}
      <input type="text" value={id} onChange={handleIdChange} />
      <button onClick={() => dispatch(getData())}>fetch data</button>
    </div>
  );
}

export default App;
