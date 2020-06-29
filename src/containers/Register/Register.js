import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import { connect } from 'react-redux';
import logo from '../../assets/images/Logo.png';
import { register } from '../../store/userData/operations';
import {
    Box,
    Wrapper,
    InsideWrapper,
    ButtonWrapper,
    ContentForm,
    ErrorWrapper,
} from './StyledComponents';

const Register = withRouter(({ history, registerAction }) => {
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    const signUp = async (nickValue, emailValue, passwordValue) => {
        try {
            await registerAction(nickValue, emailValue, passwordValue);
        } catch (err) {
            catchError(err.message);
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
                            label="NICK"
                            onChange={(e) => setNick(e.target.value)}
                        />

                        <Input
                            label="E-MAIL"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <Input
                            label="PASSWORD"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </ContentForm>
                    <ButtonWrapper>
                        <FormButton
                            content="LOGIN"
                            onClick={() => {
                                history.push('/');
                            }}
                        />
                        <FormButton
                            content="REGISTER"
                            onClick={() => signUp(nick, email, password)}
                        />
                    </ButtonWrapper>
                </InsideWrapper>
            </Wrapper>
        </Box>
    );
});

export default React.memo(
    connect(null, {
        registerAction: (nick, email, password) =>
            register(nick, email, password),
    })(Register)
);
