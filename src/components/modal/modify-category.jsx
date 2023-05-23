import React from 'react'
import ModifyModalLayout from '../layout/modal-layout'
import { VStack } from '@chakra-ui/react'
import InputWithLabel from '../input/text-input-with-label'
import AreaInput from '../input/text-area-input'
import FileUpload from '../input/file-upload-field'

function ModifyCategory({ isOpen, onOpen, onClose, type }) {
  return (
    <ModifyModalLayout 
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      type={type}
      title={type === 'add' ? 'Add New Category' : 'Edit Existing Category'}
    >
      <form>
        <VStack alignItems={'flex-start'} spacing={8}>
          <InputWithLabel 
            label={'Category Name'}
            placeholder={'example : Big Book Sale'}
          />
          <AreaInput 
            label={'Category Description'}
            placeholder={'Big Book Sale Description'}
          />
          <FileUpload 
            label={'Category Image'}
            placeholder={'Upload image here'}
          />
        </VStack>
      </form>
    </ModifyModalLayout>
  )
}

export default ModifyCategory