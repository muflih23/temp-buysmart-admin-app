import { Button, Divider, Flex, HStack, IconButton, Radio, RadioGroup, Select, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import InputWithLabel from '../../input/text-input-with-label'
import { BsTrashFill } from 'react-icons/bs'
import RegularButton from '../../button/regular-button'
import GeneralStyleForm from './general-form'
import CatalogDefaultForm from './catalog-default-form'
import CategoryDefaultForm from './category-default-form'
import FormWithoutType from './form-without-type'
import Form4Limit from './form-4-items'
import Form5Limit from './form-5-items'

function SectionTemplateInput({ 
  styles, 
  types,
  radioState, 
  setRadioState, 
  removable,
  addBtnAction,
  addBtnVisibility, 
  sectionList,
  setSectionList,
  sectionItems,
  handleAddSectionItem,
  handleRemoveSectionItem,
  removeBtnAction,
  itemList,
  setItemIdx,
  itemIdx,
  sectionIndex,
  dispatch,
}) {

  return (
  <Flex
    key={sectionIndex}
    w={'100%'}
    p={4}
    backgroundColor={'brand.cardBackground'}
    borderRadius={'15px'}
  >
    <VStack
      w={'100%'}
      alignItems={'flex-start'}
      spacing={4}
    > 
      <HStack
        w={'100%'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Text fontWeight={'semibold'}>Section Definition</Text>
        <IconButton 
          display={removable === true ? 'flex' : 'none'} 
          variant={'secondary-btn'} 
          children={<BsTrashFill />}
          onClick={removeBtnAction}
        />
      </HStack>
      <InputWithLabel 
        label={'Name'}
        placeholder={'Hero section 1'}
      />
      <InputWithLabel 
        label={'Order'}
        placeholder={'2'}
      />
      <Text fontWeight={'semibold'}>Style</Text>
      <Select placeholder='Select Style Option'
        backgroundColor={'white'}
        focusBorderColor='brand.red'
        onChange={(e) => {
          const newList = [...sectionList];
          newList[sectionIndex].style = e.target.value;
          dispatch(setSectionList(newList));
        }}
      >
        {styles.map((style, index) => (
          <option value={style.id}>{style.label}</option>
        ))}
      </Select>
      <Text fontWeight={'semibold'}>Active ?</Text>
      <RadioGroup onChange={setRadioState} value={radioState}>
        <HStack>
          <Radio colorScheme='red' backgroundColor={'white'} value='1'>Yes</Radio>
          <Radio colorScheme='red' backgroundColor={'white'} value='0'>No</Radio>
        </HStack>
      </RadioGroup>
      { 
        sectionList[sectionIndex].style === '0' 
        || sectionList[sectionIndex].style === '82'
        ? (
            <FormWithoutType 
              options={itemList}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              sectionList={sectionList}
              sectionItems={sectionItems}
              sectionIndex={sectionIndex}
              handleAddSectionItem={handleAddSectionItem}
              handleRemoveSectionItem={handleRemoveSectionItem}
              disabled={sectionList[sectionIndex].style === '' ? true : false}
            />
          )
        : sectionList[sectionIndex].style === '50'
        ? (
            <Form4Limit 
              options={itemList}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              sectionList={sectionList}
              sectionItems={sectionItems}
              sectionIndex={sectionIndex}
              handleAddSectionItem={handleAddSectionItem}
              handleRemoveSectionItem={handleRemoveSectionItem}
              disabled={sectionList[sectionIndex].style === '' ? true : false}
            />            
          )
        : sectionList[sectionIndex].style === '51'
        ? (
            <Form5Limit
              options={itemList}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              sectionList={sectionList}
              sectionItems={sectionItems}
              sectionIndex={sectionIndex}
              handleAddSectionItem={handleAddSectionItem}
              handleRemoveSectionItem={handleRemoveSectionItem}
              disabled={sectionList[sectionIndex].style === '' ? true : false}
            />
          )
        : sectionList[sectionIndex].style === '21'
        ? (
            <CategoryDefaultForm
              options={itemList}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              sectionList={sectionList}
              sectionItems={sectionItems}
              sectionIndex={sectionIndex}
              handleAddSectionItem={handleAddSectionItem}
              handleRemoveSectionItem={handleRemoveSectionItem}
              disabled={sectionList[sectionIndex].style === '' ? true : false}
            />
          )
        : sectionList[sectionIndex].style === '20'
        ? (
           <CatalogDefaultForm
              options={itemList}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              sectionList={sectionList}
              sectionItems={sectionItems}
              sectionIndex={sectionIndex}
              handleAddSectionItem={handleAddSectionItem}
              handleRemoveSectionItem={handleRemoveSectionItem}
              disabled={sectionList[sectionIndex].style === '' ? true : false}
            />
          )
        : (
          <GeneralStyleForm
            options={itemList}
            itemIdx={itemIdx}
            setItemIdx={setItemIdx}
            sectionList={sectionList}
            sectionItems={sectionItems}
            sectionIndex={sectionIndex}
            handleAddSectionItem={handleAddSectionItem}
            handleRemoveSectionItem={handleRemoveSectionItem}
            disabled={sectionList[sectionIndex].style === '' ? true : false}
          />
        )
      }
      <Flex
        w={'100%'}
        justifyContent={'flex-end'}
      >
        <Button 
          variant={'regular-button'}
          display={addBtnVisibility === true ? 'flex' : 'none'}
          onClick={addBtnAction}
        >
          Add More Section
        </Button>
      </Flex>
    </VStack>
  </Flex>
  )
}

export default SectionTemplateInput