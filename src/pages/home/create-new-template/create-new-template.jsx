import React from 'react'
import { useLocation } from 'react-router-dom';
import { setCurrentPath } from '../../../stores/data/actions';
import { useSelector } from 'react-redux';

function CreateNewTemplate(props) {

  const { dispatch, useEffect, useState } = props;

  const location = useLocation();

  const { currentPath } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
  }, []);

  return (
    <div>Create New Template Page</div>
  )
}

export default CreateNewTemplate