import React from 'react';
import './About.css';
import my from "../../../images/Fatema Akter.png";

const About = () => {
    return (
        <div className="about">
            <div className="row mx-auto">
                <h2 className="text-center my-3">About Me</h2>
                <div className="col-lg-6">
                    <img className="w-50 ms-auto h-75" src={my} alt="" />
                </div>
                <div className="col-lg-5">
                    <p className="mx-auto">Hi! It's me Tawhidul islam.I am professonal Full time <strong>Freelancer</strong>, I am a
                        professional <strong> Web Designer</strong>. I'm very passionate and dedicated to my work With 1
                        years of experience as a professional <strong> Web Designer</strong>,My job is to build your
                        website so that it is functional and user-friendly but at the same time attractive.<cite
                            style={{ fontWeight: 500 }}> I love to do hard work</cite>, and it,s an easy method to show my
                        creativity to others. I’ve helped so many organizations improve their online presence and hope I
                        can help you to make an awesome website for your business.I have a strong passion for the
                        creativity and discipline .Clean code that is maintainable and readable.I am passionate to learn
                        more and get my skill sets more polished and learn new technology. I offer you unlimited
                        revision so that you are satisfied with our work. I am honest and determined to ensure 100%
                        quality for work. I am committed to deadline.<br /> <b>***Thank you***</b></p>
                </div>
            </div>
        </div>
    );
};

export default About;