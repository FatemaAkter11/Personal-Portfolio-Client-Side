import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-5">
                            <div className="left-container text-start">
                                <div className="mt-3 text-white fw-bold">
                                    <h2>Follow Me</h2>
                                </div>
                                <div className="phone mt-4">
                                    <h5><i className="fas fa-phone-volume"></i> 01796867568</h5>
                                </div>
                                <div className="phone mt-4">
                                    <h5><i className="fas fa-envelope"></i> fatemaakter4261@gmail.com</h5>
                                </div>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-facebook"></i>
                                    </div>
                                    <div className="icon">
                                        <i className="fab fa-youtube"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="right-footer-container text-white fw-bold">
                                <h2>Newsletter</h2>
                                <h3>Sign up for news and updates.</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Please Enter Your Email"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="mt-5 text-white fw-bold">
                        <p>©All rights reserved Fatema Akter.Privacy Policy Terms & Condition</p></p>
                </div>
            </div>
        </div >
    );
};

export default Footer;