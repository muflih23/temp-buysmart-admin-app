import { Button, Flex, HStack, IconButton, Select, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {IoIosClose, IoIosAdd} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { setSectionList } from '../../../stores/data/actions'

function CatalogDefaultForm({options, sectionItems, sectionIndex, handleAddSectionItem, handleRemoveSectionItem, setItemIdx, itemIdx, disabled}) {

  const [selected, setSelected] = useState('');

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
          defaultValue={'Catalog'}
          onChange={(e)=> setSelected(e.target.value)}
          disabled={disabled}
        >
          <option value='Brand'>Brand</option>
          <option value='Category'>Category</option>
          <option value='Catalog'>Catalog</option>
        </Select>
        <Select 
          display={selected === 'Brand' ? 'flex' : 'none'}
          placeholder='Select Brand' 
          bg={'white'} 
          focusBorderColor='brand.red' 
          onChange={(e)=> setSelected(e.target.value)}
          disabled={disabled}
        >
          <option value='Brand A'>Brand</option>
          <option value='Brand B'>Category</option>
          <option value='Brand C'>Catalog</option>
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
                <Select placeholder='Select Item' bg={'white'} focusBorderColor='red' disabled={disabled}>
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
          >
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
    </>
  )
}

export default CatalogDefaultForm