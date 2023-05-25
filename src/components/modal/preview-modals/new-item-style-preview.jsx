import { 
  ModalCloseButton, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  Text, 
  ModalHeader,
  Flex,
  HStack,
  VStack,
  Box
} from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'
import { BsStarFill } from 'react-icons/bs'

function NewStylePreview({ items }) {
  return (
    <>
      <Flex
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
      >
        <HStack
          w={'100%'}
          overflowX={'auto'}
          spacing={4}
        >
          <VStack
            w={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
          >
            <Image
              width={'150px'}
              height={'150px'}
              src={'/product-example-mac.jpg'}
              preview={false}
              style={{
                borderRadius: '5px'
              }}
            />
            <Flex
              bg={'brand.redOrange'}
              borderRadius={'5px'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              top={0}
              right={'5px'}
            >
              <Text fontSize={'12px'} color={'white'} px={2} letterSpacing={2} textAlign={'center'}>BARU</Text>
            </Flex>
            <VStack
              w={'100%'}
              p={'0.25em'}
              alignItems={'flex-start'}
              spacing={1}
            >
              <Text
                fontWeight={'bold'}
                fontSize={'12px'}
              >
                Brand Name
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={'12px'}
              >
                MAQBook Laptop 512GB Storage SSD
              </Text>
              <HStack>
                <BsStarFill color='yellow' size={'12px'}/>
                <Text color={'brand.grey'} fontSize={'12px'}>5.0</Text>
              </HStack>
              <Text color={'brand.grey'} fontSize={'10px'} as={'s'}>Rp. 20,000,000</Text>
              <Text color={'black'} fontSize={'12px'} fontWeight={'bold'}>Rp. 13,000,000</Text>
              <Box height={1}/>
            </VStack>
          </VStack>
          <VStack
            w={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
          >
            <Image
              width={'150px'}
              height={'150px'}
              src={'/product-example-mac.jpg'}
              preview={false}
              style={{
                borderRadius: '5px'
              }}
            />
            <Flex
              bg={'brand.redOrange'}
              borderRadius={'5px'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              top={0}
              right={'5px'}
            >
              <Text fontSize={'12px'} color={'white'} px={2} letterSpacing={2} textAlign={'center'}>BARU</Text>
            </Flex>
            <VStack
              w={'100%'}
              p={'0.25em'}
              alignItems={'flex-start'}
              spacing={1}
            >
              <Text
                fontWeight={'bold'}
                fontSize={'12px'}
              >
                Brand Name
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={'12px'}
              >
                MAQBook Laptop 512GB Storage SSD
              </Text>
              <HStack>
                <BsStarFill color='yellow' size={'12px'}/>
                <Text color={'brand.grey'} fontSize={'12px'}>5.0</Text>
              </HStack>
              <Text color={'brand.grey'} fontSize={'10px'} as={'s'}>Rp. 20,000,000</Text>
              <Text color={'black'} fontSize={'12px'} fontWeight={'bold'}>Rp. 13,000,000</Text>
              <Box height={1}/>
            </VStack>
          </VStack>
          <VStack
            w={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
          >
            <Image
              width={'150px'}
              height={'150px'}
              src={'/product-example-mac.jpg'}
              preview={false}
              style={{
                borderRadius: '5px'
              }}
            />
            <Flex
              bg={'brand.redOrange'}
              borderRadius={'5px'}
              justifyContent={'center'}
              alignItems={'center'}
              position={'absolute'}
              top={0}
              right={'5px'}
            >
              <Text fontSize={'12px'} color={'white'} px={2} letterSpacing={2} textAlign={'center'}>BARU</Text>
            </Flex>
            <VStack
              w={'100%'}
              p={'0.25em'}
              alignItems={'flex-start'}
              spacing={1}
            >
              <Text
                fontWeight={'bold'}
                fontSize={'12px'}
              >
                Brand Name
              </Text>
              <Text
                fontWeight={'normal'}
                fontSize={'12px'}
              >
                MAQBook Laptop 512GB Storage SSD
              </Text>
              <HStack>
                <BsStarFill color='yellow' size={'12px'}/>
                <Text color={'brand.grey'} fontSize={'12px'}>5.0</Text>
              </HStack>
              <Text color={'brand.grey'} fontSize={'10px'} as={'s'}>Rp. 20,000,000</Text>
              <Text color={'black'} fontSize={'12px'} fontWeight={'bold'}>Rp. 13,000,000</Text>
              <Box height={1}/>
            </VStack>
          </VStack>
        </HStack>
      </Flex>
    </>
  )
}


export default NewStylePreview;