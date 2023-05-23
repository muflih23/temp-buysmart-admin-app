import { Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { FormLabel } from '@chakra-ui/react'

function InputWithLabel({placeholder, onChange, width, label}) {
  return (
    <Stack
      w={'100%'}
    >
      <FormLabel>{label}</FormLabel>
      <Input
        type='text'
        _placeholder={{
          color: 'brand.grey'
        }}
        color={'black'}
        variant='outline'
        focusBorderColor='brand.red'
        placeholder={placeholder}
        onChange={onChange}
        maxW={width ? width : "auto"}
        backgroundColor='brand.lightGrey'
        _focus={{ 
          backgroundColor: 'white',
        }}
      />
    </Stack>
  )
}

export default InputWithLabel