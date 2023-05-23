import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './components/side-bar'
import { useLocation } from 'react-router-dom'

function OrganismLayout({children}) {

  const location = useLocation();

  return (
    <Flex
      w={'100vw'}
      minH={'100vh'}
    >
      <Sidebar />
      <Flex
        w={'100%'}
        direction={'column'}
        backgroundColor='brand.background'
        p={'2rem'}
      >
        <Flex
          w={'100%'}
          mb={'3rem'}
        >
          <Text color={'brand.textRed'} fontSize={'24px'} fontWeight={'semibold'}>{
            location.pathname === '/dashboard' 
            ? "Templates List"
            : location.pathname === '/new-template'
            ? "Create New Template" 
            : location.pathname === '/catalog-list'
            ? "Catalogs List"
            : location.pathname === '/new-catalog'
            ? "Create New Catalog"
            : location.pathname === '/category-list'
            ? "Categories List" 
            : location.pathname === '/new-category'
            ? "Create New Category"
            : "Page Title"
          }</Text>
        </Flex>
        {children}
      </Flex>
    </Flex>
  )
}

export default OrganismLayout