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

function Circle2Preview({ items }) {
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
            w={'150px'}
            h={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'linear-gradient(221deg, rgba(169,3,3,1) 36%, rgba(53,1,1,1) 100%)'}
            borderRadius={'100%'}
            spacing={0}
          >
            <Text
              fontWeight={'normal'}
              color={'white'}
              fontSize={'16px'}
            >
              Harga
            </Text>
            <Text
              fontWeight={'semibold'}
              color={'white'}
              fontSize={'24px'}
            >
              250Ribu
            </Text>
          </VStack>
          <VStack
            w={'150px'}
            h={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'linear-gradient(221deg, rgba(169,3,3,1) 36%, rgba(53,1,1,1) 100%)'}
            borderRadius={'100%'}
            spacing={0}
          >
            <Text
              fontWeight={'normal'}
              color={'white'}
              fontSize={'16px'}
            >
              Harga
            </Text>
            <Text
              fontWeight={'semibold'}
              color={'white'}
              fontSize={'24px'}
            >
              250Ribu
            </Text>
          </VStack>
          <VStack
            w={'150px'}
            h={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'linear-gradient(221deg, rgba(169,3,3,1) 36%, rgba(53,1,1,1) 100%)'}
            borderRadius={'100%'}
            spacing={0}
          >
            <Text
              fontWeight={'normal'}
              color={'white'}
              fontSize={'16px'}
            >
              Harga
            </Text>
            <Text
              fontWeight={'semibold'}
              color={'white'}
              fontSize={'24px'}
            >
              250Ribu
            </Text>
          </VStack>
          <VStack
            w={'150px'}
            h={'150px'}
            justifyContent={'center'}
            alignItems={'center'}
            flexShrink={"0"}
            bg={'linear-gradient(221deg, rgba(169,3,3,1) 36%, rgba(53,1,1,1) 100%)'}
            borderRadius={'100%'}
            spacing={0}
          >
            <Text
              fontWeight={'normal'}
              color={'white'}
              fontSize={'16px'}
            >
              Harga
            </Text>
            <Text
              fontWeight={'semibold'}
              color={'white'}
              fontSize={'24px'}
            >
              250Ribu
            </Text>
          </VStack>
        </HStack>
      </Flex>
    </>
  )
}


export default Circle2Preview;