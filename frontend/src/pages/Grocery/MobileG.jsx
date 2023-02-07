import {
  Box,
  Flex,
  Image,
  Text,
  Icon,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { site } from "../../components/backend";
import { Link } from "react-router-dom";

const getData = async () => {
  const res = await axios.get(`${site}/products/grocery`);
  console.log(res.data);
  return res.data;
};

const MobileG = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    handleTheFetch();
  }, []);

  const handleTheFetch = async () => {
    setLoading(true);
    const append = await getData().then((res) => setData(res));
    setLoading(false);
  };
  return (
    <Box>
    {loading && (
      <Box>
        <Spinner
          mt={10}
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text fontWeight={500} color={"rgb(107,70,193)"} mt={10}>
          Loading...
        </Text>
      </Box>
    )}
    {data &&
      data.map((post, i) => (
        <Link key={i} to={`/singlepage/${post._id}`}>
          <Flex gap={5} pt={5} pb={5} borderBottom={"1px"} borderColor={"gray.300"} ml={3}>
            {/* Image  */}
            <Box mt={2} width={"30%"}>
              <Center>
                <Image width={"100px"} src={post.img[0]} />
              </Center>
            </Box>
            {/* Desc  */}
            <Box width={"70%"}>
              <Text
                textAlign={"left"}
                noOfLines={1}
                fontWeight={500}
                fontSize={"14px"}
              >
                {post.title}
              </Text>
              {/* Rating & strike */}
              <Flex mt={1} mb={1}>
                {/* Box 1 */}
                <Flex
                  pl={"3px"}
                  pr={"3px"}
                  borderRadius={3}
                  bgColor={"green"}
                  gap={1}
                  pb={-2}
                >
                  <Text fontSize={"10px"} fontWeight={500} color={"white"}>
                    {post.rating}
                  </Text>
                  <Icon
                    as={GoStar}
                    w={"10px"}
                    h={"10px"}
                    mt={"2px"}
                    color="white"
                  />
                </Flex>
              </Flex>
              {/* price */}
              <Flex gap={2}>
                <Text fontWeight={500} fontSize={"14px"}>
                  <strike>{post.strik}</strike>
                </Text>
                <Text fontWeight={500} fontSize={"14px"}>
                  {post.price}
                </Text>
                <Text fontWeight={500} color={"green"} fontSize={"14px"}>
                  {post.off}
                </Text>
              </Flex>
              {/* delivery */}
              <Text textAlign={"left"} fontWeight={400} fontSize={"12px"}>
                Free delivery
              </Text>
              <Text textAlign={"left"} fontWeight={400} fontSize={"12px"}>
                Upto 10,000 Off on Exchange
              </Text>
              <Text
                mt={1}
                mb={1}
                fontWeight={500}
                color={"green"}
                textAlign={"left"}
                fontSize={"13px"}
              >
                Bank Offer
              </Text>
            </Box>
          </Flex>
        </Link>
      ))}
    <Box>
    </Box>
  </Box>
  )
}

export default MobileG
