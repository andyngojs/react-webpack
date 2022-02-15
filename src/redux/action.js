export const actions = {
  SET_JOB: "set_job",
  ADD_JOB: "add_job",
  DELETE_JOB: "delete_job",
};

export const setJob = (payload) => {
  return {
    type: actions.SET_JOB,
    payload: payload,
  };
};

export const addJob = (payload) => {
  return {
    type: actions.ADD_JOB,
    payload: payload,
  };
};

export const deleteJob = (payload) => {
  return {
    type: actions.DELETE_JOB,
    payload: payload,
  };
};
