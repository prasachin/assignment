import React, { useState } from "react";

const Todoapp = () => {
  const [task, settask] = useState([]);
  const [curr, setcurr] = useState("");
  function Add() {
    settask([...task, curr]);
    setcurr("");
  }
  return (
    <div className="text-center">
      <input
        type="text"
        className="bg-gray-200"
        value={curr}
        onChange={(e) => setcurr(e.target.value)}
      />
      <button onClick={Add}>Add</button>
      <ul>
        {task.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todoapp;
