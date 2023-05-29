import { Button, Flex, HStack, IconButton, Select, VStack, Text, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import {IoIosClose, IoIosAdd} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { setSectionList } from '../../../stores/data/actions'
import ModalPreview from '../modal-preview'

function Form4Limit({options, sectionItems, sectionIndex, handleAddSectionItem, handleRemoveSectionItem, setItemIdx, itemIdx, disabled}) {

  const [selected, setSelected] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(null);

  const { isOpen: isPreviewOpen, onOpen: onPreviewOpen, onClose: onPreviewClose } = useDisclosure();

  const { sectionList } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  return (
    <>
      <Text fontWeight={'semibold'}>Type</Text>
      <HStack
        w={'100%'}
      >
        <Select 
          maxW={'50%'}
          placeholder='Select Type' 
          bg={'white'} 
          focusBorderColor='brand.red' 
          defaultValue={sectionList[sectionIndex]["type"]}
          onChange={(e)=> {
            const newList = [...sectionList]
            newList[sectionIndex]["type"] = e.target.value;
            dispatch(setSectionList(newList));
          }}
          disabled={disabled}
        >
          <option value='Brand'>Brand</option>
          <option value='Category'>Category</option>
          <option value='Catalog'>Catalog</option>
          <option value='Product'>Product</option>
        </Select>
        <Select 
          display={sectionList[sectionIndex]["type"] === 'Brand' ? 'flex' : 'none'}
          placeholder='Select Brand' 
          bg={'white'} 
          focusBorderColor='brand.red' 
          defaultValue={sectionList[sectionIndex]["brand"]}
          onChange={(e)=> {
            const newList = [...sectionList]
            newList[sectionIndex]["brand"] = e.target.value;
            dispatch(setSectionList(newList));
          }}
          disabled={disabled}
        >
          <option value='Brand A'>Brand A</option>
          <option value='Brand B'>Brand B</option>
          <option value='Brand C'>Brand C</option>
        </Select>
      </HStack>
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
                  onChange={(e) => {
                    const newList = [...sectionList];
                    newList[sectionIndex]["items"][idx] = e.target.value;
                    dispatch(setSectionList(newList));
                    //console.log(sectionList);
                  }}
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
              display={sectionItems.length === 4 ? 'none' : 'flex'}
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
        style={sectionList[sectionIndex]["style"]}
        items={sectionList[sectionIndex]["items"]}
      />
    </>
  )
}

export default Form4Limit