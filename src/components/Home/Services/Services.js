import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    return (
        <div className="container-fluid pt-5" id="service">
            <div className="container">
                <div className="service-h4 position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white" >Service</h1>
                    <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
                </div>
                <div className="row mx-auto">
                    <div className="service-box col-lg-4 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center mb-4">
                            <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                            <h4 className="font-weight-bold m-0">Responsive Design</h4>
                        </div>
                        <p>Responsive design is a graphic user interface (GUI) design approach used to create content that adjusts smoothly to various screen sizes.</p>
                    </div>
                    <div className="service-box col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center mb-4">
                            <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-2"></i>
                            <h4 className="font-weight-bold m-0">Web Design</h4>
                        </div>
                        <p>Web design refers to the design of websites that are displayed on the internet.</p>
                    </div>
                    <div className="service-box col-lg-4 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center mb-4">
                            <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                            <h4 className="font-weight-bold m-0">Web Developer</h4>
                        </div>
                        <p>A web developer is a programmer who specializes in, or is specifically engaged in, the development of World Wide Web applications using a client–server model.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Services;