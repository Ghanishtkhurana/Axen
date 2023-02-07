import { Box, Flex, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import NormalNav from "../../components/NormalNav";
import FilterGrocery from "./FilterG"
import LaptopG from "./LaptopG"
import MobileG from "./MobileG"


const Grocery = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 880px)')
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <Box>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        <FilterGrocery />
          {/* < /> */}
        {/* Products  */}
        <LaptopG />
      </Flex>
      </Box> : <MobileG/>}
      
    </Box>
  );
}

export default Grocery
