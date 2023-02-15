import { Box } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import AdminNav from "./AdminNav";

const order = async()=>{
  let toki = localStorage.getItem("token")
  const res = await axios.get(`${site}/admin/orders`,{
    headers : {
      "Content-Type" :"application/json" ,
      Authorization : toki
    }
  })
  let data = res.data
  return data
}

const Order = () => {
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    handleTheData()
  },[])

  const handleTheData = async()=>{
    setLoading(true)
    order().then((res)=>console.log(res))
  }
  return (
    <Box pt={10}>
      <AdminNav />

    </Box>
  );
};

export default Order;
