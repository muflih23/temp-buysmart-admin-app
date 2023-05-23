import React from 'react'
import { useLocation } from 'react-router-dom';
import { setCurrentPath } from '../../../stores/data/actions';
import { useSelector } from 'react-redux';

function CreateNewCategory(props) {

  const location = useLocation();

  const { useEffect, useState, dispatch } = props;

  const { currentPath } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(setCurrentPath(location.pathname));
  }, []);

  return (
    <div>Create New Category Page</div>
  )
}

export default CreateNewCategory