import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;