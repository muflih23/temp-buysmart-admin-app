import { Flex, Stack, Image, Button, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavButton from '../../button/nav-button'
import SubNavButton from '../../button/sub-nav-button'
import { useLocation, useNavigate } from 'react-router-dom'
import RegularButton from '../../button/regular-button'
import { useSelector } from 'react-redux'
import { setCurrentPath } from '../../../stores/data/actions'

function Sidebar() {

  const navigate = useNavigate();
  
  const { currentPath } = useSelector((state) => state.data);

  return (
    <Flex
      w={'300px'}
      h={'100vh'}
      p={'1.5rem'}
      justifyContent={'center'}
      position={'sticky'}
    >
      <Stack
        display={'flex'}
        alignItems={'center'}
        w={'100%'}
      >
        <Image 
          boxSize='100px'
          objectFit='cover'
          src='/Ramblalogo-15.jpg'
          alt='Rambla logo'
          mb={'1rem'}
        />
        <Stack
          display={'flex'}
          alignItems={'flex-start'}
          w={'100%'}
          spacing={4}
        >
          <NavButton 
            action={
              () => {
                navigate('/dashboard');
              }
            }
            active={currentPath === '/dashboard' ? true : false}
            text={'Templates List'}
          />
          <SubNavButton 
            action={
              () => {
                navigate('/new-template');
              }
            }
            active={currentPath === '/new-template' ? true : false}
            text={'+ Create New Template'}
            displayCondition={currentPath === '/new-template' ? 'flex' : 'none'}
          />
          <NavButton
            action={
              () => {
                navigate('/catalog-list');
              }
            }
            active={currentPath === '/catalog-list' ? true : false}
            text={'Catalogs List'}
          />
          <SubNavButton 
            action={
              () => {
                navigate('/new-catalog');
              }
            }
            active={currentPath === '/new-catalog' ? true : false}
            text={'+ Create New Catalog'}
            displayCondition={currentPath === '/new-catalog' ? 'flex' : 'none'}
          />
          <NavButton 
            action={
              () => {
                navigate('/category-list');
              }
            }
            active={currentPath === '/category-list' ? true : false}
            text={'Categories List'}
          />
          <SubNavButton 
            action={
              () => {
                navigate('/new-category');
              }
            }
            active={currentPath === '/new-category' ? true : false}
            text={'+ Create New Category'}
            displayCondition={currentPath === '/new-category' ? 'flex' : 'none'}
          />
        </Stack>
        <Box h={'5rem'}/>
        <RegularButton 
          text={'Log Out'}
          action={
            () => navigate('/')
          }
        />
      </Stack>
    </Flex>
  )
}

export default Sidebar