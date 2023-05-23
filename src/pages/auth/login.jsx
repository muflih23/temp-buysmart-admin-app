import { Box, Card, CardBody, CardHeader, Flex, FormControl, Input, InputGroup, InputRightElement, Spacer, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import TextInput from '../../components/input/text-input'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import RegularButton from '../../components/button/regular-button';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const navigate = useNavigate();

  const [visible, setVisible] = useState(false);

  return (
    <Flex
      w={'100vw'}
      minH={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Stack 
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        spacing={2}
        w={'350px'}
      >
        <span 
          className='text-color-main text-semi-bold text-size-xl text-centered'
        >
          Welcome back !
        </span>
        <span 
          className='text-color-grey text-regular text-size-large text-centered'
        >
          Please login to continue to admin panel
        </span>
        <form style={{ width: "100%" }}>
          <Stack
            spacing={4}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            mt={8}
          >
            <TextInput
              placeholder={'Username'}
            />
            <InputGroup>
              <InputRightElement 
                onClick={() => setVisible(!visible)}
              >
                {
                  visible 
                  ? <ViewOffIcon color='brand.red'/>
                  : <ViewIcon color='brand.red'/>
                }
              </InputRightElement>
              <Input 
                type={visible ? 'text' : 'password'}
                focusBorderColor='brand.red'
                placeholder='Password'
                backgroundColor='brand.inputFill'
                _focus={{
                  backgroundColor: 'white',
                }}
              />
            </InputGroup>
            <Box h={8}/>
            <RegularButton 
              text={'Login'} 
              width={'100%'} 
              disabled={false}
              action={
                () => navigate('/dashboard')
              }
            />
          </Stack>
        </form>
      </Stack>
    </Flex>
  )
}

export default LoginPage