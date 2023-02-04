import axios from "axios"
import {ERRORMSG, LOGIN, LOGOUT, } from "./auth.type"

export const register = (creeds) => async(dispatch)=>{
    console.log("authAction",creeds)
    const res = await axios.post("https://adventurous-wasp-scrubs.cyclic.app/users/signin",creeds)
    console.log(res)
}

export const login = (creeds) =>async(dispatch)=>{
    try{
        const res = await axios.post("https://adventurous-wasp-scrubs.cyclic.app/users/login",creeds)
        return dispatch({type : LOGIN ,payload : res.data})
    }
    catch(err){
        return dispatch({type :  ERRORMSG, payload : err.response})
    }
}

export const logout = ()=>async(dispatch)=>{
    try{
        return dispatch({type : LOGOUT})
    }catch(err){
        console.log(err)
    }
}