import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';
import style from './Root.scss';
import logo from '../../assets/images/Logo.png';

class Root extends Component {
    render() {
        return (
            <Router>
                <div className={style.root}>
                    <img src={logo} alt="logo" className={style.logo} />
                    <div>
                        {/* <Login /> */}

                        <Switch>
                            <Route exact path="/" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/home" component={Home} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Root;
