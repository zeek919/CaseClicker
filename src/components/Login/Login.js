import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import style from './Login.scss';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import { login } from '../../services/firebaseInit';

const Login = withRouter(({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    const loginUser = async (emailValue, passwordValue) => {
        try {
            await login(emailValue, passwordValue);
            history.push('/home');
        } catch (errorValue) {
            catchError(errorValue.message);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.errorWrapper}>
                <p>{error}</p>
            </div>
            <form>
                <Input
                    label="LOGIN"
                    id="form__login"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <div className={style.margin}>
                    <Input
                        label="PASSWORD"
                        id="form__password"
                        type="password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                </div>
            </form>
            <div className="wrapper__button">
                <FormButton
                    content="LOGIN"
                    onClick={() => {
                        loginUser(email, password);
                    }}
                />
                <FormButton content="REGISTER" onClick={() => ''} />
            </div>
        </div>
    );
});

export default Login;
