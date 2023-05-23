import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

function CustomIconButton({action, type, text, width, disabled, icon, variant}) {
  return (
    <Button
      onClick={action}
      type={type}
      variant={
        variant === 'secondary' 
        ? "secondary-btn" 
        : "regular-button"
      }
      width={width ? width : '100%'}
      isDisabled={disabled === true ? true : false}
      columnGap={4}
    >
        {icon}
        <span>
          {text}
        </span>
    </Button>
  )
}

export default CustomIconButton