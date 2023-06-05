import { Flex, Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function Circle1Preview({ items }) {
  return (
    <Flex
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
      direction={'column'}
    >
      <Grid
        w={'100%'}
        h={'100%'}
        templateColumns={'repeat(3, 1fr)'}
        gap={4}
      >
        <GridItem>
          <VStack
            w={'100%'}
          >
            <Flex
              w={'100%'}
              bg={'brand.lightGrey'}
              borderRadius={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image 
                src='/product_example_3.png'
                width={'100px'}
                height={'100px'}
              />
            </Flex>
            <Text
              fontWeight={'semibold'}
              textAlign={'center'}
            >
              Sofa dan Kursi
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            w={'100%'}
          >
            <Flex
              w={'100%'}
              bg={'brand.lightGrey'}
              borderRadius={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image 
                src='/product_example_2.png'
                width={'100px'}
                height={'100px'}
              />
            </Flex>
            <Text
              fontWeight={'semibold'}
              textAlign={'center'}
            >
              Furniture minimalis
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            w={'100%'}
          >
            <Flex
              w={'100%'}
              bg={'brand.lightGrey'}
              borderRadius={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image 
                src='/item_example.png'
                width={'100px'}
                height={'100px'}
              />
            </Flex>
            <Text
              fontWeight={'semibold'}
              textAlign={'center'}
            >
              Kursi nyaman
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <VStack
            w={'100%'}
          >
            <Flex
              w={'100%'}
              bg={'brand.lightGrey'}
              borderRadius={'100%'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <Image 
                src='/product_example_phone.png'
                width={'100px'}
                height={'100px'}
              />
            </Flex>
            <Text
              fontWeight={'semibold'}
              textAlign={'center'}
            >
              Ponsel pintar terbaru
            </Text>
          </VStack>
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default Circle1Preview