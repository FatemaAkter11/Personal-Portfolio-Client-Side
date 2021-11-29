import React from 'react';
import './Banner.css';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner">
            <div className="animate__animated animate__backInDown banner-main">
                <h1 className="fw-bolder title">Hello, This is <span className="fw-bolder text">Fatema Akter</span> <br /> And I am a ...</h1>
                <Typed
                    className="typed-text fw-bolder"
                    strings={[' Web Designer', 'Frontend Developer', 'Junior Web Developer', 'MERN Stack Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
                <Link to='/contacts' className="btn fw-bold mt-2">Contact Me</Link>
            </div>
        </div>
    );
};

export default Banner;