import React, { Suspense, useEffect, useState } from 'react';
import {
  ChakraProvider,
  extendTheme,
  Flex,
} from '@chakra-ui/react';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import routes from "./routes";
import OrganismLayout from './components/layout/organism-layout';
import { cardTheme } from './components/themes/card';
import { useDispatch, useSelector } from 'react-redux';
import { MultiSelectTheme } from 'chakra-multiselect';


const colors = {
  brand: {
    red: "#D8302F",
    grey: "#8C8984",
    lightGrey: "#f3f2f2",
    inputFill: "#f0f0f0",
    background: "#fdf6f6",
    cardBackground: "#f6d5d5",
    cardDarkBg: "#edabab",
    textRed: "#150404",
    transparentRed: "rgba(216, 48, 47,0.1)"
  }
}

const customTheme = extendTheme({
  colors,
  components: {
    Button : {
      baseStyle : {},
      variants : {
        'regular-button' : {
          bg: 'brand.red',
          color: 'white',
          _hover: {
            bg: 'white',
            color: 'brand.red',
            borderWidth: '1px',
            borderColor: 'brand.red'
          },
          _disabled: {
            bg: 'grey',
            color: 'white',
            _hover: {
              bg: 'gray',
              color: 'white',
              outlineColor: 'white',
            }
          }
        },
        'secondary-btn' : {
          bg: 'white',
          color: 'red',
          borderWidth: '1px',
          borderColor: 'brand.red',
          _hover : {
            bg: 'brand.red',
            color: 'white'
          },
        },
        'warning-button' : {
          bg: 'orange',
          color: 'white',
          _hover: {
            bg: 'orange',
            color: 'white'
          },
        },
        'disabled-button' : {
          bg: 'grey',
          color: 'white',
          _hover : {
            bg: 'grey',
            color: 'white',
          }
        }
      },
      defaultProps: {}
    },
    Card: cardTheme,
    MultiSelect: MultiSelectTheme,
  }
})

function App() {

  const dispatch = useDispatch();


  return (
    <ChakraProvider theme={customTheme} resetCSS>
      <Suspense 
        fallback={
          <Flex
            w={'100vw'}
            minH={'100vh'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <span>...Loading</span>
          </Flex>}
      >
        <Routes>
          {routes?.map((el,idx) => (
            <Route
              key={idx}
              path={el.path}
              element={el.isAuthorized === true 
              ? (
                <OrganismLayout>
                  <el.element
                    dispatch={dispatch}
                    useState={useState}
                    useEffect={useEffect}
                  />
                </OrganismLayout>
              ) : (
                <el.element />
              )}
            />
          ))}
        </Routes>
      </Suspense>
    </ChakraProvider>
  );
}

export default App;
