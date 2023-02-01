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
} from "@chakra-ui/react";
import React from "react";
import { FcSearch } from "react-icons/fc";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");
  return (
    <Box>
      {isLargerThan1280 ? (
        //   Laptop
        <Box bgColor={"purple.600"}>
          <Flex justifyContent={"space-between"}>
            {/* Box  */}
            <Box pl={"20px"}>
              <Image
                width={{ base: "50px", md: "80px", lg: "80px" }}
                src="https://i.postimg.cc/9MtvQkP1/Pics-Art-02-01-12-13-00.png"
              />
            </Box>
            {/* Box 2  */}
            <Box>
              <InputGroup mt={2} size="xs" bgColor={"white"} borderRadius={"10px"}>
                <Input
                  pr={"130px"}
                  placeholder="Enter password"
                />
                <InputRightElement>
                  <Button bg={"none"} size="sm" _hover={{}} onClick={handleClick}>
                    <Icon as={FcSearch} w={4} h={4} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
            {/* Box 3  */}
            <Box>
              <Flex gap={"10px"} pr={"20px"}>
                  <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                    <Text fontSize={"13px"}>Login</Text>
                  </Button>
                  <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                  <Text fontSize={"13px"}>Sign In</Text>
                  </Button>
                  <Button size={"sm"} bg={"none"} _hover={{}} color={"white"}>
                    <Icon as={HiShoppingCart} />
                    <Text fontSize={"13px"}>Cart</Text>
                  </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        //   Mobile
        "smaller than 1280px"
      )}
    </Box>
  );
};

export default Navbar;
