import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function HorizontalRightPreview({ items }) {
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
          <Image style={{ borderRadius: "5px" }} preview={false} src='/horizontal_product_banner1.jpg' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            left={'40%'}
            top={'50%'}
            bottom={'50%'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            spacing={0}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'} color={'white'}>Some By You</Text>
            <Text fontWeight={'normal'} fontSize={'12px'} color={'white'}>Manjakan kulit anda dengan Some By You</Text>
          </VStack>
        </Flex>
        <Flex
          w={'100%'}
          position={'relative'}
          borderRadius={'5px'}
        >
          <Image style={{ borderRadius: "5px" }} preview={false} src='/horizontal_product_banner2.jpg' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            left={'40%'}
            top={'50%'}
            bottom={'50%'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            spacing={0}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'} color={'white'}>Battledah</Text>
            <Text fontWeight={'normal'} fontSize={'12px'} color={'white'}>Tampil percaya diri dengan Battledah</Text>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default HorizontalRightPreview