import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import style from './Login.scss';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
// import { login } from '../../services/firebaseInit';
import { login } from '../../store/userData/operations';
import logo from '../../assets/images/Logo.png';

const Login = ({ history, loginUserAction }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    const loginUser = async (emailValue, passwordValue) => {
        try {
            await loginUserAction(emailValue, passwordValue);
            history.push('/home');
        } catch (errorValue) {
            catchError(errorValue.message);
        }
    };

    return (
        <div className={style.box}>
            <img src={logo} alt="logo" className={style.logo} />
            <div className={style.wrapper}>
                <div className={style.errorWrapper}>
                    <p>{error}</p>
                </div>
                <form>
                    <Input
                        label="E-MAIL"
                        id="form__login--email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <div className={style.margin}>
                        <Input
                            label="PASSWORD"
                            id="form__login--password"
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                </form>
                <div className={style.wrapper__button}>
                    <FormButton
                        content="LOGIN"
                        onClick={async () => {
                            loginUser(email, password);
                        }}
                    />
                    <FormButton
                        content="REGISTER"
                        onClick={() => {
                            history.push('/register');
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default connect(null, {
    loginUserAction: (email, password) => login(email, password),
})(withRouter(Login));
