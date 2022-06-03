import React from "react";
import TaskList from "./TaskList";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container fluid className="h-75">
      <Row>
        <Col md={12} lg={3}>
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
