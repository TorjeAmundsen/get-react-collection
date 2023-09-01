import { useEffect, useState } from "react";

interface Task {
  description: string;
  isDone: boolean;
  assignedTo: string;
  doneDate: DateConstructor | undefined;
  editMode: boolean;
}

function TaskPlannerBase() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      description: "Add a task...",
      isDone: false,
      assignedTo: "N/A",
      doneDate: undefined,
      editMode: false,
    },
  ]);
  const [numTasks, setNumTasks] = useState(1);

  useEffect(() => {}, [numTasks]);

  const handleClick = () => {
    setTasks((prev) => {
      prev.push({
        description: "New task",
        isDone: false,
        assignedTo: "Dummy",
        doneDate: undefined,
        editMode: false,
      });
      console.log(prev);
      return prev;
    });
    setNumTasks((prev) => prev + 1);
  };

  return (
    <>
      <div className="center">
        TaskPlanner is under construction.
        {tasks.map((task) => (
          <div>
            {task.description}, {task.assignedTo}
          </div>
        ))}
      </div>
      <div className="taskplanner-set-task">
        <button onClick={handleClick}>Add a generated task</button>
      </div>
    </>
  );
}

export default TaskPlannerBase;
