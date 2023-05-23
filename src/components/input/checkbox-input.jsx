import { Input, Stack, Textarea, HStack, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { FormLabel } from '@chakra-ui/react'

function CheckboxInput({placeholder, onChange, width, label, options}) {
  return (
    <Stack
      w={'100%'}
    >
      <FormLabel>{label}</FormLabel>
      <HStack>
        { options?.map((opt, index) => (
          <Checkbox colorScheme='red' borderColor={'red'}>
            {opt.value}
          </Checkbox>
        )) }
      </HStack>
    </Stack>
  )
}

export default CheckboxInput