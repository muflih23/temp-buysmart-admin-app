import { Button } from '@chakra-ui/react'
import React from 'react'

function RegularButton({action, type, text, width, disabled}) {
  return (
    <Button
      onClick={action}
      type={type}
      variant={'regular-button'}
      width={width ? width : '100%'}
      isDisabled={disabled === true ? true : false}
    >
      {text}
    </Button>
  )
}

export default RegularButton