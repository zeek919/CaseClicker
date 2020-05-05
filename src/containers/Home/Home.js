import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';
import style from './Home.scss';

const Home = () => (
    <div className={style.wrapper}>
        <Navbar navHeadersArray={navbarHeaders} />
    </div>
);

export default Home;
