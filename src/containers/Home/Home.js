import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import navbarHeaders from '../../constants/navbarHeaders';

const Home = () => (
    <div>
        <Navbar navHeadersArray={navbarHeaders} />
    </div>
);

export default Home;
