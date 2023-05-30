import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'
import "antd/lib/carousel/style/index.js";
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import "pure-react-carousel/dist/react-carousel.es.css";
import { Carousel, LeftButton, Provider, RightButton } from 'chakra-ui-carousel';
import NukaCarousel, { PagingDots } from "nuka-carousel";

function RectangleVer2Preview({ items }) {

  const src = "https://source.unsplash.com/random/1024x768/";

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
        cellAlign='center' 
        slidesToShow={1} 
        autoplay 
        pauseOnHover
        cellSpacing={16}
        dragging={true}
        renderBottomCenterControls={false}
      >
        <VStack
          w={'300px'}
          borderWidth={'1px'}
          borderColor={'brand.lightGrey'}
          borderRadius={'5px'}
          bg={'white'}
        >
          <Image style={{ borderRadius: "5px 5px 0 0" }} preview={false} width={'100%'} src={`${src}?furniture`} alt='sofa'/>
          <VStack
            w={'100%'}
            alignItems={'flex-start'}
            px={4}
            pb={4}
          >
            <Text fontWeight={'semibold'}>Perlengkapan Furnitur</Text>
            <Text fontSize={'14px'}>Furnitur minimalis modern untuk rumah, kantor, dll</Text>
            <Text fontSize={'14px'} fontWeight={'semibold'} color={'brand.red'}>Temukan Penawaran</Text>
          </VStack>
        </VStack>
        <VStack
          w={'300px'}
          borderWidth={'1px'}
          borderColor={'brand.lightGrey'}
          borderRadius={'5px'}
          bg={'white'}
        >
          <Image style={{ borderRadius: "5px 5px 0 0" }} preview={false} width={'100%'} src={`${src}?sofa`} alt='bed'/>
          <VStack
            w={'100%'}
            alignItems={'flex-start'}
            px={4}
            pb={4}
          >
            <Text fontWeight={'semibold'}>Perlengkapan Furnitur</Text>
            <Text fontSize={'14px'}>Furnitur minimalis modern untuk rumah, kantor, dll</Text>
            <Text fontSize={'14px'} fontWeight={'semibold'} color={'brand.red'}>Temukan Penawaran</Text>
          </VStack>
        </VStack>
      </NukaCarousel>
    </Box>
  )
}

export default RectangleVer2Preview