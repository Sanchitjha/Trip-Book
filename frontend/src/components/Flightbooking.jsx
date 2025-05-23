import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Flightbooking = () => {
  return (
    <div>
      <Header />
      <section className="flight_books">
        <div className="container">
          <div className="section-title">
            <h2>Booking Information</h2>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Passport Number
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Passport Number"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Departure Date
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Travel Class
                        </label>
                        <select name="" className="form-select" id="">
                          <option value="">Economy Class</option>
                          <option value="">Business Class</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                      <div className="form-group">
                        <label htmlFor="" className="form-label">
                          Passengers
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="1"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 text-center">
                      <a href="/payment" className="btn btn-primary mt-2">Pay Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card flightbook_details">
                    <div className="card-body">
                      <div className="card_title mb-3">
                        <h4>
                          <b>Flights</b>
                        </h4>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <span>From</span>
                          <h5>
                            <b>Mumbai</b>
                          </h5>
                        </div>
                        <div className="col-lg-2">
                          <i class="fas fa-arrow-right"></i>
                        </div>
                        <div className="col-lg-3">
                          <span>To</span>
                          <h5>
                            <b>Delhi</b>
                          </h5>
                        </div>
                      </div>
                      <br />
                      <div className="package-title mb-3">
                        <h5>Package Rules</h5>
                      </div>
                      <ul>
                        <li className="pb-2">
                          Free breakfast as per the Itinerary
                        </li>
                        <li className="pb-2">
                          Visit eight villages showcasing Polynesian culture{" "}
                        </li>
                        <li className="pb-2">
                          All toll tax, parking, fuel, and driver allowances{" "}
                        </li>
                        <li className="pb-2">
                          Comfortable and hygienic vehicle
                        </li>
                      </ul>
                      <div className="package-title">
                        <h5>Price</h5>
                      </div>
                      <div className="d-flex align-items-center">
                        <h4 style={{ color: "#366779" }}>₹ 20,500 </h4>
                        <span>/ Adult X 1</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Flightbooking;
