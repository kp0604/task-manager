import React from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Form,
} from "react-bootstrap";

import { useDispatch } from "react-redux";
import { edit } from "../Redux/tasksSlice";

const Subt = ({ taskObj }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Row className="my-2">
        {taskObj.subt.length
          ? taskObj.subt.map((st, idx) => (
              <Col md={6} className="my-1 " key={idx}>
                <InputGroup className="bg-white d-flex justify-content-between align-items-center rounded border border-primary">
                  <InputGroup.Checkbox
                    aria-label="Checkbox for following text input"
                    checked={st.isDone}
                    onClick={() => {
                      let newSub = taskObj.subt.filter((sub, id) => id !== idx);
                      newSub.push({ ...st, isDone: !st.isDone });
                      dispatch(edit({task:{ ...taskObj, subt: newSub }}));
                    }}
                  />
                  <p className=" text-center m-auto">{st.title}</p>
                </InputGroup>
              </Col>
            ))
          : null}
      </Row>

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target[0].value !== "") {
            dispatch(
              edit({task:{
                ...taskObj,
                subt: [
                  ...taskObj.subt,
                  { title: e.target[0].value, isDone: false },
                ],
              }})
            );
            e.target[0].value = "";
          }
        }}
      >
        <InputGroup size="sm" className="my-4 boxShadow-none">
          <FormControl
            placeholder="Add Subtasks..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="primary" id="button-addon2" type="submit">
            <i class="bi bi-plus-lg fs-5"></i>
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default Subt;
