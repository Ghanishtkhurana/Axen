import {ERRORMSG, LOGIN} from "./auth.type"
let token = localStorage.getItem("token")

const initState = {
    isAuth : false,
    token : !!token,
    message : "Enter details",
    status : "warning"
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN : {
            localStorage.setItem("token",action.payload.token)
            return {
                ...state,
                isAuth : true ,
                message : action.payload.msg,
                status : "success"
            }
        }
        case ERRORMSG : return {
            ...state ,
            message : action.payload.data,
            status : "error"
        }
        default : return state
    }
}

export default authReducer