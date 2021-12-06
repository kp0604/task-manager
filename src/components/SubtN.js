import { React} from "react";
import {
  InputGroup,
  Row,
  Container,
  Col,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { togDone } from "../Redux/actions";

const SubtN = (props) => {
  const dispatch = useDispatch();
  const handleCheckclick = (taskid, idx) => {
    dispatch(togDone({ taskid, idx }));
  };

  return (
    <Container>
      <Row className="my-1">
        {props.sub.map((st, idx) => (
          <Col md={4} className="my-1 ">
            <InputGroup className="bg-white d-flex justify-content-between align-items-center rounded">
              <InputGroup.Checkbox
                aria-label="Checkbox for following text input"
                onClick={() => handleCheckclick(props.taskid, idx)}
              />
              <p className=" text-center m-auto ">{st.title}</p>
            </InputGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SubtN;
