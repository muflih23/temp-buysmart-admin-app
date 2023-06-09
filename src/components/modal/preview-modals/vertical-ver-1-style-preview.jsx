import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function Vertical1Preview({ items }) {
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
              fontSize={'28px'}
            >
              20% Off
            </Text>
            <Text
              textAlign={'left'}
              fontWeight={'semibold'}
              fontSize={'16px'}
            >
              Perlengkapan agar rumah mu lebih canggih
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
              fontSize={'28px'}
            >
              20% Off
            </Text>
            <Text
              textAlign={'left'}
              fontWeight={'semibold'}
              fontSize={'16px'}
            >
              Perlengkapan agar rumah mu lebih canggih
            </Text>
          </VStack>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default Vertical1Preview