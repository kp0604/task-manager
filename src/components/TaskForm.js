import { React, useState,useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add } from "../Redux/actions";

const TaskForm = () => {
  let date = new Date();

  let createdAt = `${date.getDate()}-${date.getMonth()}-${date.getYear()} | ${date.getHours()} : ${date.getMinutes()}`;
  const dispatch = useDispatch();

  const [task, settask] = useState("");
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  
  useEffect(() => {
    let taskObj = { title: title, desc: desc, date: createdAt, subt: [], isCompleted: false, subAdd: false };
    settask(taskObj);
    
  }, [title,desc])

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
        console.log("inform");
       

        console.log(task);
          dispatch(add(task));
          console.log("formdisp");
          handleReset();
        }
        else {
          alert("Enter Task...")
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
          settitle(e.target.value.toUpperCase());
          
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
