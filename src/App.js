import React from "react";
import Main from "./Components/ReduxInfo/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import StudentActionReducer from "./Store/MyReducer";

let myStudentStore = createStore(StudentActionReducer);

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={myStudentStore}>
          <Main></Main>
        </Provider>
      </div>
    );
  }
}

export default App;
