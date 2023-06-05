import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function Square1Preview({ items }) {
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
            width={'100%'}
            src={'item_vertical_sofa.jpg'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <VStack
            position={'absolute'}
            top={0}
            pb={4}
            px={4}
            spacing={0}
          >
            <Text
              textAlign={'center'}
              fontWeight={'normal'}
              fontSize={'16px'}
            >
              Di Bawah
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'20px'}
            >
              Rp 29,000,000
            </Text>
          </VStack>
          <Flex
            position={'absolute'}
            bottom={0}
            py={2}
            px={4}
            spacing={0}
            bg={'orange'}
            w={'100%'}
            borderRadius={'0 0 5px 5px'}
            alignItems={'center'}
          >
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'16px'}
            >
              Furniture
            </Text>
          </Flex>
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
            width={'100%'}
            src={'item_vertical_sofa.jpg'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <VStack
            position={'absolute'}
            top={0}
            pb={4}
            px={4}
            spacing={0}
          >
            <Text
              textAlign={'center'}
              fontWeight={'normal'}
              fontSize={'16px'}
            >
              Di Bawah
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'20px'}
            >
              Rp 59,000,000
            </Text>
          </VStack>
          <Flex
            position={'absolute'}
            bottom={0}
            py={2}
            px={4}
            spacing={0}
            bg={'orange'}
            w={'100%'}
            borderRadius={'0 0 5px 5px'}
            alignItems={'center'}
          >
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'16px'}
            >
              Kitchen Set
            </Text>
          </Flex>
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
            width={'100%'}
            src={'item_vertical_sofa.jpg'}
            preview={false}
            style={{
              borderRadius: '5px'
            }}
          />
          <VStack
            position={'absolute'}
            top={0}
            pb={4}
            px={4}
            spacing={0}
          >
            <Text
              textAlign={'center'}
              fontWeight={'normal'}
              fontSize={'16px'}
            >
              Di Bawah
            </Text>
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'20px'}
            >
              Rp 24,000,000
            </Text>
          </VStack>
          <Flex
            position={'absolute'}
            bottom={0}
            py={2}
            px={4}
            spacing={0}
            bg={'orange'}
            w={'100%'}
            borderRadius={'0 0 5px 5px'}
            alignItems={'center'}
          >
            <Text
              textAlign={'center'}
              fontWeight={'semibold'}
              fontSize={'16px'}
            >
              Plumbings
            </Text>
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  )
}

export default Square1Preview