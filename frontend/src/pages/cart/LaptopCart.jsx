import { Box, Text, Flex, Button, Image, Center, Icon, Toast, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import { AiTwotoneQuestionCircle } from "react-icons/ai";

const getCart = async () => {
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/carts`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const plusQuantity = async (prod) => {
  let toki = localStorage.getItem("token");
  const res = await axios.patch(
    `${site}/carts/${prod._id}`,
    {
      quantity: prod.quantity + 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    }
  );
  console.log(res.data);
};

const minusQuantity = async (prod) => {
  let toki = localStorage.getItem("token");
  const res = await axios.patch(
    `${site}/carts/${prod._id}`,
    {
      quantity: prod.quantity - 1,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: toki,
      },
    }
  );
  console.log(res.data);
};

const itemDelete = async (id) => {
  let toki = localStorage.getItem("token");
  const res = await axios.delete(`${site}/carts/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  console.log(res.data)
};

const LaptopCart = () => {
  const [data, setData] = useState([]);
  const toast = useToast()

  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = async () => {
    const append = await getCart();
    console.log("append=>", append);
    setData(append);
  };

  const handleTheMinus = async (prod) => {
    console.log("minus btn");
    await minusQuantity(prod);
    handleTheFetch();
  };

  const handleThePlus = async (prod) => {
    console.log("plus btn");
    await plusQuantity(prod);
    handleTheFetch();
  };

  const handleTheCheckout = () => {};

  const handleTheDelete = async(id) => {
    console.log(id)
    await itemDelete(id)
    handleTheFetch()
    toast({
      position: "top",
      title: `Item is deleted from your cart`,
      status: "info",
      duration: 1700,
      isClosable: true,
    });
  };

  let total = data.reduce((acc, el) => acc + (el.price2*el.quantity), 0);

  return (
    <Box pt={10}>
      <Flex justifyContent={"center"}>
        <Box
          boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
          w="700px"
          ml="30px"
          h="auto"
        >
          <Box>
            <Center>
              {data.length == 0 && (
                <Text fontWeight={500} mt={"70px"} fontSize={"20px"}>
                  Your cart is empty
                </Text>
              )}
            </Center>
            {data &&
              data.map((prod, i) => (
                <Box key={i} borderBottom={"1px"} borderColor={"gray.300"}>
                  <Flex justifyContent={"space-between"} pr={"20px"}>
                    {/* Image Box  */}
                    <Flex>
                      <Box p={2} width={"200px"}>
                        <Center>
                          <Image mt={2} src={prod.img[0]} width={"70px"} />
                        </Center>
                      </Box>
                      {/* Desc  */}
                      <Box mt={2}>
                        <Text
                          textAlign={"left"}
                          fontSize={"13px"}
                          fontWeight={500}
                        >
                          {prod.title}
                        </Text>

                        <Box mt={2}>
                          <Flex gap={2}>
                            <Icon
                              w={"4px"}
                              h={"4px"}
                              mt={"6px"}
                              color={"gray.600"}
                              as={AiTwotoneQuestionCircle}
                            />
                            <Text
                              color={"gray.600"}
                              fontSize={"11px"}
                              fontWeight={"semibold"}
                            >
                              {prod.desc2}
                            </Text>
                          </Flex>
                          <Flex gap={2}>
                            <Icon
                              w={"4px"}
                              h={"4px"}
                              mt={"6px"}
                              color={"gray.600"}
                              as={AiTwotoneQuestionCircle}
                            />
                            <Text
                              color={"gray.600"}
                              fontSize={"11px"}
                              fontWeight={"semibold"}
                            >
                              {prod.desc3}
                            </Text>
                          </Flex>
                          <Flex gap={2}>
                            <Icon
                              w={"4px"}
                              h={"4px"}
                              mt={"6px"}
                              color={"gray.600"}
                              as={AiTwotoneQuestionCircle}
                            />
                            <Text
                              color={"gray.600"}
                              fontSize={"11px"}
                              fontWeight={"semibold"}
                            >
                              {prod.desc4}
                            </Text>
                          </Flex>
                          <Flex gap={2}>
                            <Icon
                              w={"4px"}
                              h={"4px"}
                              mt={"6px"}
                              color={"gray.600"}
                              as={AiTwotoneQuestionCircle}
                            />
                            <Text
                              color={"gray.600"}
                              fontSize={"11px"}
                              fontWeight={"semibold"}
                            >
                              {prod.desc1}
                            </Text>
                          </Flex>
                        </Box>
                      </Box>
                    </Flex>
                    {/* Price box  */}
                    <Box p={2}>
                      <Flex gap={3} justifyContent={"center"} fontWeight={500}>
                        <Text>Price</Text>
                        <Text>{prod.price}</Text>
                      </Flex>
                      <Flex gap={5} mt={3}>
                        <Button
                          color={"white"}
                          bgColor={"purple.500"}
                          _hover={{}}
                          borderRadius={100}
                          isDisabled={prod.quantity == 1}
                          size="sm"
                          onClick={() => handleTheMinus(prod)}
                        >
                          -
                        </Button>
                        <Text mt={2} fontWeight={500}>
                          {prod.quantity}
                        </Text>
                        <Button
                          color={"white"}
                          bgColor={"purple.500"}
                          _hover={{}}
                          borderRadius={100}
                          size="sm"
                          onClick={() => handleThePlus(prod)}
                        >
                          +
                        </Button>
                      </Flex>
                      <Button
                        mt={5}
                        color={"white"}
                        bgColor={"purple.500"}
                        _hover={{}}
                        borderRadius={10}
                        size="sm"
                        onClick={() => handleTheDelete(prod._id)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </Flex>
                </Box>
              ))}
          </Box>
        </Box>

        <Box>
          <Box
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            w="400px"
            p="15px"
            ml="20px"
            h="180px"
          >
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>Item Total(MRP)</Text>
                <Text>₹ {total}</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>Shipping Fee</Text>
                <Text>₹ 100</Text>
              </Flex>
            </Box>
            <hr></hr>
            <Box>
              <Flex justifyContent="space-between" fontSize={12} p="10px">
                <Text>To be paid</Text>
                <Text>₹ {total + 100}</Text>
              </Flex>
            </Box>
          </Box>
          <Button
            onClick={() => handleTheCheckout(data[0].userID)}
            w="100%"
            bgColor={"purple.500"}
            width="400px"
            ml="20px"
            mt="10px"
            _hover={{}}
          >
            <Text fontWeight={500} color={"white"}>
              PAY NOW
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default LaptopCart;
