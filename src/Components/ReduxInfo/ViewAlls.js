import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editeStudent, deleteStudent } from "../../Store/MyAction";
import { Button } from "react-bootstrap";

class ViewAlls extends React.Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th> SR</th>
                  <th> Name</th>
                  <th> Roll #</th>
                  <th> Subject</th>
                  <th> Option</th>
                </tr>
              </thead>
              <tbody>
                {this.props.StudentArray.map((obj, index) => {
                  return (
                    <tr key={obj.id}>
                      <td>{index + 1}</td>
                      <td>{obj.firstname}</td>
                      <td>{obj.rollnumber}</td>
                      <td>{obj.subject}</td>
                      <td>
                        {" "}
                        <Button
                          className="btn btn-success"
                          onClick={() => {
                            this.props.editeStudent(obj);
                          }}
                        >
                          {" "}
                          Update
                        </Button>
                        <Button
                          className="btn btn-danger"
                          onClick={() => {
                            this.props.deleteStudent(obj);
                          }}
                        >
                          {" "}
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

let checkStateToPros = (state) => {
  const { stduentObject } = state;
  return stduentObject;
};

let chechDispatchToPros = (dispatch) => {
  return bindActionCreators({ editeStudent, deleteStudent }, dispatch);
};

export default connect(checkStateToPros, chechDispatchToPros)(ViewAlls);
