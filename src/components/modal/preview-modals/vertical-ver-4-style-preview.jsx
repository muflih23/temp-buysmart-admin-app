import { Flex, Grid, GridItem, HStack, VStack } from '@chakra-ui/react'
import { Image } from 'antd'
import React from 'react'

function HorizontalVer4Preview({ items }) {
  return (
    <Flex
      w={'100%'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Grid
        w={'100%'}
        h={'100%'}
        templateColumns='repeat(4, 1fr)'
        templateRows='repeat(2, 1fr)'
        gap={0}
        m={4}
      >
        <GridItem
          rowSpan={2}
          colSpan={2}
        >
          <Image
            src='/horizontalver4_main.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            style={{
              borderRadius: '5px 0 0 5px'
            }}
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
        >
          <Image 
            src='/horizontalver4_item1.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            style={{
              borderRadius: '0'
            }}
          />
        </GridItem>
        <GridItem
          rowSpan={1}
          colSpan={1}
        >
          <Image 
            src='/horizontalver4_item2.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            style={{
              borderRadius: '0 5px 0 0'
            }}
          />
        </GridItem>
        <GridItem
        >
          <Image 
            src='/horizontalver4_item3.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            style={{
              borderRadius: '0'
            }}
          />
        </GridItem>
        <GridItem
        >
          <Image 
            src='/horizontalver4_item4.png'
            width={'100%'}
            height={'100%'}
            preview={false}
            style={{
              borderRadius: '0 0 5px 0'
            }}
          />
        </GridItem>
      </Grid>
    </Flex>
  )
}

export default HorizontalVer4Preview