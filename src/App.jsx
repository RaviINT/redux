import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addData, buy_cake } from "./redux/actions/action";
import { make_cake } from "./redux/actions/action";
function App() {
  const [text, setText] = useState("");
  const { noOfCake, test_data } = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log("test_data-->", test_data);
  const handleAddData = () => {
    dispatch(addData(text));
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAddData}>Press me</button>
      </div>
    </>
  );
}

export default App;
