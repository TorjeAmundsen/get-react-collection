import { useState } from "react";

function TaskPlannerBase() {
  const [tasksArray, setTasksArray] = useState([
    {
      description: "",
      isDone: false,
      doneDate: new Date(),
      editMode: false,
    },
  ]);
  return (
    <>
      <div className="center">TaskPlanner is under construction.</div>
    </>
  );
}

export default TaskPlannerBase;
