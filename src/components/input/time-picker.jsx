import React from 'react'
import { Divider, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, VStack } from '@chakra-ui/react';


function CTimePicker({ onChange }) {
  return (
    <HStack
      w={'100%'}
      spacing={'16px'}
    >
      <HStack>
        <span>Hour : </span>
        <NumberInput defaultValue={0} min={0} max={23} width={'90px'}>
          <NumberInputField/>
          <NumberInputStepper>
            <NumberIncrementStepper/>
            <NumberDecrementStepper/>
          </NumberInputStepper>
        </NumberInput>
      </HStack>
      <HStack>
        <span>Minute : </span>
        <NumberInput defaultValue={0} min={0} max={29} width={'90px'}>
          <NumberInputField/>
          <NumberInputStepper>
            <NumberIncrementStepper/>
            <NumberDecrementStepper/>
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </HStack>
  )
}

export default CTimePicker