import { React, useState } from "react";
import { Card, Button, Modal, Dropdown } from "react-bootstrap";
import Subt from "./Subt";
import { useDispatch } from "react-redux";
import { edit, del } from "../Redux/tasksSlice";

const Task = ({ taskObj }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e, uid, status) => {
    e.preventDefault();
    dispatch(edit({ ...taskObj, uid, status }));
  };
  return (
    <Card text="dark" className="p-0" key={taskObj.id}>
      <Card.Header className="p-2 d-flex justify-content-between bg-white">
        <Card.Title
          className="fs-6 m-0 text-capitalize w-100 my-auto"
          style={{ cursor: "pointer" }}
          onClick={handleShow}
        >
          {taskObj.title}
        </Card.Title>
        <Button
          className="bg-danger border-white"
          size="sm"
          onClick={() => dispatch(del({ uid: taskObj.uid }))}
        >
          <i class="bi bi-trash"></i>
        </Button>
      </Card.Header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="px-3 py-2 fs-6">
          <Modal.Title className="text-capitalize">{taskObj.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-between">
            <p className="my-1 fs-6">
              <span className="fw-bold">Created at : </span>
              <span className="">{taskObj.createdAt}</span>
            </p>
            <Dropdown align="end">
              <Dropdown.Toggle size="sm" variant="primary" id="dropdown-basic">
                Status
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, taskObj.uid, "INPROGRESS")}
                  className="mt-1"
                >
                  Inprogress
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, taskObj.uid, "COMPLETE")}
                  className="mt-1"
                >
                  Complete
                </Dropdown.Item>
                <Dropdown.Item
                  as="button"
                  onClick={(e) => handleClick(e, taskObj.uid, "ARCHIVE")}
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
          <Subt taskObj={taskObj} />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default Task;
