import React from 'react'
import DatatableLayout from '../../../components/layout/datatable-layout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import ActionButton from '../../../components/button/action-button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCurrentPath } from '../../../stores/data/actions';
import ModifyTemplate from '../../../components/modal/modify-template';

function HomePage(props) {

  const { dispatch, useEffect, useState } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [ modifyType, setModifyType ] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { currentPath } = useSelector((state) => state.data);
  const { sectionList } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname))
  }, []);


  const columns = [
    {
      title: 'Detail',
      dataIndex: 'detail',
    },
    {
      title: 'Template Code',
      dataIndex: 'template_code',
    },
    {
      title: 'Template Name',
      dataIndex: 'template_name',
    },
    {
      title: 'Start Date',
      dataIndex: 'start_date'
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id, record) => (
        <Flex
          justifyContent={'flex-start'}
          alignItems={'center'}
          columnGap={'1rem'}
        >
          <ActionButton 
            action={
              () => {
                onOpen();
                setModifyType('edit');
              }
            }
            color={'orange'}
            text={'Edit'}
          />
          <ActionButton 
            color={'brand.red'}
            text={'Delete'}
          />
        </Flex>
      )
    },
  ];

  const dummydata = [
    {
      detail: 'detail',
      template_code: '001',
      template_name: 'Home Ver 1',
      start_date: '2023-04-02',
    },
    {
      detail: 'detail',
      template_code: '002',
      template_name: 'Home Ver 2',
      start_date: '2023-04-03',
    },
    {
      detail: 'detail',
      template_code: '003',
      template_name: 'Home Ver 3',
      start_date: '2023-04-04',
    },
  ];

  return (
    <>
      <DatatableLayout 
        addBtnAction={
          () => {
            onOpen();
            console.log(sectionList);
            setModifyType('add');
          }
        }
        items={'Template'}
        columns={columns}
        data={dummydata}
      />
      <ModifyTemplate 
        type={modifyType}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  )
}

export default HomePage