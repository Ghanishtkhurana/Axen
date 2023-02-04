import React, { useEffect, useState } from 'react'
import { Box, Spinner, useMediaQuery } from "@chakra-ui/react";
import axios from "axios"
import { useParams } from 'react-router-dom';
import { site } from '../../components/backend';
import LaptopScreen from './LaptopScreen';
import MobileSinglepage from './MobileSinglepage';

const getData = async (id) => {
  const res = await axios.get(`${site}/products/${id}`);
  return res.data;
};

const SinglePage = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
  const {id} = useParams()
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    handleTheFetch()
  },[])
  const handleTheFetch = async()=>{
    setLoading(true)
    const mobile = await getData(id)
    setData(mobile)
    setLoading(false)
  }
  console.log(id)

  return (
    <Box pt={10}>
      {loading && <Spinner color='blue.500' w={20} h={20} mt={20} mb={20} />}
       {!loading && isLargerThan1280 ? <LaptopScreen data={data} /> : <MobileSinglepage />}
    </Box>
  )
}

export default SinglePage
