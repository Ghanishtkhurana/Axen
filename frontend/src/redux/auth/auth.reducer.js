import { ERRORMSG, LOGIN, LOGOUT, SIGNIN } from "./auth.type";
let token = localStorage.getItem("token");

const initState = {
  isAuth: token ? true : false,
  token: !!token,
  name : ""
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        name : action.payload.name
      };
    }
   
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
