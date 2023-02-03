import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HomeNav from "../../components/HomeNav";
import ImageSlider from "../../components/ImageSlider";
import ImageSliderMob from "../../components/ImageSliderMob";

const Home = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 1080px)");

  return (
    <Box>
      {isLargerThan1280 ? (
        <Box pt={10}>
          <HomeNav />
          <ImageSlider />
        </Box>
      ) : (
        // Mobile 
        <Box pt={10}>
          <HomeNav />
          <ImageSliderMob />
        </Box>
      )}
    </Box>
  );
};

export default Home;
