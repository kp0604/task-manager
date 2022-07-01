import React from "react";
import TaskList from "./TaskList";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="flex-grow-1 h-100 bg-light" >
      <Row className="h-100">
        <Col md={12} lg={3} className="h-100">
          <TaskList listName={"open tasks"} status={"OPEN"}/>
        </Col>
        <Col md={12} lg={3}>
          <TaskList listName={"inprogress tasks"} status={"INPROGRESS"}/>
        </Col>
        <Col md={12} lg={3}>
          <TaskList listName={"completed tasks"} status={"COMPLETE"}/>
        </Col>
        <Col md={12} lg={3}>
          <TaskList listName={"archived tasks"} status={"ARCHIVE"}/>
        </Col>
      </Row>
    </Container>
  );
}
