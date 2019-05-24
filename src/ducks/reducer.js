const initialState = {
  username: "",
  id: "",
  profile_pic: "",
  password: ""
};

const UPDATE_USER_ID = "UPDATE_USER_ID";
const UPDATE_USER_NAME = "UPDATE_USER_NAME";
const UPDATE_PASSWORD = "UPDATE_PASSWORD";

const UPDATE_PROFILE_PIC = "UPDATE_PROFILE_PIC";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER_ID:
      return Object.assign({}, state, { id: action.payload });
    case UPDATE_USER_NAME:
      return Object.assign({}, state, { username: action.payload });
    case UPDATE_PASSWORD:
      return Object.assign({}, state, { password: action.payload });
    case UPDATE_PROFILE_PIC:
      return Object.assign({}, state, { profile_pic: action.payload });
    default:
      return state;
  }
}

export function updateUserId(id) {
  return {
    type: UPDATE_USER_ID,
    payload: id
  };
}

export function updateUserName(username) {
  return {
    type: UPDATE_USER_NAME,
    payload: username
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    payload: password
  };
}

export function updateProfilePic(profile_pic) {
  return {
    type: UPDATE_PROFILE_PIC,
    payload: profile_pic
  };
}
export default reducer;
