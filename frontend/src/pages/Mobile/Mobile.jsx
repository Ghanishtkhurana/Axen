import { Box, Flex, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import NormalNav from "../../components/NormalNav";
import Filter from "./Filter";
import MobileProduct from "./MobileProduct";
import SmallMobile from "./SmallMobile";

const Mobile = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1080px)')
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <Box>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        {/* Filter  */}
          <Filter />
        {/* Products  */}
        <MobileProduct />
      </Flex>
      </Box> : <SmallMobile/>}
      
    </Box>
  );
};

export default Mobile;
