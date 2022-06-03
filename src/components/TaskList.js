import { React } from "react";
import { Stack } from "react-bootstrap";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = ({listName,status,}) => {
  const tasksDb = useSelector((state) => state.tasks);
  const Tasks = tasksDb.length?tasksDb.filter((task) => task.status === status):[];

  return (
    <>
      <p className="p-1 text-center fs-6 text-uppercase my-3 bg-warning fw-bolder">
        {listName}
      </p>
      <Stack gap={3} className="overflow-auto">
        {Tasks.length ? (
          Tasks.map((task, id) => (
            <Task
              taskObj={{...task,id}}
            />
          ))
        ) : (
          <p>Empty List...</p>
        )}
      </Stack>
    </>
  );
};

export default TaskList;
