import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'
import "antd/lib/carousel/style/index.js";
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel';
import NukaCarousel, { PagingDots } from "nuka-carousel";

function HorizontalFullPreview({ items }) {


  return (
    <Box
      width={'100%'}
    >
      <NukaCarousel 
        renderCenterLeftControls={false}
        renderCenterRightControls={false}
        style={{ 
          paddingTop: '16px', 
          paddingBottom: '32px',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: '16px'
        }} 
        cellAlign='left' 
        slidesToShow={1} 
        autoplay 
        pauseOnHover
        cellSpacing={16}
        dragging={true}
      >
        <Flex
          w={'100%'}
          borderWidth={'1px'}
          borderColor={'brand.lightGrey'}
          borderRadius={'5px'}
          bg={'white'}
          position={'relative'}
        >
          <Image 
            style={{ borderRadius: "5px" }} 
            preview={false} 
            width={'320px'}
            height={'180px'} 
            src={'/horizontal_slider_example_item1.jpg'} 
            alt='sofa'
          />
          <VStack
            alignItems={'flex-start'}
            w={'50%'}
            m={4}
            position={'absolute'}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'}>Festival Furnitur 2023</Text>
            <Text fontWeight={'normal'} fontSize={'12px'}>Berbagai macam furnitur minimalis dan futuristik</Text>
            <Text fontWeight={'semibold'} fontSize={'12px'} color={'red'}>Lihat Koleksi</Text>
          </VStack>
        </Flex>
        <Flex
          w={'100%'}
          borderWidth={'1px'}
          borderColor={'brand.lightGrey'}
          borderRadius={'5px'}
          bg={'white'}
          position={'relative'}
        >
          <Image 
            style={{ borderRadius: "5px" }} 
            preview={false} 
            width={'320px'}
            height={'180px'} 
            src={'/horizontal_slider_example_item2.jpg'} 
            alt='sofa'
          />
          <VStack
            alignItems={'flex-start'}
            w={'50%'}
            m={4}
            position={'absolute'}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'}>Festival Furnitur 2023</Text>
            <Text fontWeight={'normal'} fontSize={'12px'}>Berbagai macam furnitur minimalis dan futuristik</Text>
            <Text fontWeight={'semibold'} fontSize={'12px'} color={'red'}>Lihat Koleksi</Text>
          </VStack>
        </Flex>
      </NukaCarousel>
    </Box>
  )
}

export default HorizontalFullPreview