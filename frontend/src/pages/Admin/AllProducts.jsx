import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import AdminNav from "./AdminNav";

const getAllProducts = async () => {
  const res = await axios.get(`${site}/products`);
  let data = res.data;
  return data;
};

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleTheData();
  }, []);

  const handleTheData = async () => {
    await getAllProducts().then((res) => setData(res));
  };
  console.log("allproducts", data);
  return (
    <Box pt={10}>
      <AdminNav />
      {/* table */}
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Product ID</Th>
                <Th>Product Name</Th>
                <Th>Product Image</Th>
                <Th>Product category</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr> */}
              {data.length > 0 &&
                data.map((post, i) => (
                  <Tr>
                    <Td>
                      <Text width={"180px"} border={"1px solid green"} fontSize={"12px"} fontWeight={"500"}>
                        {post._id}
                      </Text>
                    </Td>
                    <Td>
                      <Text width={"300px"} overflow={"hidden"} border={"1px solid plum"} fontSize={"12px"} fontWeight={"500"}>
                        {post.title}
                      </Text>
                    </Td>
                    <Td color={"blue"}>
                      <a href={post.img[0]} target="_blank">
                        View Image
                      </a>
                    </Td>
                    <Td>{post.category}</Td>
                    <Td>Delete</Td>
                  </Tr>
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default AllProducts;
