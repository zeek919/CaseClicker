import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import style from './Equipment.scss';

class Equipment extends Component {
    render() {
        return (
            <div className={style.wrapper}>
                <Navbar navHeadersArray={navbarHeaders} />
            </div>
        );
    }
}

export default Equipment;
