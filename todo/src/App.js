import React, { useReducer } from "react";

import reducer from "./reducers/index";

import "./css/App.css"

import Title from "./components/Title";
import InputForm from "./components/InputForm";
import Todos from "./components/Todos"

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="container">
      <Title />
      <InputForm state={state} dispatch={dispatch} />
      <Todos state={state} dispatch={dispatch} />
    </div>
  );
};

export default App;
