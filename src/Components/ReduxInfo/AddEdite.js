import React from "react";
import { Form, Button } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  saveStudent,
  showformsview,
  setFirstName,
  setRollNumber,
  setSubject,
} from "../../Store/MyAction";

class AddEdite extends React.Component {
  onTextInputChangning = (event) => {
    switch (event.target.name) {
      case "firstname":
        this.props.setFirstName(event.target.value);
        break;
      case "rollnumber":
        this.props.setRollNumber(event.target.value);
        break;
      case "subject":
        this.props.setSubject(event.target.value);
        break;

      default:
        break;
    }
  };

  onFromsSubmitted = (event) => {
    event.preventDefault();
    this.props.saveStudent(this.props);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-7 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1">
              <Form onSubmit={this.onFromsSubmitted}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Name"
                    name="firstname"
                    onChange={this.onTextInputChangning}
                    value={this.props.firstname}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Roll #</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Roll Number"
                    name="rollnumber"
                    onChange={this.onTextInputChangning}
                    value={this.props.rollnumber}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter subject"
                    name="subject"
                    onChange={this.onTextInputChangning}
                    value={this.props.subject}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
let checkStateToPros = (state) => {
  const { stduentObject } = state;
  console.log(stduentObject);
  return stduentObject;
};

let chechDispatchToPros = (dispatch) => {
  return bindActionCreators(
    {
      saveStudent,
      showformsview,
      setFirstName,
      setRollNumber,
      setSubject,
    },
    dispatch
  );
};
export default connect(checkStateToPros, chechDispatchToPros)(AddEdite);
