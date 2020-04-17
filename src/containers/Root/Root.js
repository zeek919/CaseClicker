import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../components/Login/Login';
import style from './Root.scss';
import logo from '../../assets/images/Logo.png';

class Root extends Component {
    render() {
        return (
            <Router>
                <div className={style.root}>
                    <img src={logo} alt="logo" className={style.logo} />
                    <div>
                        <Login />
                    </div>
                </div>
                <Switch>
                    <Route exec path="/login">
                        {Login}
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default Root;
