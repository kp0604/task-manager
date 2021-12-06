import { React,} from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Task from "./Task";
import TaskForm from "./TaskForm";
import { useSelector } from "react-redux";
import "../App.css";

const Newtask = () => {
  const Tasks = useSelector((state) => state.Local);
 
  console.log(Tasks);


  return (
    <Container >
      <Row>
        <Col lg={6} xs={12}>
          <div className="p-1 text-center bg-success text-white my-3 rounded">
            <h4>Add New Task</h4>
          </div>
          <TaskForm />
        </Col>
        
        <Col className="taskW" lg={6} md={12}>
          <div className="p-1 text-center bg-success text-white my-3  rounded">
            <h4>New-Task List</h4>
          </div>
          <div className="overflow-auto h-100 p-2" id="x">
            <Stack gap={3}>
              {Tasks.map((task, idx) => {
                if (task.subAdd === false) {
                  return (
                    <Task
                      title={task.title}
                      date={task.date}
                      desc={task.desc}
                      idx={idx}
                      key={idx}
                    />
                  );
                }
              })}
            </Stack>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Newtask;
