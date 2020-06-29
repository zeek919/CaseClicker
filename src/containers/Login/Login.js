import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import { login } from '../../store/userData/operations';
import logo from '../../assets/images/Logo.png';
import getCasesData from '../../store/cases/operations';
import {
    Box,
    Wrapper,
    InsideWrapper,
    ErrorWrapper,
    ContentForm,
    ButtonWrapper,
} from './StyledComponents';

const Login = ({ history, loginUserAction, casesAction, cases }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    useEffect(() => {
        casesAction();
    }, []);

    const loginUser = async (emailValue, passwordValue) => {
        try {
            await loginUserAction(emailValue, passwordValue);
            history.push('/home');
        } catch (errorValue) {
            catchError(errorValue.message);
        }
    };

    return (
        <Box>
            {/*<img src={logo} alt="logo" className={style.logo} />*/}
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

const mapStateToProps = (state) => ({
    cases: state.casesReducer.cases[0],
});

export default React.memo(
    connect(mapStateToProps, {
        loginUserAction: (email, password) => login(email, password),
        casesAction: () => getCasesData(),
    })(withRouter(Login))
);
