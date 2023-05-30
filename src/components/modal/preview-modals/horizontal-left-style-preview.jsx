import { Flex, HStack, Text, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function HorizontalLeftPreview({ items }) {
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
          <Image style={{ borderRadius: "5px" }} preview={false} src='/horizontal_product_banner1_mirror.png' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            pl={4}
            top={'50%'}
            bottom={'50%'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            spacing={4}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'} color={'white'}>Skin Care Sale</Text>
            <Text fontWeight={'normal'} fontSize={'12px'} color={'white'}>Pilihan skin care untuk perawatan kulit anda</Text>
            <Text fontWeight={'semibold'} fontSize={'14px'} color={'red'}>Lihat Koleksi</Text>
          </VStack>
        </Flex>
        <Flex
          w={'100%'}
          position={'relative'}
          borderRadius={'5px'}
        >
          <Image style={{ borderRadius: "5px" }} preview={false} src='/horizontal_product_banner2_mirror.png' width={'100%'} />
          <VStack 
            position={'absolute'} 
            w={'50%'}
            pl={4}
            top={'50%'}
            bottom={'50%'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            spacing={4}
          >
            <Text fontWeight={'semibold'} fontSize={'20px'} color={'white'}>Disc. 17% All Cosmetics</Text>
            <Text fontWeight={'normal'} fontSize={'12px'} color={'white'}>Perlengkapan make up terlengkap</Text>
            <Text fontWeight={'semibold'} fontSize={'14px'} color={'red'}>Lihat Koleksi</Text>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default HorizontalLeftPreview