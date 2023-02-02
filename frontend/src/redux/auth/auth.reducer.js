import {LOGIN} from "./auth.type"
let token = localStorage.getItem("token")

const initState = {
    isAuth : false,
    token : !!token
}

const authReducer = (state=initState,action)=>{
    switch(action.type){
        case LOGIN : {
            localStorage.setItem("token",action.payload)
            return {
                ...state,
                isAuth : true ,
            }
        }
        default : return state
    }
}

export default authReducer