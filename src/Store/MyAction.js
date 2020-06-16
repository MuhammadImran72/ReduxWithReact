export const saveStudent = (obj) => {
  return { type: "SAVE_STUDENT", payload: obj };
};

export const addNewStudent = (obj) => {
  return { type: "SHOW_ADD_NEW_STUDENT", payload: obj };
};

export const editeStudent = (obj) => {
  return { type: "SHOW_EDITE_FORM", payload: obj };
};

export const deleteStudent = (obj) => {
  return { type: "DELETE_FORM", payload: obj };
};

export const showformsview = (obj) => {
  return { type: "SHOW_FORM", payload: obj };
};

export const setFirstName = (obj) => {
  return { type: "FIRST_NAME", payload: obj };
};

export const setRollNumber = (obj) => {
  return { type: "ROLL_NUMBER", payload: obj };
};

export const setSubject = (obj) => {
  return { type: "SUBJECT", payload: obj };
};

// action are basically set of functions
