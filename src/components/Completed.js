import { React, useEffect, useState } from "react";
import TaskC from "./TaskC";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import empty from "./empty.png";

const Completed = () => {
  const TaskCom = useSelector((state) => state.Completed);
  const [taskC, settaskC] = useState([{ title: "ii" }]);

  useEffect(() => {
    if (TaskCom.length > 10) {
      settaskC(TaskCom.slice(0, 10));
    } else {
      settaskC(TaskCom.slice(0, TaskCom.length));
    }
  }, [TaskCom]);

  console.log(taskC);

  return (
    <Container style={{ height: "75vh" }}>
      <div className="p-1 text-center bg-success text-white my-3">
        <h4>Completed Tasks</h4>
      </div>
      <div className="taskW px-3">
        <Row className="overflow-auto h-100 " id="x">
          {taskC.length !== 0 ? (
            taskC.map((task, idx) => (
              <Col lg={6} className="my-2">
                <TaskC
                  title={task.title}
                  date={task.date}
                  desc={task.desc}
                  idx={idx}
                />
              </Col>
            ))
          ) : (
            <div className="d-flex flex-column  align-items-center">
              <h4>Empty List...</h4>
              <img
                alt="img.png"
                src={empty}
                height="300px"
                width="300px"
                className="my-4"
              ></img>
            </div>
          )}
        </Row>
      </div>
    </Container>
  );
};

export default Completed;
