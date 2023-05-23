import { Button } from '@chakra-ui/react'
import React from 'react'

function SubNavButton({ text, action, active, displayCondition }) {
  return (
    <Button
      variant={'link'}
      color={active ? 'brand.red' : 'black'}
      paddingLeft={'1rem'}
      fontWeight={active ? 'semibold' : 'normal'}
      onClick={action}
      display={displayCondition}
    >
      {text}
    </Button>
  )
}

export default SubNavButton