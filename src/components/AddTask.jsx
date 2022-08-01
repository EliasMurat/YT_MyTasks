import "./AddTask.css";

import React, { useState } from "react";

import Button from "./Button";

const AddTask = ({ handleTaskAddition }) => {
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e) => {
    setInputData(e.target.value);
  };

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData);
    setInputData("");
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        type="text"
        value={inputData}
        onChange={handleInputChange}
      />
      <div className="add-task-button">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
      </div>
    </div>
  );
};

export default AddTask;
