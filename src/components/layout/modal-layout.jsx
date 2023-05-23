import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
} from '@chakra-ui/react'

function ModifyModalLayout({ isOpen, onClose, title, children, type }) {
  return (
    <Modal size={'xl'} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        color={'brand.textRed'}
      >
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton 
          color={'brand.red'}
          _hover={{
            bg: 'brand.red',
            color: 'white',
          }}
        />
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <HStack>
            <Button variant={'regular-button'}>Add</Button>
            <Button variant={'secondary-btn'} onClick={onClose}>Cancel</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModifyModalLayout