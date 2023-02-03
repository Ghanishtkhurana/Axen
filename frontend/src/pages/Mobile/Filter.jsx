import React from "react";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FaRegDotCircle } from "react-icons/fa";
import { RxStarFilled } from "react-icons/rx";

const Filter = () => {
  return (
    <Box bgColor={"rgb(267,260,262)"} boxShadow={"base"} width={"17%"} p={2}>
      <Box borderBottom={"1px"} color={"gray.300"} pt={1} pb={2}>
        <Text
          fontSize={"16px"}
          textAlign={"left"}
          color={"black"}
          fontWeight={500}
        >
          Filter
        </Text>
      </Box>
      {/* Price  */}
      <Box borderBottom={"1px"} borderColor={"gray.300"} pt={2} pb={2}>
        <Text
          fontSize={"14px"}
          textAlign={"left"}
          pl={1}
          color={"black"}
          fontWeight={500}
        >
          Price
        </Text>
        <Text
          color={"black"}
          fontWeight={500}
          fontSize={"11px"}
          letterSpacing={1}
          m={1}
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          textAlign={"left"}
        >
          Under ₹1,OOO
        </Text>
        <Text
          color={"black"}
          fontWeight={500}
          fontSize={"11px"}
          letterSpacing={1}
          m={1}
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          textAlign={"left"}
        >
          ₹1,OOO - ₹5,OOO
        </Text>
        <Text
          color={"black"}
          fontWeight={500}
          fontSize={"11px"}
          letterSpacing={1}
          m={1}
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          textAlign={"left"}
        >
          ₹5,OOO - ₹10,OOO
        </Text>
        <Text
          color={"black"}
          fontWeight={500}
          fontSize={"11px"}
          letterSpacing={1}
          m={1}
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          textAlign={"left"}
        >
          ₹10,OOO - ₹20,OOO
        </Text>
        <Text
          color={"black"}
          fontWeight={500}
          fontSize={"11px"}
          letterSpacing={1}
          m={1}
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          textAlign={"left"}
        >
          Over ₹20,OOO
        </Text>
      </Box>
      {/* Brand  */}
      <Box borderBottom={"1px"} borderColor={"gray.300"} pt={2} pb={2}>
        <Text
          fontSize={"14px"}
          textAlign={"left"}
          pl={1}
          color={"black"}
          fontWeight={500}
        >
          Brand
        </Text>
        {/* Option  */}
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            Google
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            Samsung
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            Apple
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            Mi
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={FaRegDotCircle} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            Motorola
          </Text>
        </Flex>
      </Box>
      {/* Rating  */}
      <Box>
        <Text
          fontSize={"14px"}
          textAlign={"left"}
          pl={1}
          color={"black"}
          fontWeight={500}
        >
          Rating
        </Text>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            4 & above
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            3 & above
          </Text>
        </Flex>
        <Flex
          _hover={{
            color: "rgb(200,136,240)",
            transition: ".3s",
            cursor: "pointer",
          }}
          ml={1}
          gap={1}
        >
          <Icon as={RxStarFilled} mt={"6px"} w={3} h={3} />
          <Text
            fontWeight={500}
            fontSize={"11px"}
            letterSpacing={1}
            m={1}
            textAlign={"left"}
          >
            2 & above
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Filter;
