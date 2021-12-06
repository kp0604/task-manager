import { React, useState } from "react";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
  Col,
  Form,
  } from "react-bootstrap";

import { useDispatch } from "react-redux";

import { addsub } from "../Redux/actions";

const Subt = (props) => {
  const [subt, setSubt] = useState([]);
  const [stitle, setStitle] = useState("");
  const [adding, setadding] = useState(false);

  const dispatch = useDispatch();

  const handleReset = () => {
    setStitle("");
  };

  return (
    <Container className="py-2" key={props.id}>
      {adding ? (
        <>
          <Row className="my-1">
            {subt.map((st, idx) => (
              <Col md={6} className="my-1 " key={idx}>
                <InputGroup className="bg-white d-flex justify-content-between align-items-center rounded">
                  <InputGroup.Checkbox aria-label="Checkbox for following text input" />

                  <p className=" text-center m-auto">{st.title}</p>
                </InputGroup>
              </Col>
            ))}
          </Row>
        
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const s = { title: stitle, isDone: false };
              if (!(stitle === "")) {
                setSubt((subt) => [...subt, s]);
                console.log("subt", subt, stitle);
                handleReset();
              }
            }}
          >
            <InputGroup
              className="mb-3"
              onChange={(e) => setStitle(e.target.value)}
            >
              <FormControl
                placeholder="Add Subtasks..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                value={stitle}
              />
              <Button variant="primary" id="button-addon2" type="submit">
                +
              </Button>
            </InputGroup>
          </Form>
        </>
      ) : null}
      <Button
        variant="primary"
        id="button-addon2"
        onClick={() => {
          setadding((prev) => !prev);
          if (adding === true && subt.length!==0) {
            dispatch(addsub({ id: props.id, sub: subt, subAdd: true }));
            setSubt([])
          }
        }}
        className="p-1 fs-6 "
      >
        {adding ? "Done" : "Add Subtasks"}
      </Button>
    </Container>
  );
};

export default Subt;
