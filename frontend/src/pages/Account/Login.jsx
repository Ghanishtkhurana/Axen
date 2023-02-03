import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React from 'react'
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux"
import { login } from "../../redux/auth/auth.action";

const initState = {
  email : "" ,
  password : ""
}
const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [msg,setMsg] = useState("")
  const [formstate,setFormstate] = useState(initState)
  const {isAuth,token,message,status} =useSelector((store)=>store.auth)
  const dispatch = useDispatch()
  console.log("Message =>",message)
  console.log("status =>",status)
  const toast = useToast()


  const handleTheChange = (e)=>{
    setFormstate({...formstate,[e.target.name] : e.target.value})
  }
  const handleTheSubmit = ()=>{
    console.log(formstate)
    dispatch(login(formstate))
    toast({
      position : "top" ,
      title: `${message}`,
      status: `${status}`,
      duration: 9000,
      isClosable: true,
    })
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input name='email' onChange={handleTheChange} type="email" />
            </FormControl>
            {/* Password  */}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <InputGroup size="md">
                <Input
                 name='password' onChange={handleTheChange}
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <Button _hover={{}} bg={"none"} size="sm" onClick={handleClick}>
                    {show ? (
                      <Icon color={"rgb(107,70,193)"} as={BsFillEyeSlashFill} />
                    ) : (
                      <Icon color={"rgb(107,70,193)"} as={BsFillEyeFill} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"rgb(107,70,193)"}>Forgot password?</Link>
              </Stack>
              <Button
                bg={"rgb(107,70,193)"}
                color={"white"}
                _hover={{
                  bg: "rgb(107,70,193)",
                }}
                onClick={handleTheSubmit}
              >
                Login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Login
