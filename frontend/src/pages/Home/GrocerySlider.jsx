import { Box, Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { site } from "../../components/backend";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const getData = async () => {
  const res = await axios.get(`${site}/products/electronic&appliances`);
  console.log(res.data);
  return res.data;
};
const getMobileData = async () => {
  const res = await axios.get(`${site}/products/mobile`);
  console.log(res.data);
  return res.data;
};

const getGroceryData = async () => {
  const res = await axios.get(`${site}/products/grocery`);
  console.log(res.data);
  return res.data;
};

const getHomeData = async () => {
  const res = await axios.get(`${site}/products/home`);
  console.log(res.data);
  return res.data;
};

const GrocerySlider = () => {
  const [data, setData] = useState([]);
  const [mobileData,setMobileData] = useState([]);
  const [groceryData,setGroceryData] = useState([]);
  const [homeData,setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTheFetch();
  }, []);
  const handleTheFetch = async () => {
    setLoading(true);
    await getData().then((res) => setData(res));
    await getMobileData().then((res) => setMobileData(res));
    await getGroceryData().then((res)=>setGroceryData(res))
    await getHomeData().then((res)=>setHomeData(res))
    setLoading(false);
  };
  console.log(data);
  return (
    <div>
      {loading && (
        <div>
          <Flex justifyContent={"center"} flexDirection={"column"}>
            <Center>
            <Spinner
              m={10}
              thickness="4px"
              speed="0.75s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            </Center>
            <Text mt={5} mb={10} fontWeight={500} fontSize={"19px"} color={"blue.500"}>Loading ...</Text>
          </Flex>
        </div>
      )}
      {/* Electronic  */}
      <Flex>
        <Box h={200} w={"20%"} pt={10} bgColor={"purple.300"}>
          <Text fontSize={"20px"} fontWeight={500} color={"white"}>
            Best of Electronic
          </Text>
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {data.length > 0 &&
              data.map((post, i) => (
                <Box
                h={200}
                  pl={10}
                  pt={10}
                  pr={10}
                  key={i}
                >
                  <Center>
                    <Image width={"120px"} h={"100px"} src={post.img[0]} />
                  </Center>
                  <Text
                    mt={5}
                    noOfLines={1}
                    fontWeight={500}
                    fontSize={"12px"}
                  >
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Mobile  */}
      <Flex mt={10} mb={10}>
        <Box h={200} w={"20%"} pt={10} bgColor={"purple.300"}>
          <Text fontSize={"20px"} fontWeight={500} color={"white"}>
            Best of Mobiles Phones
          </Text>
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {mobileData.length > 0 &&
              mobileData.map((post, i) => (
                <Box
                h={200}
                  pl={10}
                  pr={10}
                  key={i}
                  pt={10}
                >
                  <Center h={"100px"}>
                    <Image width={"90px"}  src={post.img[0]} />
                  </Center>
                  <Text
                    mt={5}
                    noOfLines={1}
                    fontWeight={500}
                    fontSize={"12px"}
                  >
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Grocery  */}
      <Flex mt={10} mb={10}>
        <Box h={200} w={"20%"} pt={10} bgColor={"purple.300"}>
          <Text fontSize={"20px"} fontWeight={500} color={"white"}>
            Best of Grocery Products
          </Text>
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {groceryData.length > 0 &&
              groceryData.map((post, i) => (
                <Box
                h={200}
                  pl={10}
                  pr={10}
                  key={i}
                  pt={10}
                >
                  <Center h={"100px"}>
                    <Image width={"90px"}  src={post.img[0]} />
                  </Center>
                  <Text
                    mt={5}
                    noOfLines={1}
                    fontWeight={500}
                    fontSize={"12px"}
                  >
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Home  */}
      <Flex mt={10} mb={10}>
        <Box h={200} w={"20%"} pt={10} bgColor={"purple.300"}>
          <Text fontSize={"20px"} fontWeight={500} color={"white"}>
            Best of Home Products
          </Text>
        </Box>
        <Box border={"1px"} borderColor={"gray.300"} w={"80%"}>
          <Carousel responsive={responsive}>
            {homeData.length > 0 &&
              homeData.map((post, i) => (
                <Box
                h={200}
                  pl={10}
                  pr={10}
                  key={i}
                  pt={10}
                >
                  <Center h={"100px"}>
                    <Image width={"90px"}  src={post.img[0]} />
                  </Center>
                  <Text
                    mt={5}
                    noOfLines={1}
                    fontWeight={500}
                    fontSize={"12px"}
                  >
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>
    </div>
  );
};

export default GrocerySlider;
