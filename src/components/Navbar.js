import React, { useState } from "react";
import { Container, Navbar, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faBarsProgress } from "@fortawesome/free-solid-svg-icons";
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
        
        backgroundColor: "teal" ,
        // backgroundImage:  
        // `linear-gradient(to right, #00b09b, #96c93d)`
    
    
    }}
    >
      <Container>
        <Navbar.Brand>
          <FontAwesomeIcon icon={faBarsProgress} className="me-2" />
          TaskBoard
        </Navbar.Brand>
        <Button variant="light" onClick={handleShow} size="sm">
          <FontAwesomeIcon icon={faAdd} className="me-2" />
          Create
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
