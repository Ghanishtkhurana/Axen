import { Box, Flex, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import NormalNav from "../../components/NormalNav";
import FilterElectronic from "./FilterE";
import LaptopElec from "./LaptopE";
import MobileElec from "./MobileE";


const Electronic = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 880px)')
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <Box>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        <FilterElectronic />
          {/* < /> */}
        {/* Products  */}
        <LaptopElec />
      </Flex>
      </Box> : <MobileElec/>}
      
    </Box>
  );
}

export default Electronic
