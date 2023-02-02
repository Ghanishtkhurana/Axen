import { Box } from '@chakra-ui/react'
import React from 'react'
import HomeNav from '../components/HomeNav'
import ImageSlider from '../components/ImageSlider'

const Home = () => {
  return (
    <Box pt={10}>
      <HomeNav />
      <ImageSlider />
    </Box>
  )
}

export default Home
