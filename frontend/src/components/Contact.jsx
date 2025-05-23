import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contact mt-2" id="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Drop us a line through the form below and we'll get back to you</p>
          </div>
          <div className="row">
            <div className="col-lg-6 mt-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                  <i className="fas fa-map-marker-alt"></i>
                    <h3>Our Address</h3>
                    <p>Surat, Gujarat</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                  <i className="fas fa-envelope"></i>
                    <h3>Email Us</h3>
                    <p>
                      jadhavom0408@gmail.com
                      <br />
                      manavbehra123@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                  <i className="fas fa-phone-alt"></i>
                    <h3>Call Us</h3>
                    <p>
                      +91 7016154689
                      <br />
                      +91 9016904802
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-3">
              <form action="" className="contact-info-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required=""
                  ></textarea>
                </div>
                {/* <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div> */}
                <div className="text-center mt-3">
                  <button type="submit" className="btn button5">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
