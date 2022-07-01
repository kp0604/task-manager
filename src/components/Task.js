import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Dropdown, Badge } from "react-bootstrap";
import Subt from "./Subt";
import { useDispatch, useSelector } from "react-redux";
import { edit, del } from "../Redux/tasksSlice";

const Task = ({ taskObj }) => {
  const tasksDb = useSelector((state) => state.tasks);

  const [show, setShow] = useState(false);
  const [done, setdone] = useState(0);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e, status) => {
    e.preventDefault();
    dispatch(edit({ task: { ...taskObj.task, status } }));
  };

  useEffect(() => {
    setdone(0);
    const t = tasksDb.filter((task, idx) => idx === taskObj.id);
    t[0].subt.forEach((task, idx) =>
      task.isDone === true ? setdone((prev) => prev + 1) : null
    );
  }, [tasksDb]);

  return (
    <Card text="dark" className="p-0 bg-white" key={taskObj.id}>
      <Card.Header className="p-2 d-flex justify-content-between bg-white">
        <Card.Title
          className="fs-6 m-0 text-capitalize w-100 my-auto px-2 py-3"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        >
          {taskObj.task.title}
        </Card.Title>
        <Button
          className="border-white bg-white text-danger p-0 me-1"
          size="sm"
          onClick={() => dispatch(del({ uid: taskObj.task.uid }))}
        >
          <i class="bi bi-trash m-0 fs-5"></i>
        </Button>
      </Card.Header>
      <Card.Body className="py-2 px-3">
        <Badge pill bg="dark">
          Subtasks - {done}/{taskObj.task.subt.length}
        </Badge>
      </Card.Body>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="px-3 py-2 fs-6">
          <Modal.Title className="text-capitalize">
            {taskObj.task.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <p className="my-1 fs-6">
              <span className="fw-bold">Created at : </span>
              <span className="">{taskObj.task.createdAt}</span>
            </p>
            <Dropdown align="end">
              <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, "INPROGRESS")}
                  className="mt-1"
                >
                  Inprogress
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, "COMPLETE")}
                  className="mt-1"
                >
                  Complete
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, "ARCHIVE")}
                  className="mt-1"
                >
                  Archive
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>{" "}
          </div>
          <p className="mt-2 fw-bold">Description</p>
          <p className="border border-dark p-2 mx-1 text-capitalize">
            {taskObj.description}
          </p>
          <p className="mt-5 fw-bold">Subtasks</p>
          <Subt taskObj={taskObj.task} />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default Task;
