import { Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { FormLabel } from '@chakra-ui/react'

function FileUpload({placeholder, onChange, width, label}) {
  return (
    <Stack
      w={'100%'}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        type='file'
        color={'black'}
        variant='flushed'
        focusBorderColor='brand.red'
        placeholder={placeholder}
        onChange={onChange}
        maxW={width ? width : "auto"}
        backgroundColor='white'
        _focus={{ 
          backgroundColor: 'white',
        }}
      />
    </Stack>
  )
}

export default FileUpload