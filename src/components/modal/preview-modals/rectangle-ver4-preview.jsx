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

function RectangleVer4Preview({ items }) {
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
          pb={4}
        >
          <VStack
            w={'200px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
            borderWidth={'1px'}
            borderColor={'brand.lightGrey'}
            boxShadow={'lg'}
          >
            <VStack
              w={'100%'}
              p={4}
            >
              <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'16px'}>uPhone 14 Newbie Min</Text>
              <Text textAlign={'center'} fontSize={'13px'}>Warna Hitam Black Hole</Text>
            </VStack>
            <Image
              width={'200px'}
              src={'/product_example_phone_2.png'}
              preview={false}
              style={{
                borderRadius: '0px 0px 5px 5px'
              }}
            />
          </VStack>
          <VStack
            w={'200px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
            borderWidth={'1px'}
            borderColor={'brand.lightGrey'}
            boxShadow={'lg'}
          >
            <VStack
              w={'100%'}
              p={4}
            >
              <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'16px'}>uPhone 14 Newbie Min</Text>
              <Text textAlign={'center'} fontSize={'13px'}>Warna Hitam Black Hole</Text>
            </VStack>
            <Image
              width={'200px'}
              src={'/product_example_phone_2.png'}
              preview={false}
              style={{
                borderRadius: '0px 0px 5px 5px'
              }}
            />
          </VStack>
          <VStack
            w={'200px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'white'}
            borderRadius={'5px'}
            position={'relative'}
            borderWidth={'1px'}
            borderColor={'brand.lightGrey'}
            boxShadow={'lg'}
          >
            <VStack
              w={'100%'}
              p={4}
            >
              <Text textAlign={'center'} fontWeight={'semibold'} fontSize={'16px'}>uPhone 14 Newbie Min</Text>
              <Text textAlign={'center'} fontSize={'13px'}>Warna Hitam Black Hole</Text>
            </VStack>
            <Image
              width={'200px'}
              src={'/product_example_phone_2.png'}
              preview={false}
              style={{
                borderRadius: '0px 0px 5px 5px'
              }}
            />
          </VStack>
        </HStack>
      </Flex>
    </>
  )
}


export default RectangleVer4Preview;