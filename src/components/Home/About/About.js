import React from 'react';
import './About.css';
import my from "../../../images/Fatema Akter.png";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <div className="row mt-5">
                <h2 className="text-center my-3 fw-bold about_me">About Me</h2>
                <div className="col-lg-6 animate__animated animate__backInLeft">
                    <img className="w-50 h-75 my_img mb-5" src={my} alt="" />
                </div>
                <div className="col-lg-5 animate__animated animate__backInRight">
                    <p className="mx-auto fw-bold about_text">Hello! This is Fatema Akter. I am a MERN Stack <strong> Web Developer</strong>. Currently I'm studying at Daffodil International University, Dept. of
                        Computer Science & Engineering (CSE). I'm very passionate and dedicated to my work. My job is to build your
                        website so that it is functional and user-friendly but at the same time attractive.I love to do hard work and it's an easy method to show my
                        creativity to others. Hope I
                        can help you to make an awesome website for your business.I have a strong passion for the
                        creativity and discipline .Clean code that is maintainable and readable.I am passionate to learn
                        more and get my skill sets more polished and learn new technology. I offer you unlimited
                        revision so that you are satisfied with my work. I am honest and determined to ensure 100%
                        quality for work. I am committed to deadline. I’m looking for a challenging role in a reputable organization to utilize
                        my technical, database, and management skills for the growth of the organization as well as to
                        enhance my knowledge about new and emerging trends in the IT sector. </p>
                </div>
            </div>
        </div>
    );
};

export default About;