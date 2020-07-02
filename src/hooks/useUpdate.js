import React, { useEffect } from 'react';
import { updateUserData } from '../store/userData/operations';
import { useDispatch } from 'react-redux';

const useUpdate = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        return () => dispatch(updateUserData());
    }, []);
};

export default useUpdate;
