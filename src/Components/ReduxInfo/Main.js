import React from "react";
import { Button } from "react-bootstrap";
import ViewAlls from "./ViewAlls";
import AddEdite from "./AddEdite";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addNewStudent, showformsview } from "../../Store/MyAction";

class Main extends React.Component {
  ShowFormOnClicks = () => {
    this.props.showformsview(true);
  };
  render() {
    return (
      <div>
        <div className="container" style={{ paddingTop: "20px" }}>
          <div className="row">
            <div className="col-8 m-auto col-md-10 offset-md-1  col-sm-10  offset-sm-1 d-flex justify-content-around">
              <Button
                className="btn btn-success"
                onClick={this.ShowFormOnClicks}
              >
                {" "}
                OPEN{" "}
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => {
                  this.props.showformsview(false);
                }}
              >
                {" "}
                CLOSE{" "}
              </Button>
            </div>
          </div>

          {this.props.showforms ? <AddEdite /> : ""}
          {this.props.showforms ? "" : <ViewAlls />}
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
  return bindActionCreators({ addNewStudent, showformsview }, dispatch);
};

export default connect(checkStateToPros, chechDispatchToPros)(Main);
