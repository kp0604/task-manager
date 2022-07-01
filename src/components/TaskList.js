import React from "react";
import { Stack } from "react-bootstrap";
import Task from "./Task";
import { useSelector } from "react-redux";

const TaskList = ({ listName, status }) => {
  const tasksDb = useSelector((state) => state.tasks);
  const Tasks = tasksDb.length
    ? tasksDb.filter((task) => task.status === status)
    : [];

  return (
    <div className="d-flex flex-column h-100">
      <p className="py-1 px-2 fs-6 text-uppercase bg-warning my-3 fw-bold mt-10">
        {listName}
      </p>
      {Tasks.length ? (
        <Stack gap={4} className="overflow-auto">
          {Tasks.map((task, id) => (
            <Task key={id} taskObj={{ task: task, id }} />
          ))}
        </Stack>
      ) : (
        <div className="mt-4">
          <p className="display-1 text-center">
            <i class="bi bi-list-task"></i>
          </p>
          <p className="text-center fs-5 mt-4">Empty List ...</p>
        </div>
      )}
    </div>
  );
};

export default TaskList;
