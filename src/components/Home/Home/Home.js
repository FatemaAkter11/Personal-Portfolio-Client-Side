import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import About from '../About/About';
import Banner from '../Banner/Banner';



const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;