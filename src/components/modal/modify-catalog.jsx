import React, { useState } from 'react'
import ModifyModalLayout from '../layout/modal-layout'
import { HStack, VStack } from '@chakra-ui/react'
import InputWithLabel from '../input/text-input-with-label'
import AreaInput from '../input/text-area-input'
import FileUpload from '../input/file-upload-field'
import CheckboxInput from '../input/checkbox-input'
import CurrencyInput from '../input/currency-input'
import Select from 'react-select';
import { MultiSelect } from 'chakra-multiselect'

function ModifyCatalog({ isOpen, onOpen, onClose, type, }) {

  const [value, setValue] = useState([]);

  const option = [
    {
      value: 'Yes'
    },
  ]

  const tags = [
    { value: 'Category 1' },
    { value: 'Category 2' },
    { value: 'Category 3' },
    { value: 'Category 4' },
    { value: 'Category 5' },
    { value: 'Category 6' },
    { value: 'Category 7' },
    { value: 'Category 8' },
  ]

  return (
    <ModifyModalLayout 
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      type={type}
      title={type === 'add' ? 'Add New Catalog' : 'Edit Existing Catalog'}
    >
      <form>
        <VStack alignItems={'flex-start'} spacing={8} w={'100%'}>
          <InputWithLabel 
            label={'Catalog Name'}
            placeholder={'example : Big Book Sale'}
          />
          <FileUpload 
            label={'Upload Image'}
            placeholder={'Upload image here'}
          />
          <AreaInput 
            label={'Short Description'}
            placeholder={'Catalog Description Here'}
          />
          <CheckboxInput 
            label={'Price Parameter'}
            options={option}
          />
          <CurrencyInput 
            label={'Max Price'}
            placeholder={'Maximum price for this catalog'}
          />
          <MultiSelect minWidth={'100%'} options={tags} value={value} label='Link To :' onChange={setValue}/>
        </VStack>
      </form>
    </ModifyModalLayout>
  )
}

export default ModifyCatalog