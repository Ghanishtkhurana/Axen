import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Box,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

const ShowProduct = ({ cancelRef, post, onOpen, isOpen, onClose }) => {
  console.log("cartProduct", post);
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Address Details
          </AlertDialogHeader>

          <AlertDialogBody>
            {post.length > 0 &&
              post.map((post, i) => (
                <Box>
                  <Flex justifyContent={"space-between"} mt={2} gap={6}>
                    <Box w={"30%"}>
                      <Image width={"100px"} src={post.img[0]} />
                    </Box>
                    <Box w={"70%"} >
                      <Text fontWeight={500} noOfLines={1}>{post.title}</Text>
                      <Text fontWeight={500} noOfLines={1}>{post.price}</Text>
                      <Text fontWeight={500} noOfLines={1}>Quantity : {" "}{post.quantity}</Text>
                    </Box>
                  </Flex>
                </Box>
              ))}
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button bgColor={"orange.300"} color={"white"} ref={cancelRef} onClick={onClose}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ShowProduct;
