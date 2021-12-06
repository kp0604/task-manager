import React from "react";
import { Card,Button } from "react-bootstrap";
import SubtN from "./SubtN";

const TaskN = (props) => {
  return (
    <Card bg="warning" text="dark" className="p-0">
      <Card.Header className="p-2 d-flex justify-content-between align-items-center">
        <Card.Title className="fs-5 m-0">{props.title}</Card.Title>
        <Button variant="danger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash-fill"
            viewBox="0 0 16 16"
          >
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
          </svg>
        </Button>
      </Card.Header>

      <Card.Body className="p-2">
        <Card.Text className="fs-6 ">
          <h6 className="my-1 ">Created at : {props.date}</h6>
          {props.desc}
        </Card.Text>
      </Card.Body>

      <Card.Footer className="p-0">
        <SubtN taskid={props.idx} sub={props.subt} />
      </Card.Footer>
    </Card>
  );
};

export default TaskN;
