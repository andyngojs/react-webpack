import { actions } from "./action";
export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case actions.ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case actions.DELETE_JOB:
      const newState = [...state.jobs];
      newState.splice(action.payload, 1);
      return {
        ...state,
        jobs: newState,
      };
    default:
      throw new Error("invalid action");
  }
};

export default reducer;
