import { 
  ModalCloseButton, 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalBody, 
  Text, 
  ModalHeader
} from '@chakra-ui/react'
import React from 'react'

function ModalPreview({ isOpen, onClose  }) {
  return (
    <Modal size={'sm'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton colorScheme='brand.red'/>
        </ModalHeader>
        <ModalBody
          display={'flex'}
          w={'100%'}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text>Modal Preview Section</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalPreview