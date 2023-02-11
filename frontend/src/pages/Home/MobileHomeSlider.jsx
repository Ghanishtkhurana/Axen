import axios from "axios";
import { Box, Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
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
    items: 3,
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

const MobileHomeSlider = () => {
  const [data, setData] = useState([]);
  const [mobileData, setMobileData] = useState([]);
  const [groceryData, setGroceryData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTheFetch();
  }, []);
  const handleTheFetch = async () => {
    setLoading(true);
    await getData().then((res) => setData(res));
    await getMobileData().then((res) => setMobileData(res));
    await getGroceryData().then((res) => setGroceryData(res));
    await getHomeData().then((res) => setHomeData(res));
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
            <Text
              mt={5}
              mb={10}
              fontWeight={500}
              fontSize={"19px"}
              color={"blue.500"}
            >
              Loading ...
            </Text>
          </Flex>
        </div>
      )}
      {/* Electronic  */}
      <Flex flexDirection={"column"}>
        <Text textAlign={"left"} ml={1} fontSize={"12px"} fontWeight={500}>Electronic & Appliances</Text>
        <Box border={"1px"} borderColor={"gray.300"} w={"100%"}>
          <Carousel responsive={responsive}>
            {data.length > 0 &&
              data.map((post, i) => (
                <Box h={120} pl={2} pt={2} pr={2} key={i}>
                  <Center>
                    <Image width={"90px"} h={"70px"} src={post.img[0]} />
                  </Center>
                  <Text mt={3} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Mobile  */}
      <Flex flexDirection={"column"}>
      <Text textAlign={"left"} ml={1} fontSize={"12px"} fontWeight={500}>Mobile Products</Text>
      <Box border={"1px"} borderColor={"gray.300"} w={"100%"}>
          <Carousel responsive={responsive}>
            {mobileData.length > 0 &&
              mobileData.map((post, i) => (
                <Box h={120} pl={2} pt={2} pr={2} key={i}>
                  <Center>
                    <Image width={"70px"} h={"75px"} src={post.img[0]} />
                  </Center>
                  <Text mt={3} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Grocery  */}
      <Flex flexDirection={"column"}>
      <Text textAlign={"left"} ml={1} fontSize={"12px"} fontWeight={500}>Grocery Products</Text>
      <Box border={"1px"} borderColor={"gray.300"} w={"100%"}>
          <Carousel responsive={responsive}>
            {groceryData.length > 0 &&
              groceryData.map((post, i) => (
                <Box h={120} pl={2} pt={2} pr={2} key={i}>
                  <Center>
                    <Image width={"70px"} h={"75px"} src={post.img[0]} />
                  </Center>
                  <Text mt={2} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    {post.title}
                  </Text>
                </Box>
              ))}
          </Carousel>
        </Box>
      </Flex>

      {/* Home  */}
      <Flex flexDirection={"column"}>
      <Text textAlign={"left"} ml={1} fontSize={"12px"} fontWeight={500}>Home Products</Text>
      <Box border={"1px"} borderColor={"gray.300"} w={"100%"}>
          <Carousel responsive={responsive}>
            {homeData.length > 0 &&
              homeData.map((post, i) => (
                <Box h={120} pl={2} pt={2} pr={2} key={i}>
                  <Center>
                    <Image width={"70px"} h={"75px"} src={post.img[0]} />
                  </Center>
                  <Text mt={2} noOfLines={1} fontWeight={500} fontSize={"10px"}>
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

export default MobileHomeSlider;
