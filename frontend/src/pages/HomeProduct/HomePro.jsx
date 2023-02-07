import { Box, Flex, useMediaQuery} from "@chakra-ui/react";
import React from "react";
import NormalNav from "../../components/NormalNav";
import FilterHomePro from "./FilterHomePro";
import LaptopHomePro from "./LaptopHomePro";
import MobileHomePro from "./MobileHomePro";


const HomePro = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 880px)')
  return (
    <Box pt={10}>
      {isLargerThan1280 ? <Box>
      <NormalNav />
      <Flex justifyContent={"space-between"} ml={"8px"} mt={"10px"} mr={"8px"}>
        <FilterHomePro />
          {/* < /> */}
        {/* Products  */}
        <LaptopHomePro />
      </Flex>
      </Box> : <MobileHomePro/>}
      
    </Box>
  );
}

export default HomePro
