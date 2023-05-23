import { Button, Flex, HStack, IconButton, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import {IoIosClose, IoIosAdd} from 'react-icons/io'
import { useSelector, useDispatch } from 'react-redux'
import { setSectionList } from '../../../stores/data/actions'

function FormWithoutType({options, sectionItems, sectionIndex, handleAddSectionItem, handleRemoveSectionItem, setItemIdx, itemIdx, disabled}) {

  return (
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
  )
}

export default FormWithoutType