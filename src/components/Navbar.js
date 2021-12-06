import React from "react";
import { Container, Navbar, DropdownButton, Dropdown } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Nabar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>Task-Manager</Navbar.Brand>
        <DropdownButton id="dropdown-basic-button" title="Task-Lists " variant="primary">
            <Dropdown.Item>
          <Link to="/">
              New Task
          </Link>
            </Dropdown.Item>
            <Dropdown.Item>
          <Link to="/inprogress">
              Inprogress
          </Link>
            </Dropdown.Item>
            <Dropdown.Item>
          <Link to="/completed">
              Completed
          </Link>
            </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/archived">Archived</Link>
          </Dropdown.Item>
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default Nabar;
