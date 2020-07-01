import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Home from '../Home/Home';
import Equipment from '../Equipment/Equipment';
import Cases from '../Cases/Cases';
import Shop from '../Shop/Shop';
import Upgrades from '../Upgrades/Upgrades';
import style from './Root.scss';

class Root extends PureComponent {
    render() {
        return (
            <div className={style.root}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/home" component={Home} />
                        <Route path="/equipment" component={Equipment} />
                        <Route path="/cases" component={Cases} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/upgrades" component={Upgrades} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Root;
