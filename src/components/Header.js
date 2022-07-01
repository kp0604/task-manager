import React, { useState } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import TaskForm from "./TaskForm";

const Header = () => {
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
        <Navbar.Brand className="fs-4">
          <i class="bi bi-kanban-fill"></i> TaskBoard
        </Navbar.Brand>
        <Button
          variant="light"
          onClick={handleShow}
          size="md"
          className="text-dark"
        >
          <i class="bi bi-plus-circle-fill me-2"></i> Create
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

export default Header;
