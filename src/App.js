import React, { useReducer, useRef } from "react";
import { setJob, addJob, deleteJob } from "./redux/action";
import { reducer, initState } from "./redux/reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const inputRef = useRef();

  const handleAddJob = () => {
    dispatch(addJob(state.job));
    dispatch(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div>
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
    </div>
  );
}
