import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function RectangleVer3Preview({ items }) {
  return (
    <Flex
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <VStack
        w={'100%'}
      >
        <Flex
          w={'100%'}
          position={'relative'}
          borderRadius={'5px'}
        >
          <Image style={{ borderRadius: "5px" }} preview={false} src='/subscribe-example.jpg' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            p={4}
            alignItems={'flex-start'}
            spacing={8}
          >
            <Text color={'white'} fontWeight={'bold'} fontSize={'24px'}>Netflix Hanya Rp59.000 per 2 Bulan</Text>
            <Text color={'white'} fontWeight={'medium'} fontSize={'18px'}>Lihat Detail</Text>
          </VStack>
        </Flex>
        <Flex
          w={'100%'}
          position={'relative'}
          borderRadius={'5px'}
        >
          <Image style={{ borderRadius: "5px" }} preview={false} src='/subscribe-example.jpg' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            p={4}
            alignItems={'flex-start'}
            spacing={8}
          >
            <Text color={'white'} fontWeight={'bold'} fontSize={'24px'}>Netflix Hanya Rp59.000 per 2 Bulan</Text>
            <Text color={'white'} fontWeight={'medium'} fontSize={'18px'}>Lihat Detail</Text>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default RectangleVer3Preview