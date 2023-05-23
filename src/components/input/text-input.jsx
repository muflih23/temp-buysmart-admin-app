import { Input } from '@chakra-ui/react'
import React from 'react'

function TextInput({placeholder, onChange, width}) {
  return (
    <Input
      variant='outline'
      focusBorderColor='brand.red'
      placeholder={placeholder}
      onChange={onChange}
      maxW={width ? width : "auto"}
      backgroundColor='brand.inputFill'
      _focus={{ 
        backgroundColor: 'white',
       }}
    />
  )
}

export default TextInput