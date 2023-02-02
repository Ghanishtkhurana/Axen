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
import React from "react";
import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";
import { BsList } from "react-icons/bs";
import { TbTestPipe } from "react-icons/tb";
import { TbFirstAidKit } from "react-icons/tb";
import { RiVirusLine } from "react-icons/ri";
import { TbPlant2 } from "react-icons/tb";
import { RiHandHeartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sec = [
  {
    id: 1,
    txt: "LAB TESTS",
    links: "",
    icon: TbTestPipe,
  },
  {
    id: 2,
    txt: "CONSULT DOCTORS",
    links: "",
    icon: TbFirstAidKit,
  },
  {
    id: 3,
    txt: "COVID-19",
    links: "",
    icon: RiVirusLine,
  },
  {
    id: 4,
    txt: "AYURVEDA",
    links: "",
    icon: TbPlant2,
  },
  {
    id: 5,
    txt: "CARE PLAN",
    links: "",
    icon: RiHandHeartLine,
  },
];

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");
  return (
    <Box>
      {isLargerThan1280 ? (
        //   Laptop
        <Box zIndex={3} bgColor={"purple.600"} position={"fixed"} width={"100%"}> 
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
              <Flex  gap={"10px"} pr={"20px"}>
                <Link to={"/login"}>
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Text fontSize={"13px"}>Login</Text>
                </Button>
                </Link>
                <Link to={"/signin"}>
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Text fontSize={"13px"}>Sign In</Text>
                </Button>
                </Link>
                <Link to={"/cart"} >
                <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Icon as={HiShoppingCart} />
                  <Text fontSize={"13px"}>Cart</Text>
                </Button>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        //   Mobile
        <Box bgColor={"purple.600"}>
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
              <Box>
                <Image
                mt={1}
                  width={"80px"}
                  src="https://i.postimg.cc/90Zh1SDT/Axen.png"
                />
              </Box>
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
                          <Image mt={"-15px"} width={"100px"} src="https://i.postimg.cc/FsBp8Ffv/garfield-hello.gif" />
                        </Box>
                      </Flex>
                    </Flex>
                  </DrawerHeader>

                  <DrawerBody>
                    {/* Body  */}
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
