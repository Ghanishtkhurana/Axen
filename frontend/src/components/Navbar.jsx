import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Icon,
  useMediaQuery,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { GiWashingMachine } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { RiHandHeartLine } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/auth.action";
import { site } from "./backend";
import axios from "axios";

const Sec = [
  {
    id: 1,
    txt: "Grocery",
    links: "/grocery",
    icon: GiWashingMachine,
  },
  {
    id: 2,
    txt: "Mobile",
    links: "/mobile",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    txt: "Fashion",
    links: "/fashion",
    icon: GiClothes,
  },
  {
    id: 4,
    txt: "Electronics",
    links: "/moniter",
    icon: FiMonitor,
  },
  {
    id: 5,
    txt: "Home",
    links: "/homeapp",
    icon: RiHandHeartLine,
  },
];



const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");
  const { isAuth,token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  console.log(isAuth)

  useEffect(()=>{
  },[])

  // console.log(data.length)
  const handleTheLogout = () => {
    dispatch(logout());
    console.log("logout")
  };
  return (
    <Box>
      {isLargerThan1280 ? (
        //   Laptop
        <Box
          zIndex={3}
          bgColor={"purple.600"}
          position={"fixed"}
          width={"100%"}
        >
          <Flex p={1} justifyContent={"space-between"} mr={10} ml={10}>
            {/* Box 1 */}
            <Flex gap={100}>
              <Box pl={"20px"}>
                <Link to={"/"}>
                  <Image
                    width={{ base: "50px", md: "80px", lg: "80px" }}
                    src="https://i.postimg.cc/90Zh1SDT/Axen.png"
                  />
                </Link>
              </Box>

              <Box>
                <InputGroup
                  mt={1}
                  size="xs"
                  bgColor={"white"}
                  borderRadius={"10px"}
                >
                  <Input pr={"250px"} placeholder="Enter password" />
                  <InputRightElement>
                    <Button
                      bg={"none"}
                      size="sm"
                      _hover={{}}
                      onClick={handleClick}
                    >
                      <Icon as={FcSearch} w={4} h={4} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
            {/* Box 3  */}
            <Box>
              <Flex gap={"10px"} pr={"20px"}>
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Link to={"/login"}>
                    {!isAuth && <Text fontSize={"13px"}>Login</Text>}
                  </Link>
                  {isAuth && (
                    <Text onClick={handleTheLogout} fontSize={"13px"}>
                      Logout
                    </Text>
                  )}
                </Button>
                <Link to={"/signin"}>
                  <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                    <Text fontSize={"13px"}>Sign In</Text>
                  </Button>
                </Link>
                <Link to={"/cart"}>
                  <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                    <Icon as={HiShoppingCart} />
                    <Text fontSize={"13px"}>Cart </Text>
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        //   Mobile
        <Box position={"fixed"} width={"100%"} bgColor={"purple.600"}>
          <Flex justifyContent={"space-between"}>
            {/* box 1  */}
            <Flex>
              <Box mt={"7px"} ml={"7px"} mr={"3px"}>
                <Icon
                  onClick={onOpen}
                  as={BsList}
                  color={"white"}
                  w={6}
                  h={6}
                />
              </Box>
              <Link to={"/"}>
                <Box>
                  <Image
                    mt={1}
                    width={"80px"}
                    src="https://i.postimg.cc/90Zh1SDT/Axen.png"
                  />
                </Box>
              </Link>
            </Flex>
            {/* Box 2 */}
            <Flex>
              <Button size={"md"} bg={"none"} _hover={{}} color={"white"}>
                <Text>Login</Text>
              </Button>
              {/* Drawer  */}
              <Button
                size={"md"}
                bg={"none"}
                mt={"2px"}
                _hover={{}}
                color={"white"}
              >
                <Icon as={HiShoppingCart} w={6} h={6} />
              </Button>
              <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
              >
                <DrawerOverlay />
                <DrawerContent>
                  {/* <DrawerCloseButton border={"none"} /> */}
                  <DrawerHeader>
                    <Flex
                      gap={2}
                      borderBottom={"1px"}
                      borderColor={"gray.400"}
                      pb={2}
                    >
                      <Box>
                        <Image
                          borderRadius={100}
                          width={"70px"}
                          src="https://i.pinimg.com/564x/91/29/bd/9129bdad4daea281df7370da96e6e011.jpg"
                        />
                      </Box>
                      {/* User details  */}
                      <Flex m={1}>
                        <Box>
                          <Box>Hey</Box>
                          <Box>
                            <Text>UserName</Text>
                          </Box>
                        </Box>
                        <Box>
                          <Image
                            mt={"-15px"}
                            width={"100px"}
                            src="https://i.postimg.cc/FsBp8Ffv/garfield-hello.gif"
                          />
                        </Box>
                      </Flex>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    {/* Body  */}
                    <Flex
                      flexDirection={"column"}
                      gap={8}
                      borderBottom={"2px"}
                      pb={10}
                      borderColor={"gray.300"}
                    >
                      {Sec.map((post) => (
                        <Link to={post.links} key={post.id}>
                          <Flex flexDirection={"row"} gap={6}>
                            <Icon as={post.icon} w={6} h={6} />
                            <Text fontSize={"18px"}>{post.txt}</Text>
                          </Flex>
                        </Link>
                      ))}
                    </Flex>
                    <Flex mt={5} alignItems={"end"}>
                      <Button
                        m={1}
                        size="md"
                        _hover={{}}
                        bgColor={"purple.600"}
                      >
                        <Text color={"white"} fontSize={"13px"}>
                          Sign-In
                        </Text>
                      </Button>
                      <Button
                        m={1}
                        size="md"
                        _hover={{}}
                        bgColor={"purple.600"}
                      >
                        <Text color={"white"} fontSize={"13px"}>
                          Login
                        </Text>
                      </Button>
                      <Button
                        m={1}
                        size="md"
                        _hover={{}}
                        bgColor={"purple.600"}
                      >
                        <Text color={"white"} fontSize={"13px"}>
                          Cart
                        </Text>
                      </Button>
                      <Button
                        m={1}
                        size="md"
                        _hover={{}}
                        bgColor={"purple.600"}
                      >
                        <Icon color={"white"} as={ImCross} />
                      </Button>
                    </Flex>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </Flex>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
