import { Flex, Stack } from '@chakra-ui/react'
import { Table } from 'antd';
import React from 'react'
import CustomIconButton from '../button/icon-button';
import { IoIosAddCircle, IoIosSettings } from 'react-icons/io';

function DatatableLayout({ columns, data, addBtnAction, settingBtnAction, items }) {

  const text = `Add New ${items}`;

  return (
    <Stack
      w={'100%'}
    >
      <Flex
        w={'100%'}
        justifyContent={'flex-end'}
        columnGap={'1rem'}
        mb={'1rem'}
      >
        <CustomIconButton
          action={addBtnAction}
          width={'auto'}
          text={text}
          icon={<IoIosAddCircle/>}
        />
        <CustomIconButton
          action={settingBtnAction}
          variant={'secondary'}
          width={'auto'}
          text={'Filter'}
          icon={<IoIosSettings/>}
        />
      </Flex>
      <Table columns={columns} dataSource={data} pagination={false} />
    </Stack>
  )
}

export default DatatableLayout