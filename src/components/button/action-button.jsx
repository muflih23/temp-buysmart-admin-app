import { Button } from '@chakra-ui/react'
import React from 'react'

function ActionButton({ text, action, width, color }) {
  return (
    <Button
      size={'sm'}
      color={'white'}
      onClick={action}
      width={width ? width : 'auto'}
      backgroundColor={color}
      _hover={{
        backgroundColor: color,
        color: 'white',
      }}
    >
      {text}
    </Button>
  )
}

export default ActionButton