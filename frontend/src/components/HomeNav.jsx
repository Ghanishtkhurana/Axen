import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeNav = () => {
  return (
    <Box boxShadow={"md"} pb={2}>
      <Flex justifyContent={"space-between"} ml={{base : 10,md:10,lg:100}} mr={{base : 10,md:10,lg:100}}>
        <Box>
          <Image
            width={"50px"}
            src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
          />
          <Text fontSize={"10px"} fontWeight={500}>
            Grocery
          </Text>
        </Box>
        <Link to={"/mobile"}>
        <Box>
          <Image
            width={"50px"}
            src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"
          />
          <Text fontSize={"10px"} fontWeight={500}>
            Mobile
          </Text>
        </Box>
        </Link>
        <Box>
          <Image
            width={"50px"}
            src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
          />
          <Text fontSize={"10px"} fontWeight={500}>
            Fashion
          </Text>
        </Box>
        <Box>
          <Image
            width={"50px"}
            src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
          />
          <Text fontSize={"10px"} fontWeight={500}>
            Electronics
          </Text>
        </Box>
        <Box>
          <Image
            width={"50px"}
            src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
          />
          <Text fontSize={"10px"} fontWeight={500}>
            Home
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HomeNav;
