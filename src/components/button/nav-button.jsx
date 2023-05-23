import { Button } from '@chakra-ui/react'
import React from 'react'

function NavButton({text, action, active}) {
  return (
    <Button
      variant={'link'}
      color={active ? 'brand.red' : 'black'}
      fontWeight={active ? 'semibold' : 'normal' }
      onClick={action}
    >
      {text}
    </Button>
  )
}

export default NavButton