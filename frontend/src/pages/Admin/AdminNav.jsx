import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <Box boxShadow={"md"} pb={2} pt={2}>
    <Flex justifyContent={"space-between"} ml={{base : 10,md:10,lg:100}} mr={{base : 10,md:10,lg:100}}>
      <Link to={"/admin/allproducts"}>
      <Box>
        <Text fontSize={"10px"} fontWeight={500}>
          All Products
        </Text>
      </Box>
      </Link>
      <Link to={"/admin/addproducts"}>
        <Box>
          <Text fontSize={"10px"} fontWeight={500}>
            Add Product
          </Text>
        </Box>
      </Link>
      <Link to={"/admin/orders"}>
      <Box>
        <Text fontSize={"10px"} fontWeight={500}>
          Orders
        </Text>
      </Box>
      </Link>
    <Link to={"/admin/users"}>
      <Box>
        <Text fontSize={"10px"} fontWeight={500}>
        Users
        </Text>
      </Box>
      </Link>
    </Flex>
  </Box>
  )
}

export default AdminNav
