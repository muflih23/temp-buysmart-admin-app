import React, { useEffect, useState } from 'react'
import ModifyModalLayout from '../layout/modal-layout'
import { Divider, HStack, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, VStack } from '@chakra-ui/react'
import InputWithLabel from '../input/text-input-with-label'
import AreaInput from '../input/text-area-input'
import FileUpload from '../input/file-upload-field'
import CheckboxInput from '../input/checkbox-input'
import CurrencyInput from '../input/currency-input'
import { MultiSelect } from 'chakra-multiselect'
import { SingleDatepicker } from 'chakra-dayzed-datepicker'
import { configs, propsConfig } from '../configs/datepicker'
import { DatePicker, DatePickerInput } from 'chakra-datetime-picker'
import CTimePicker from '../input/time-picker'
import SectionTemplateInput from './components/template-section-input'
import { setSectionList } from '../../stores/data/actions'
import { useDispatch, useSelector } from 'react-redux'

function ModifyTemplate({ isOpen, onOpen, onClose, type, }) {

  const [value, setValue] = useState([]);

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const [radioSelected, setRadioSelected] = useState('1');

  const [itemIdx, setItemIdx] = useState(null);

  const [selectedStyle, setSelectedStyle] = useState([]);

  const dispatch = useDispatch();

  const { sectionList } = useSelector((state) => state.data);

  useEffect(() => {
    const list = [
      {
        name: "",
        order: "",
        style: "",
        status: "",
        type: "",
        brand: "",
        items: [
          {
            item: ""
          },
        ],
      },
    ];
    dispatch(setSectionList(list));
  }, []);

  const handleAddSection = () => {
    const newList = [...sectionList, {
      name: "",
      order: "",
      style: "",
      status: "",
      type: "",
      brand: "",
      items: [
        {
          item: ""
        },
      ],
    }];
    dispatch(setSectionList(newList));
  };

  const handleRemoveSection = (index) => {
    const newList = [...sectionList];
    newList.splice(index, 1);
    dispatch(setSectionList(newList));
  };

  const handleAddSectionItems = (sectionIndex) => {
    const newList = [...sectionList];
    //console.log(newList);

    const sectionItems = newList[sectionIndex].items;
    //console.log(sectionItems);

    const newSectionItems = [...sectionItems, {
      item: "",
    }];

    newList[sectionIndex].items = newSectionItems;
    //console.log(newList[sectionIndex]);

    dispatch(setSectionList(newList));
    //console.log(sectionList);
  };

  const handleRemoveSectionItem = (sectionIndex) => {
    //console.log(indexItem);
    const newList = [...sectionList];

    const sectionItems = [...newList[sectionIndex].items];
    //console.log(sectionItems);

    sectionItems.splice(itemIdx, 1);
    //console.log(sectionItems);

    newList[sectionIndex].items = sectionItems;

    dispatch(setSectionList(newList));
    
    //console.log(itemIdx);
    //console.log(sectionIndex);
  };

  const option = [
    {
      value: 'Yes'
    },
  ];

  const tags = [
    { value: 'Category 1' },
    { value: 'Category 2' },
    { value: 'Category 3' },
    { value: 'Category 4' },
    { value: 'Category 5' },
    { value: 'Category 6' },
    { value: 'Category 7' },
    { value: 'Category 8' },
  ]

  const styles = [
    {
      label: 'Flash Sale',
      id: '0',
    },
    {
      label: 'New',
      id: '82',
    },
    {
      label: 'Rectangle Ver 1',
      id: '50',
    },
    {
      label: 'Rectangle Ver 2',
      id: '1',
    },
    {
      label: 'Rectangle Ver 3',
      id: '6',
    },
    {
      label: 'Rectangle Ver 4',
      id: '7',
    },
    {
      label: 'Horizontal Full',
      id: '2',
    },
    {
      label: 'Horizontal Text on Right',
      id: '3',
    },
    {
      label: 'Horizontal Text on Left',
      id: '4',
    },
    {
      label: 'Horizontal Ver 4',
      id: '51',
    },
    {
      label: 'Vertical Ver 1',
      id: '13',
    },
    {
      label: 'Vertical Ver 2',
      id: '15',
    },
    {
      label: 'Vertical ver 3',
      id: '12',
    },
    {
      label: 'Square Ver 1',
      id: '14',
    },
    {
      label: 'Circle Ver 1',
      id: '21',
    },
    {
      label: 'Circle Ver 2',
      id: '20',
    },
  ];

  const types = [
    { value: 'Product' },
    { value: 'Category' },
    { value: 'Brand' },
    { value: 'Catalog' },
  ];

  const products = [
    { value: 'Item A' },
    { value: 'Item B' },
    { value: 'Item C' },
  ]

  return (
    <ModifyModalLayout 
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      type={type}
      title={type === 'add' ? 'Add New Template' : 'Edit Existing Template'}
    >
      <form>
        <VStack alignItems={'flex-start'} spacing={8} w={'100%'}>
          <InputWithLabel 
            label={'Template Code'}
            placeholder={'example: 001'}
          />
          <InputWithLabel 
            label={'Template Name'}
            placeholder={'example : Home Template 001'}
          />
          <AreaInput 
            label={'Template Description'}
            placeholder={'Template Description Here'}
          />
          <span>When is this template active ?</span>
          <SingleDatepicker 
            name='date-input'
            date={date}
            onDateChange={setDate}
            configs={configs}
            propsConfigs={propsConfig}
          />
          <CTimePicker />
          {sectionList.map((section, index) => (
            <SectionTemplateInput 
              key={index}
              types={types}
              styles={styles}
              itemList={products}
              dispatch={dispatch}
              radioState={radioSelected}
              setRadioState={setRadioSelected}
              sectionList={sectionList}
              setSectionList={setSectionList}
              sectionIndex={index}
              sectionItems={sectionList[index].items}
              itemIdx={itemIdx}
              setItemIdx={setItemIdx}
              handleAddSectionItem={() => handleAddSectionItems(index)}
              handleRemoveSectionItem={() => handleRemoveSectionItem(index)}
              removable={sectionList.length > 1 ? true : false}
              addBtnAction={handleAddSection}
              addBtnVisibility={sectionList.length - 1 === index ? true : false}
              removeBtnAction={() => handleRemoveSection(index)}
            />
          ))}
        </VStack>
      </form>
    </ModifyModalLayout>
  )
}

export default ModifyTemplate