import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import OwnedSkinBoxes from '../../components/OwnedSkinBoxes/OwnedSkinBoxes';
import style from './Equipment.scss';

class Equipment extends Component {
    render() {
        return (
            <>
                <Navbar navHeadersArray={navbarHeaders} />
                <div className={style.wrapper}>
                    <div className={style.insideWrapper}>
                        <div className={style.header}>Equipment</div>
                        <div className={style.caseWrapper}>
                            <OwnedSkinBoxes />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Equipment;
