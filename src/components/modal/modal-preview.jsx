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
import FlashStylePreview from './preview-modals/flash-style-preview'
import NewStylePreview from './preview-modals/new-item-style-preview'

function ModalPreview({ isOpen, onClose, style, items }) {

  const NoStyleComponent = () => {
    return (
      <Text>You haven't choose any style</Text>
    )
  }

  return (
    <Modal size={'sm'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent bg={'brand.background'}>
        <ModalHeader>
          <ModalCloseButton colorScheme='brand.red'/>
        </ModalHeader>
        <ModalBody
          display={'flex'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          {
            style === '0' 
            ? (<FlashStylePreview items={items}/>)
            : style === '82' 
            ? (<NewStylePreview items={items}/>)
            : <NoStyleComponent />
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalPreview