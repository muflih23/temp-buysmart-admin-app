import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function RectangleVer1Preview({ items }) {
  return (
    <Flex
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <VStack
        w={'80%'}
        spacing={0}
      >
        <HStack
          w={'100%'}
          justifyContent={'space-between'}
          alignItems={'center'}
          bg={'#5f9178'}
          p={4}
        >
          <VStack
            alignItems={'flex-start'}
          >
            <Text fontWeight={'bold'} letterSpacing={0.5} color={'white'}>Diskon 45 %</Text>
            <Text fontSize={'12px'} color={'white'}>Lorem ipsum dolor sit amet lorem ipsum dolor</Text>
            <Text fontSize={'12px'} fontWeight={'semibold'} color={'white'}>Temukan Penawaran</Text>
          </VStack>
          <Image 
            src='/item_example.png'
            preview={false}
            width={'80%'}
          />
        </HStack>
        <HStack
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
          spacing={0}
        >
          <Flex w={'33.33%'} bg={'#7aa891'}>
            <Image 
              preview={false}
              src='/product_example.png'
            />
          </Flex>
          <Flex w={'33.33%'} bg={'#4b725e'}>
          <Image 
              preview={false}
              src='/product_example_2.png'
            />
          </Flex>
          <Flex w={'33.33%'} bg={'#365344'}>
          <Image 
              preview={false}
              src='/product_example_3.png'
            />
          </Flex>
        </HStack>
      </VStack>
    </Flex>
  )
}

export default RectangleVer1Preview