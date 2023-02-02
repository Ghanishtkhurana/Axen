import { Box, Flex} from "@chakra-ui/react";
import React from "react";
import NormalNav from "../../components/NormalNav";
import Filter from "./Filter";
import MobileProduct from "./MobileProduct";

const Mobile = () => {
  return (
    <Box pt={10}>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        {/* Filter  */}
          <Filter />
        {/* Products  */}
        <MobileProduct />
      </Flex>
    </Box>
  );
};

export default Mobile;
