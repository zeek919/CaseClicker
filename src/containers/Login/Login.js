import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import { login } from '../../store/userData/operations';
import getCasesData from '../../store/cases/operations';
import {
    Box,
    Wrapper,
    InsideWrapper,
    ErrorWrapper,
    ContentForm,
    ButtonWrapper,
} from './StyledComponents';
import setUpgradesData from '../../store/upgrades/operations';

const Login = ({ history }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    useEffect(() => {
        dispatch(getCasesData());
        dispatch(setUpgradesData());
    }, []);

    const loginUser = async (emailValue, passwordValue) => {
        try {
            await dispatch(login(emailValue, passwordValue));
            history.push('/home');
        } catch (errorValue) {
            catchError(errorValue.message);
        }
    };

    return (
        <Box>
            <Wrapper>
                <InsideWrapper>
                    <ErrorWrapper>
                        <p>{error}</p>
                    </ErrorWrapper>
                    <ContentForm>
                        <Input
                            label="E-MAIL"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Input
                            label="PASSWORD"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </ContentForm>
                    <ButtonWrapper>
                        <FormButton
                            content="LOGIN"
                            onClick={async () => {
                                await loginUser(email, password);
                            }}
                        />
                        <FormButton
                            content="REGISTER"
                            onClick={() => {
                                history.push('/register');
                            }}
                        />
                    </ButtonWrapper>
                </InsideWrapper>
            </Wrapper>
        </Box>
    );
};

export default React.memo(withRouter(Login));
