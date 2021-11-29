import React from 'react';

const ContactForm = () => {

    return (
        <div>
            <div className="container">
                <h2 className="text-center my-3 fw-bold">Contact Form</h2>
                <form>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea cols="30" rows="8" className="form-control" placeholder="Your Message" name="message" ></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto my-3">
                            <input type="submit" className="btn btn-info" value="Send Message" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;