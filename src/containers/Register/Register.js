import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import style from './Register.scss';
import { register } from '../../services/firebaseInit';

const Register = withRouter(({ history }) => {
    const [nick, setNick] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    const signUp = async (nickValue, emailValue, passwordValue) => {
        try {
            await register(nickValue, emailValue, passwordValue);
        } catch (err) {
            catchError(err.message);
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.errorWrapper}>
                <p>{error}</p>
            </div>
            <form>
                <Input
                    label="NICK"
                    id="form__register--nick"
                    onChange={(e) => setNick(e.target.value)}
                />
                <div className={style.margin}>
                    <Input
                        label="E-MAIL"
                        id="form__register--email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.margin}>
                    <Input
                        label="PASSWORD"
                        id="form__register--password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            <div className={style.wrapper__button}>
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
            </div>
        </div>
    );
});

export default Register;
