import { React, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../Redux/tasksSlice";
const TaskForm = ({ close }) => {
  let date = new Date();
  let createdAt = date.toUTCString();
  const dispatch = useDispatch();

  const [task, settask] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  useEffect(() => {
    let taskObj = {
      uid: Math.random().toString(36).slice(2),
      title: title,
      description: desc,
      createdAt: createdAt,
      subt: [],
      status: "OPEN",
    };
    settask(taskObj);
  }, [title, desc]);

  const handleReset = () => {
    settitle("");
    setdesc("");
    settask("");
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (!(title === "")) {
          dispatch(add(task));
          handleReset();
          close();
        } else {
          alert("Enter Task...");
        }
      }}
      onReset={() => {
        settitle("");
        setdesc("");
        settask("");
      }}
    >
      <Form.Group
        className="mb-3"
        controlId="exampleForm.ControlInput1"
        onChange={(e) => {
          settitle(e.target.value);
        }}
      >
        <Form.Label className="fs-5">Title :</Form.Label>
        <Form.Control type="text" placeholder="Task Title..." value={title} />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="Description..."
        onChange={(e) => {
          setdesc(e.target.value);
        }}
      >
        <Form.Label className="fs-5">Description :</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
