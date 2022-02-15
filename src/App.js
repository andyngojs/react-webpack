import React, { useReducer, useRef, useContext } from "react";
import Content from "./Content";
import { setJob, addJob, deleteJob } from "./redux/action";
import reducer, { initState } from "./redux/reducer";
import { ThemeContext } from "./Context/ThemeContext";
import "./App.scss";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();
  const toggleContext = useContext(ThemeContext);

  const handleAddJob = () => {
    dispatch(addJob(state.job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div className={`container ${toggleContext.theme}`}>
      <h1>Todo</h1>
      <div>
        <input
          value={state.job}
          ref={inputRef}
          placeholder="Enter todo..."
          onChange={(e) => {
            dispatch(setJob(e.target.value));
          }}
        />
        <button onClick={handleAddJob}> Add </button>
      </div>
      <div>
        <ul>
          {state.jobs.map((job, index) => {
            return (
              <li key={index}>
                {job}
                <span
                  onClick={() => dispatch(deleteJob(index))}
                  style={{ marginLeft: "12px" }}
                >
                  {" "}
                  X
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      <hr></hr>

      <button onClick={toggleContext.handleTheme}>Toggle theme</button>
      <Content />
    </div>
  );
}
