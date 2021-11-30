import React from 'react';
import './Portfolio.css';
import portfolio1 from "../../../images/projects/chobirhaat.png";
import portfolio2 from "../../../images/projects/pottery.png";
import portfolio3 from "../../../images/projects/hungrynaki.png";
import portfolio4 from "../../../images/projects/trust-health.png";
import portfolio5 from "../../../images/projects/ienjoy.png";
import portfolio6 from "../../../images/projects/computer-programmers.png";

const Portfolio = () => {
    return (
        <div className="container-fluid pt-5 pb-3" id="portfolio">
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white textP">Gallery</h1>
                    <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
                </div>
                <div className="row portfolio-container">
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio1} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio2} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio3} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio4} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio5} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                        <div className="position-relative overflow-hidden mb-2">
                            <img className="img-fluid rounded w-100" src={portfolio6} alt="" />
                            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                                <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                    <i className="fa fa-plus text-white" style={{ fontSize: "60px" }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;