import { Button, Flex, HStack, IconButton, Modal, ModalBody, ModalContent, ModalOverlay, Select, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {IoIosClose, IoIosAdd} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { setSectionList } from '../../../stores/data/actions'
import ModalPreview from '../modal-preview'

function FormWithoutType({
  options, 
  sectionItems, 
  sectionIndex, 
  handleAddSectionItem, 
  handleRemoveSectionItem, 
  setItemIdx, 
  itemIdx, 
  disabled
}) {

  const { isOpen: isPreviewOpen, onOpen: onPreviewOpen, onClose: onPreviewClose } = useDisclosure();

  const { sectionList } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <Flex
        w={'100%'}
        p={4}
        borderRadius={'7px'}
        bg={'brand.cardDarkBg'}
      > 
        <VStack
          w={'100%'}
        >
          {sectionItems.map((item, idx) => (
            <>
              <HStack
                w={'100%'}
                spacing={2}
              >
                <Select 
                  placeholder='Select Item' 
                  bg={'white'} 
                  focusBorderColor='red' 
                  defaultValue={sectionList[sectionIndex]["items"][idx]}
                  disabled={disabled}
                  onChange={
                    (e) => {
                      const newList = [...sectionList];
                      newList[sectionIndex]["items"][idx] = e.target.value;
                      dispatch(setSectionList(newList));
                      //console.log(newList);
                      //console.log(sectionList[sectionIndex]["items"][idx]);
                    }
                  }
                >
                  {options.map((opt, idx) => (
                    <option value={opt.value}>{opt.value}</option>
                  ))}
                </Select>
                <IconButton 
                  colorScheme='red' 
                  children={<IoIosClose size={'25px'}/>}
                  onClick={() => {
                    setItemIdx(idx)
                    handleRemoveSectionItem(sectionIndex)
                  }}
                  display={sectionItems.length === 1 ? 'none' : 'flex'}
                />
              </HStack>
            </>
          ))}
          <Flex
            w={'100%'}
            justifyContent={'flex-end'}
            columnGap={4}
          >
            <Button 
              variant={'solid'} 
              color={'teal'}
              bg={'white'}
              onClick={onPreviewOpen}
              isDisabled={disabled}
            >
              Preview Section
            </Button>
            <Button 
              variant={'solid'} 
              colorScheme='teal' 
              onClick={handleAddSectionItem}
              isDisabled={disabled}
            >
              Add Item
            </Button>
          </Flex>
        </VStack>
      </Flex>
      <ModalPreview 
        onClose={onPreviewClose}
        isOpen={isPreviewOpen}
      />
    </>
  )
}

export default FormWithoutType