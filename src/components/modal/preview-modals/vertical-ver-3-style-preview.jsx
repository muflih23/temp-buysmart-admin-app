import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function Vertical3Preview({ items }) {
  return (
    <Flex
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <HStack
        w={'100%'}
        overflow={'auto'}
        spacing={4}
        pb={4}
      >
        <VStack
          w={'200px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexShrink={"0"}
          borderRadius={'5px'}
          position={'relative'}
          boxShadow={'md'}
        >
          <Image 
            width={'200px'}
            src={'/vertical_product_example_v2_1_1.png'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <VStack
            position={'absolute'}
            bottom={0}
            pb={4}
            px={4}
          >
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'20px'}
            >
              EarthTags
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'normal'}
              fontSize={'16px'}
            >
              Cari barang lebih lorem ipsum dolor sit amet lorem ipsum
            </Text>
          </VStack>
        </VStack>
        <VStack
          w={'200px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexShrink={"0"}
          borderRadius={'5px'}
          position={'relative'}
          boxShadow={'md'}
        >
          <Image 
            width={'200px'}
            src={'/vertical_product_example_v2_1_2.png'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <VStack
            position={'absolute'}
            bottom={0}
            pb={4}
            px={4}
          >
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'20px'}
            >
              HomePods
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'normal'}
              fontSize={'16px'}
            >
              Untuk mengisi lorem ipsum dolor sit amet lorem 
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default Vertical3Preview