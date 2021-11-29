import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../../../images/fatema.png';
import resume from '../../../files/Fatema Akter.pdf';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container ">
                <Link to="/" className="navbar-brand"><img className="logo " src={logo} alt="logo" /></Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to='/home' className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/aboutme' className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/services' className="nav-link">Services</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/work' className="nav-link">How work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/portfolio' className="nav-link">Portfolio</Link>
                        </li>

                        <li className="nav-item">
                            <Link to='/contacts' className="nav-link">Contact Me</Link>
                        </li>

                    </ul>
                    <Link to={resume} target="_blank" className="btn1 fw-bold mt-2" download>My Resume <i className="fas fa-download text-white"></i></Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;