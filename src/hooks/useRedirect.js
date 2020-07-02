import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useRedirect = () => {
    const history = useHistory();
    const user = useSelector((state) => state.userDataReducer.userName);
    if (user === '') {
        history.push('/');
    }
};

export default useRedirect;
