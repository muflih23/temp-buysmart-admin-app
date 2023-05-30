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
import RectangleVer1Preview from './preview-modals/rectangle-ver1-preview'
import RectangleVer2Preview from './preview-modals/rectangle-ver2-preview'
import RectangleVer3Preview from './preview-modals/rectangle-ver3-preview'
import RectangleVer4Preview from './preview-modals/rectangle-ver4-preview'
import HorizontalFullPreview from './preview-modals/full-horizontal-style-preview'
import HorizontalRightPreview from './preview-modals/horizontal-right-style-preview'
import HorizontalLeftPreview from './preview-modals/horizontal-left-style-preview'
import Vertical1Preview from './preview-modals/vertical-ver-1-style-preview'
import Vertical2Preview from './preview-modals/vertical-ver-2-style-preview'

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
            : style === '50'
            ? (<RectangleVer1Preview items={items}/>)
            : style === '1'
            ? (<RectangleVer2Preview items={items}/>)
            : style === '6'
            ? (<RectangleVer3Preview items={items}/>)
            : style === '7'
            ? (<RectangleVer4Preview items={items}/>)
            : style === '2'
            ? (<HorizontalFullPreview items={items}/>)
            : style === '3'
            ? (<HorizontalRightPreview items={items}/>)
            : style === '4'
            ? (<HorizontalLeftPreview items={items}/>)
            : style === '13'
            ? (<Vertical1Preview items={items}/>)
            : style === '15'
            ? (<Vertical2Preview items={items}/>)
            : <NoStyleComponent />
          }
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default ModalPreview