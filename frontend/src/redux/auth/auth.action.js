import { Box, useToast } from "@chakra-ui/react"
import axios from "axios"
import { site } from "../../components/backend"
import {ERRORMSG, LOGIN, LOGOUT, } from "./auth.type"


export const register = (creeds) => async(dispatch)=>{
    console.log("authAction",creeds)
    const res = await axios.post(`${site}/users/signin`,creeds)
    console.log(res)
}

export const login = (creeds) =>async(dispatch)=>{
    try{
        const res = await axios.post(`${site}/users/login`,creeds)
        console.log(res)
        alert(res.data.msg)
        return dispatch({type : LOGIN ,payload : res.data})
    }
    catch(err){
        console.log(err.response.data)
        alert(err.response.data)
        // toast({
        //     title: err.response.data,
        //     status: 'info',
        //     position : "top",
        //     duration: 1500,
        //     isClosable: true,
        //   })
    }
}

export const logout = ()=>async(dispatch)=>{
    try{
        return dispatch({type : LOGOUT})
    }catch(err){
        console.log(err)
    }
}