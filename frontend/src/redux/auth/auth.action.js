import axios from "axios"
import PopUp from "../../components/Popup"
import {ERRORMSG, LOGIN, } from "./auth.type"

export const register = (creeds) => async(dispatch)=>{
    console.log("authAction",creeds)
    const res = await axios.post("http://localhost:8080/users/signin",creeds)
    console.log(res)
}

export const login = (creeds) =>async(dispatch)=>{
    try{
        const res = await axios.post("http://localhost:8080/users/login",creeds)
        // PopUp(res.data.msg)
        // PopUp(res.data.msg)
        console.log(res.data)
        // alert(res.data.msg)
        return dispatch({type : LOGIN ,payload : res.data})
    }
    catch(err){
        console.log(err.response)
        return dispatch({type :  ERRORMSG, payload : err.response})
    }
    
}
