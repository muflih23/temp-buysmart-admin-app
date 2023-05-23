import React from 'react'
import DatatableLayout from '../../../components/layout/datatable-layout';
import { Flex, useDisclosure } from '@chakra-ui/react';
import ActionButton from '../../../components/button/action-button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { setCurrentPath } from '../../../stores/data/actions';
import ModifyCatalog from '../../../components/modal/modify-catalog';

function Catalogs(props) {

  const navigate = useNavigate();

  const { dispatch, useEffect, useState } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const location = useLocation();
  
  const [ modifyType, setModifyType ] = useState(null);

  const { currentPath } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
  }, []);

  const columns = [
    {
      title: 'Catalog Name',
      dataIndex: 'catalog_name',
      width: '250px',
    },
    {
      title: 'Image',
      dataIndex: 'image',
      width: '150px',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: '350px',
    },
    {
      title: 'Price Parameter',
      dataIndex: 'price_parameter',
      width: '150px',
    },
    {
      title: 'Max Price',
      dataIndex: 'max_price',
      width: '150px',
    },
    {
      title: 'Categories',
      dataIndex: 'categories',
      width: '150px',
    },
    {
      title: 'Action',
      dataIndex: 'id',
      render: (id, record) => (
        <Flex
          justifyContent={'center'}
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
      catalog_name: 'Item Contoh 1',
      image: '-',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      price_parameter: 'No',
      max_price: 'IDR 25,000,000',
      categories: '-',
    },
    {
      id: '2',
      catalog_name: 'Item Contoh 1',
      image: '-',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      price_parameter: 'No',
      max_price: 'IDR 25,000,000',
      categories: '-',
    },
    {
      id: '3',
      catalog_name: 'Item Contoh 1',
      image: '-',
      description: 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
      price_parameter: 'No',
      max_price: 'IDR 25,000,000',
      categories: '-',
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
        items={'Catalog'}
        columns={columns}
        data={dummydata}
      />
      <ModifyCatalog 
        type={modifyType}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  )
}

export default Catalogs