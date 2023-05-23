import React from 'react'
import DatatableLayout from '../../../components/layout/datatable-layout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import ActionButton from '../../../components/button/action-button';
import { useSelector } from 'react-redux';
import { setCurrentPath } from '../../../stores/data/actions';
import { useLocation, useNavigate } from 'react-router-dom';
import ModifyCategory from '../../../components/modal/modify-category';

function Categories(props) {

  const { useEffect, useState, dispatch } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();

  const [ modifyType, setModifyType ] = useState(null);

  const { currentPath } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
  }, []);

  const columns = [
    {
      title: 'Category Name',
      dataIndex: 'category_name',
    },
    {
      title: 'Category Description',
      dataIndex: 'description',
    },
    {
      title: 'Category Image',
      dataIndex: 'category_image',
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
      id: '1',
      category_name: 'fashion',
      description: 'lorem ipsum dolor sit amet',
      category_image: '-',
    },
    {
      id: '2',
      category_name: 'food and beverage',
      description: 'lorem ipsum dolor sit amet',
      category_image: '-',
    },
    {
      id: '3',
      category_name: 'furniture',
      description: 'lorem ipsum dolor sit amet',
      category_image: '-',
    },
  ];

  return (
    <>
      <DatatableLayout 
        addBtnAction={
          () => {
            onOpen();
            setModifyType('add');
          }
        }
        items={'Category'}
        columns={columns}
        data={dummydata}
      />
      <ModifyCategory 
        type={modifyType}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  )
}

export default Categories