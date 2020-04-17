import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Login.scss';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import actions from '../../store/account/actions';

const Login = (props) => {
    const changeEmail = (event) => {
        props.setEmail(event.target.value);
    };

    const changePassword = (event) => {
        props.setPassword(event.target.value);
    };

    return (
        <div className={style.wrapper}>
            <form>
                <Input label="LOGIN" id="form__login" onChange={changeEmail} />
                <div className={style.margin}>
                    <Input
                        label="PASSWORD"
                        id="form__password"
                        type="password"
                        onChange={changePassword}
                    />
                </div>
            </form>
            <div className="wrapper__button">
                <FormButton content="LOGIN" />
                <FormButton content="REGISTER" />
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    setEmail: (item) => dispatch(actions.setEmail(item)),
    setPassword: (item) => dispatch(actions.setPassword(item)),
});

Login.propTypes = {
    setEmail: PropTypes.func,
};

Login.defaultProps = {
    setEmail: '',
};

export default connect(null, mapDispatchToProps)(Login);
