import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NormalNav = () => {
  return (
    <div>
      <Box boxShadow={"md"} pb={2} pt={2}>
        <Flex justifyContent={"space-between"} ml={{base : 10,md:10,lg:100}} mr={{base : 10,md:10,lg:100}}>
          <Box>
            <Text fontSize={"10px"} fontWeight={500}>
              Grocery
            </Text>
          </Box>
          <Link to={"/mobile"}>
            <Box>
              <Text fontSize={"10px"} fontWeight={500}>
                Mobile
              </Text>
            </Box>
          </Link>
          <Box>
            <Text fontSize={"10px"} fontWeight={500}>
              Fashion
            </Text>
          </Box>
          <Box>
            <Text fontSize={"10px"} fontWeight={500}>
              Electronics
            </Text>
          </Box>
          <Box>
            <Text fontSize={"10px"} fontWeight={500}>
              Home
            </Text>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default NormalNav;
