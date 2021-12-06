import { React } from "react";
import TaskN from "./TaskN";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import "../App.css";
import empty from "./empty.png";

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
          {Tasks.length !== 0 ? (
            Tasks.map((task, idx) => {
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
            })
          ) : (
            <div className="d-flex flex-column align-items-center">
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

export default Inprogress;
