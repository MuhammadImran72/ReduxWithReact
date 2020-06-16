import { combineReducers } from "redux";

let INTIAL_STATE = {
  showforms: false,
  id: -1,
  firstname: "",
  rollnumber: "",
  subject: "",
  StudentArray: [],
};

//   here reducer reduce the task into next level
let myActionReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_STUDENT":
      let id4 = state.id;
      let firstname4 = state.firstname;
      let rollnumber4 = state.rollnumber;
      let subject4 = state.subject;
      let updateStudentArray = [];
      if (id4 === -1) {
        id4 = Math.random();
        updateStudentArray = [
          ...state.StudentArray,
          {
            id: id4,
            firstname: firstname4,
            rollnumber: rollnumber4,
            subject: subject4,
          },
        ];
      } else {
        updateStudentArray = [...state.StudentArray];
        let index = updateStudentArray.findIndex((obj) => {
          return obj.id === id4;
        });
        updateStudentArray.splice(index, 1, {
          id: id4,
          firstname: firstname4,
          rollnumber: rollnumber4,
          subject: subject4,
        });
      }
      return {
        showforms: false,
        firstname: "",
        id: -1,
        rollnumber: "",
        subject: "",
        StudentArray: updateStudentArray,
      };

    case "SHOW_ADD_NEW_STUDENT":
      let addnewStudentArray = [...state.StudentArray];
      return {
        showforms: action.payload,
        id: -1,
        firstname: "",
        rollnumber: "",
        subject: "",
        StudentArray: addnewStudentArray,
      };

    case "SHOW_EDITE_FORM":
      let id5 = action.payload.id;
      let firstname5 = action.payload.firstname;
      let rollnumber5 = action.payload.rollnumber;
      let subject5 = action.payload.subject;
      let editeStudentArray = [...state.StudentArray];

      return {
        showforms: true,
        id: id5,
        firstname: firstname5,
        rollnumber: rollnumber5,
        subject: subject5,
        StudentArray: editeStudentArray,
      };

    case "DELETE_FORM":
      let id6 = action.payload.id;
      let removeStudentArrays = state.StudentArray.filter((obj) => {
        return obj.id !== id6;
      });

      return {
        showforms: false,
        id: -1,
        firstname: "",
        rollnumber: "",
        subject: "",
        StudentArray: removeStudentArrays,
      };

    case "SHOW_FORM":
      let newStudentArraysDisplay = [...state.StudentArray];
      return {
        showforms: action.payload,
        id: -1,
        firstname: "",
        rollnumber: "",
        subject: "",
        StudentArray: newStudentArraysDisplay,
      };

    case "FIRST_NAME":
      let newStudentArray1 = [...state.StudentArray];
      let id1 = state.id;
      let rollnumber1 = state.rollnumber;
      let subject1 = state.subject;
      return {
        showforms: true,
        id: id1,
        rollnumber: rollnumber1,
        subject: subject1,
        firstname: action.payload,
        StudentArray: newStudentArray1,
      };

    case "ROLL_NUMBER":
      let newStudentArray2 = [...state.StudentArray];
      let id2 = state.id;
      let firstname2 = state.firstname;
      let subject2 = state.subject;

      return {
        showforms: true,
        id: id2,
        firstname: firstname2,
        subject: subject2,
        rollnumber: action.payload,
        StudentArray: newStudentArray2,
      };

    case "SUBJECT":
      let newStudentArray3 = [...state.StudentArray];
      let id3 = state.id;
      let firstname3 = state.firstname;
      let rollnumber3 = state.rollnumber;
      return {
        showforms: true,
        id: id3,
        firstname: firstname3,
        rollnumber: rollnumber3,
        subject: action.payload,
        StudentArray: newStudentArray3,
      };

    default:
      return state;
  }
};
export default combineReducers({
  stduentObject: myActionReducer,
});
