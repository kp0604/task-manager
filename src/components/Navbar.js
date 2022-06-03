import React, { useState } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import TaskForm from "./TaskForm";

const Nabar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar
      sticky="top"
      variant="dark"
      style={{
        backgroundColor: "teal",
      }}
    >
      <Container>
        <Navbar.Brand>
          <i class="bi bi-kanban-fill"></i> TaskBoard
        </Navbar.Brand>
        <Button
          variant="light"
          onClick={handleShow}
          size="sm"
          className="text-dark"
        >
          <i class="bi bi-plus-square-fill fs-5"></i> Create
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <TaskForm close={handleClose}></TaskForm>
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  );
};

export default Nabar;
