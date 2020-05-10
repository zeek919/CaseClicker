import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../store/userData/actions';
import style from './Login.scss';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import { login } from '../../services/firebaseInit';
import logo from '../../assets/images/Logo.png';

const Login = withRouter(({ history, setUserData }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, catchError] = useState('');

    const loginUser = async (emailValue, passwordValue) => {
        try {
            const loggedUser = await login(emailValue, passwordValue);
            const { money, currentTap, experience, items } = loggedUser;
            setUserData({ money, currentTap, experience, items });
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
});

const mapDispatchToProps = (dispatch) => ({
    setUserData: (item) => dispatch(actions.setUserData(item)),
});

export default connect(null, mapDispatchToProps)(Login);
