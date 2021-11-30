import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <div className="container-fluid py-5" id="skill">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white text1">Skills</h1>
                    <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">HTML</h6>
                                <h6 className="font-weight-bold">95%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '95%' }} className="progress-bar bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">CSS</h6>
                                <h6 className="font-weight-bold">85%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '85%' }} className="progress-bar bg-info" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">JAVASCRIPT</h6>
                                <h6 className="font-weight-bold">80%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '80%' }} className="progress-bar bg-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">BOOTSTRAP</h6>
                                <h6 className="font-weight-bold">90%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '90%' }} className="progress-bar bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">TAILWIND</h6>
                                <h6 className="font-weight-bold">85%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '85%' }} className="progress-bar bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">MATERIAL UI</h6>
                                <h6 className="font-weight-bold">75%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '75%' }} className="progress-bar bg-danger" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">NODE JS</h6>
                                <h6 className="font-weight-bold">95%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '95%' }} className="progress-bar bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className="skill mb-4">
                            <div className="d-flex justify-content-between">
                                <h6 className="font-weight-bold">MONGODB</h6>
                                <h6 className="font-weight-bold">98%</h6>
                            </div>
                            <div className="progress">
                                <div style={{ width: '98%' }} className="progress-bar bg-info" role="progressbar" aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;