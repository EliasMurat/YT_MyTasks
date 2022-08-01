import "./TaskDetails.css";

import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

const TaskDetails = () => {
  const params = useParams();
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          recusandae suscipit aspernatur at voluptas sit ipsa quibusdam quam
          libero maxime nemo, voluptatibus expedita saepe dicta unde
          reprehenderit voluptate quidem omnis?
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
