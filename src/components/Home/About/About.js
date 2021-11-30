import React from 'react';
import './About.css';
import my from "../../../images/Fatema Akter.png";
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white text" >About</h1>
                    <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-5 pb-4 pb-lg-0 animate__animated animate__backInLeft">
                        <img className=" rounded w-75" src={my} alt="fatema" />
                    </div>
                    <div className="col-lg-7 animate__animated animate__backInRight">
                        <h3 className="mb-4">MERN STACK DEVELOPER</h3>
                        <p>Hello! This is Fatema Akter. I am a MERN Stack <strong> Web Developer</strong>. Currently I'm studying at Daffodil International University, Dept. of
                            Computer Science & Engineering (CSE).
                            I'm very passionate and dedicated to my work.I am honest and determined to ensure 100% quality for work.I am committed to deadline.</p>
                        <div className="row mb-3">
                            <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Fatema Akter</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">10 July, 1998</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Bachelor</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">1 Years</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+88 01796867568</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">fatemaakter4261@gmail.com</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">09 Holding,Amgacia,Nayarhat,Ashulia, Savar, Dhaka, Bangladesh</span></h6></div>
                            <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                        </div>
                        <Link to="" href="" className="btn blue btn-outline-primary mr-4">Hire Me</Link>
                        <Link to="" href="" className="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Learn More</Link>
                        <div className="collapse" id="collapseExample">
                            <div className="card card-body">
                                My job is to build your
                                website so that it is functional and user-friendly but at the same time attractive.I love to do hard work and it's an easy method to show my
                                creativity to others. Hope I
                                can help you to make an awesome website for your business.I have a strong passion for the
                                creativity and discipline .Clean code that is maintainable and readable.I am passionate to learn
                                more and get my skill sets more polished and learn new technology. <br /> I offer you unlimited
                                revision so that you are satisfied with my work. I’m looking for a challenging role in a reputable organization to utilize
                                my technical, database, and management skills for the growth of the organization as well as to
                                enhance my knowledge about new and emerging trends in the IT sector.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;