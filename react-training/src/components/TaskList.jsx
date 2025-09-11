import React from "react";

const TaskList = (props) => {
  return (
    <div>
      {props.code.map((value) => (
        <p>{value}</p>
      ))}
    </div>
  );
};

export default TaskList;
