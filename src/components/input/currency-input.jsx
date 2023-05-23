import { FormHelperText, Input, InputGroup, InputLeftAddon, InputRightAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FormLabel } from '@chakra-ui/react'

function CurrencyInput({placeholder, onChange, width, label}) {
  return (
    <Stack
      w={'100%'}
    >
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <InputLeftAddon children={'IDR'}/>
        <Input
          type='number'
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
      </InputGroup>
      <span style={{ color: "#6b6b6b" }}>{"Input the price with number only, without decimals(,) or points(.)"}</span>
    </Stack>
  )
}

export default CurrencyInput