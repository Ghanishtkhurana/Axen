import axios from "axios"
import {LOGIN} from "./auth.type"

export const register = (creeds) => async(dispatch)=>{
    console.log("authAction",creeds)
    const res = await axios.post("http://localhost:8080/users/signin",creeds)
    console.log(res.data)
}

