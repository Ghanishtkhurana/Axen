import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  AlertDialogCloseButton,
  Text,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { site } from "../../components/backend";

export const getAddress = async (id) => {
  console.log(id);
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/admin/orders/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
  //   console.log(data)
};

const AddressCard = ({ id, isOpen, onOpen, onClose, cancelRef }) => {
  const [data, setData] = useState();
  console.log(id);

  useEffect(() => {
    getAddress(id).then((res) => setData(res));
  }, [id]);

  console.log(data);
  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Checkout</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            {data && (
              <Box>
                <Text>Name : {data.name}</Text>
                <Text>Mobile No : {data.mobileNumber}</Text>
                <Text>Pin Code : {data.pinCode}</Text>
                <Text>House No : {data.houseNo}</Text>
                <Text>Area : {data.area}</Text>
                <Text>Landmark : {data.landmark}</Text>
                <Text>State : {data.state}</Text>
                <Text>User-Id : {data.userId}</Text>
              </Box>
            )}
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button bgColor={"purple.400"} color={"white"} ml={3}>
              Proceed to Checkout
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AddressCard;
