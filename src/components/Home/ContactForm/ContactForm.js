import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        const success = emailjs.sendForm('service_cjrawti', 'template_1ripxr5', e.target, 'user_gihVwpkXzRAGzCx5PBL6N')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        if (success) {
            alert("Email Send Successfully.")
        }
        e.target.reset();
    };

    return (
        <div>
            <div className="container">
                <div className="position-relative d-flex align-items-center justify-content-center">
                    <h1 className="display-1 text-uppercase text-white textP">Contact</h1>
                    <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
                </div>
                <form onSubmit={sendEmail}>
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
                            <input type="submit" className="btn btn-info" value="Send Email" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;