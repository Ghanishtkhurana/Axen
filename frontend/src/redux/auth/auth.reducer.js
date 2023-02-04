import { ERRORMSG, LOGIN, LOGOUT, SIGNIN } from "./auth.type";
let token = localStorage.getItem("token");

const initState = {
  isAuth: token ? true : false,
  token: !!token,
  // message: "Enter details",
  // status: "warning",
  signMsg: "",
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        message: action.payload.msg,
        status: "success",
      };
    }
    case ERRORMSG:
      return {
        ...state,
        // message: action.payload.data,
        status: "error",
      };
    case SIGNIN:
      return {
        ...state,
        // signMsg: action.payload,
      };
    case LOGOUT: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
