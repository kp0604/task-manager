import { React } from "react";
import TaskN from "./TaskN";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../App.css";

const Inprogress = () => {
  const Tasks = useSelector((state) => state.Local);

  console.log(Tasks);

  return (
    <Container style={{ height: "75vh" }}>
      <div className="p-1 text-center bg-success text-white my-3">
        <h4>Inprogress Tasks</h4>
      </div>
      <div className="taskW p-3">
        <Row className="overflow-auto h-100  " id="x">
          {Tasks.map((task, idx) => {
            console.log(task);
            if (task.subAdd === true && task.isCompleted === false) {
              return (
                <Col lg={6}>
                  <TaskN
                    title={task.title}
                    date={task.date}
                    desc={task.desc}
                    subt={task.subt}
                    idx={idx}
                  />
                </Col>
              );
            }
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Inprogress;
