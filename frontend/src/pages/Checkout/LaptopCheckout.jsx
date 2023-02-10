import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'
import axios from 'axios'
import { site } from '../../components/backend'

const postOrder = async({cart,formstate})=>{
  let toki = localStorage.getItem("token");
  console.log(cart,formstate)
    let res = await axios.post(`${site}/admin/post_orders`,{cart,...formstate},{
      headers : {
        'Content-Type': 'application/json',
        Authorization : toki
      }
    })
    return res.data
}

const checkout = async()=>{
  let toki = localStorage.getItem("token");
  let res = await axios.delete(`${site}/carts`,{
    headers : {
      'Content-Type' : 'application/json' ,
      Authorization : toki
    }
  })
  return res.data
}
const initState = {
  name : "",
  mobileNumber : "" ,
  pinCode : "" ,
  houseNo : "" ,
  area : "" ,
  landmark : "" ,
  state : "" 
}

const LaptopCheckout = ({cart,isOpen,onOpen,onClose,cancelRef}) => {
  const [formstate,setFormstate] = useState(initState)
  console.log("User cart=>",cart)

  const handleTheChange = (e)=>{
    setFormstate({...formstate,[e.target.name] : e.target.value})
  }
  const handleTheCheckout = ()=>{
    postOrder({cart,formstate}).then((res)=>console.log(res))
    // await checkout().then((res)=>console.log(res))
  }
  return (
    <>
      <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Checkout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Input mt={1} mb={1} name="name" onChange={handleTheChange} placeholder='Name' />
            <Input mt={1} mb={1} name="mobileNumber" onChange={handleTheChange} placeholder='Mobile Number' />
            <Input mt={1} mb={1} name="pinCode" onChange={handleTheChange} placeholder='Pincode' />
            <Input mt={1} mb={1} name="houseNo" onChange={handleTheChange} placeholder='Flat, House no., Building, Company, Apartment' />
            <Input mt={1} mb={1} name="area" onChange={handleTheChange} placeholder='Area, Street, Sector, Village' />
            <Input mt={1} mb={1} name="landmark" onChange={handleTheChange} placeholder='Landmark' />
            <Input mt={1} mb={1} name="state" onChange={handleTheChange} placeholder='State' />
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button onClick={handleTheCheckout} bgColor={"purple.400"} color={"white"} ml={3}>
            Proceed to Checkout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default LaptopCheckout
