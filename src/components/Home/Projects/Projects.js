import React from 'react';
import './Projects.css';
import chobirhaat from "../../../images/projects/chobirhaat.png";
import pottery from "../../../images/projects/pottery.png";
import hungrynaki from "../../../images/projects/hungrynaki.png";
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="container">
            <div className="service-h4 position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >Project</h1>
                <h1 className="position-absolute text-uppercase text-primary">Project Area</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                <div className="col">
                    <div className="card h-100">
                        <img src={chobirhaat} className="card-img-top" alt="chobirhaat" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold"> Chobirhaat</h5>
                            <p className="card-text">Chobirhaat is a website which is providing different photos items. </p>
                            <Link to="/projects/1"><button className="btn1 btn-primary text-white fw-bold">Project Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={pottery} className="card-img-top" alt="pottery" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Dream Street Pottery</h5>
                            <p className="card-text">A dream street pottery website which is providing different pottery items.
                            </p>
                            <Link to=""><button className="btn1 btn-primary fw-bold">Project Details</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={hungrynaki} className="card-img-top" alt="hungrynaki" />
                        <div className="card-body">
                            <h5 className="card-title fw-bold">Hungry Naki?</h5>
                            <p className="card-text">A hungry naki website which is providing different country food items.</p>
                            <Link to=""><button className="btn1 btn-primary text-white fw-bold">Project Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;