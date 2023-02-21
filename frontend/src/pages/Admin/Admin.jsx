import { Box, Flex, Text, useMediaQuery, Icon, Image } from "@chakra-ui/react";
import React from "react";
import AdminNav from "./AdminNav";
import { FaUserLock } from "react-icons/fa";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const adminComp = [
  {
    icon: GiCardboardBoxClosed,
    txt: "All Products",
    link: "/admin/allproducts",
  },
  {
    icon: MdOutlineAddShoppingCart,
    txt: "Add Products",
    link: "/admin/addproducts",
  },
  {
    icon: CiDeliveryTruck,
    txt: "Orders",
    link: "/admin/orders",
  },
  {
    icon: BiUser,
    txt: "Users",
    link: "/admin/users",
  },
];

const Admin = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width:800px)");
  const { name } = useSelector((store) => store.auth);
  console.log(name);
  return (
    <Box pt={10}>
      {/* <AdminNav /> */}
      {isLargerThan1280 ? (
        <Box>
          <Flex>
            <Box
              w={"20%"}
              h={"529px"}
              p={2}
              background={
                "url(https://cdn.vectorstock.com/i/preview-1x/45/27/abstract-gradient-background-blurred-purple-vector-21994527.jpg) center/cover no-repeat"
              }
            >
              <Flex
                gap={3}
                pl={2}
                borderBottom={"1px solid"}
                borderColor={"gray.100"}
                pb={4}
                pt={4}
              >
                <Icon color={"white"} w={6} h={6} mt={"1px"} as={FaUserLock} />
                <Text
                  fontWeight={400}
                  textAlign={"center"}
                  fontSize={"18px"}
                  color={"white"}
                >
                  ADMIN
                </Text>
              </Flex>
              <Flex
                gap={3}
                pl={1}
                borderBottom={"1px solid"}
                borderColor={"gray.100"}
                pb={3}
                pt={3}
              >
                <Image
                  w={"40px"}
                  borderRadius={50}
                  src="https://i.pinimg.com/564x/ab/b9/7e/abb97e1aaacf4ce84378d0a0afe2284e.jpg"
                />
                <Text
                  mt={1}
                  fontWeight={400}
                  textAlign={"center"}
                  fontSize={"18px"}
                  color={"white"}
                >
                  Admin name
                </Text>
              </Flex>
              {/* Pages  */}
              <Flex p={5} gap={6} flexDirection={"column"}>
                {adminComp.map((post, i) => (
                  <Link to={post.link}>
                    <Flex gap={2}>
                      <Icon
                        color={"white"}
                        w={5}
                        h={5}
                        mt={"2px"}
                        as={post.icon}
                      />
                      <Text
                        textAlign={"center"}
                        fontSize={"16px"}
                        fontWeight={400}
                        color={"white"}
                      >
                        {post.txt}
                      </Text>
                    </Flex>
                  </Link>
                ))}
              </Flex>
            </Box>
            <Box w={"80%"}>
              <Flex p={5} gap={250}>
                {/* box1  */}
                <Box>
                  <Box>
                    <Box
                      mt={5}
                      position={"fixed"}
                      bgColor={"gray.200"}
                      h={"120px"}
                      w={200}
                    ></Box>
                    <Box
                      mt={"-6px"}
                      ml={"20px"}
                      position={"absolute"}
                      bgColor={"orange.200"}
                      h={"65px"}
                      w={70}
                    ></Box>
                  </Box>
                </Box>
                {/* Box2  */}
                <Box>
                  <Box>
                    <Box
                      mt={5}
                      position={"fixed"}
                      bgColor={"gray.200"}
                      h={"120px"}
                      w={200}
                    ></Box>
                    <Box
                      mt={"-6px"}
                      ml={"20px"}
                      position={"absolute"}
                      bgColor={"orange.200"}
                      h={"65px"}
                      w={70}
                    ></Box>
                  </Box>
                </Box>
                {/* Box 3  */}
                <Box>
                  <Box>
                    <Box
                      mt={5}
                      position={"fixed"}
                      bgColor={"gray.200"}
                      h={"120px"}
                      w={200}
                    ></Box>
                    <Box
                      mt={"-6px"}
                      ml={"20px"}
                      position={"absolute"}
                      bgColor={"orange.200"}
                      h={"65px"}
                      w={70}
                    ></Box>
                  </Box>
                </Box>
                {/* Box 4  */}
                <Box>
                  <Box>
                    <Box
                      mt={5}
                      position={"fixed"}
                      bgColor={"gray.200"}
                      h={"120px"}
                      w={200}
                    ></Box>
                    <Box
                      mt={"-6px"}
                      ml={"20px"}
                      position={"absolute"}
                      bgColor={"orange.200"}
                      h={"65px"}
                      w={70}
                    ></Box>
                  </Box>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Box>Mobile</Box>
      )}
    </Box>
  );
};

export default Admin;
