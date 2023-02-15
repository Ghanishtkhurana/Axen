import React, { useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const ActDailer = ({post,btn}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    console.log(btn)

    useEffect(()=>{
        handleTheBtn()
    },[btn])

    const handleTheBtn = ()=>{
        if(btn){
            isOpen()
            onOpen()
        }
        else{
            onClose()
        }
    }
  console.log("post", post);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Name : {post.name}</Text>
          <Text>Mobile No : {post.mobileNumber}</Text>
          <Text>Pin Code : {post.pinCode}</Text>
          <Text>House No : {post.houseNo}</Text>
          <Text>Area : {post.area}</Text>
          <Text>Landmark : {post.landmark}</Text>
          <Text>State : {post.state}</Text>
          <Text>User-Id : {post.userId}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActDailer;
