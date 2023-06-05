import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function Vertical2Preview({ items }) {
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
          w={'286px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexShrink={"0"}
          borderRadius={'5px'}
          position={'relative'}
          boxShadow={'sm'}
        >
          <Image 
            width={'100%'}
            src={'/vertical_product_example.png'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <Text
            position={'absolute'}
            bottom={0}
            fontWeight={'semibold'}
            fontSize={'20px'}
            pb={4}
            px={4}
          >
            Dekorasi Rumah Bernuansa Modern
          </Text>
        </VStack>
        <VStack
          w={'286px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexShrink={"0"}
          borderRadius={'5px'}
          position={'relative'}
          boxShadow={'sm'}
        >
          <Image 
            width={'100%'}
            src={'/vertical_product_example.png'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <Text
            position={'absolute'}
            bottom={0}
            fontWeight={'semibold'}
            fontSize={'20px'}
            pb={4}
            px={4}
          >
            Lorem ipsum dolor sit amet
          </Text>
        </VStack>
        <VStack
          w={'286px'}
          justifyContent={'center'}
          alignItems={'center'}
          flexShrink={"0"}
          borderRadius={'5px'}
          position={'relative'}
          boxShadow={'sm'}
        >
          <Image 
            width={'100%'}
            src={'/vertical_product_example.png'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <Text
            position={'absolute'}
            bottom={0}
            fontWeight={'semibold'}
            fontSize={'20px'}
            pb={4}
            px={4}
          >
            Waw mantap scroll sampe ujung
          </Text>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default Vertical2Preview