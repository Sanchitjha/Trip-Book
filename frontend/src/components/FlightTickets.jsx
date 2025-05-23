import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import success_img from "../assets/img/book_success.png";

const FlightTickets = () => {
  return (
    <div>
      <Header />
      <section className="tickets">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="card">
                <div className="card-body">
                  <div className="flight_book_box">
                    <div className="flight_booked_success d-flex align-items-center">
                      <div className="book_success_img me-4">
                        <img src={success_img} alt="" />
                      </div>
                      <div className="book_success_text">
                        <h4>
                          <b>Your flight has been booked successfully!</b>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <div className="flight_book_details">
                    <div className="flight_book_details_box">
                      <div className="d-flex ps-2 align-items-center">
                        <div className="from me-4">
                          <span>From</span>
                          <h5>
                            <b>Mumbai</b>
                          </h5>
                        </div>
                        <i class="fas fa-arrow-right me-4"></i>
                        <div className="to">
                          <span>To</span>
                          <h5>
                            <b>Delhi</b>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <hr />
                    <table class="table">
                      <tbody>
                        <tr>
                          <th>First Name</th>
                          <td>John</td>
                        </tr>
                        <tr>
                          <th>Last Name</th>
                          <td>Doe</td>
                        </tr>
                        <tr>
                          <th>Email ID</th>
                          <td>john12@gmail.com</td>
                        </tr>
                        <tr>
                          <th>Seat Number</th>
                          <td>23</td>
                        </tr>
                        <tr>
                          <th>Flight Number</th>
                          <td>129045</td>
                        </tr>
                        <tr>
                          <th>Flight Name</th>
                          <td>SpaceJet Airline</td>
                        </tr>
                        <tr>
                          <th>Departure Date</th>
                          <td>10/05/2024</td>
                        </tr>
                        <tr>
                          <th>Departure Time</th>
                          <td>10/05/2024</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="card">
                <div className="row">
                  <div className="col-lg-10">
                    <div className="card-body">
                      <div className="book_details_title d-flex align-items-center justify-content-between">
                        <h5 style={{ color: "#666" }}>
                          <b>Booking Details</b>
                        </h5>
                        <h4>
                          <b>Economy Class</b>
                        </h4>
                      </div>
                      <hr />
                      <div className="book_details_text tour_booking_amount_area">
                        <div className="row mb-3">
                          <div className="col-md-4 text-start">
                            <span>Airline</span>
                            <h5>
                              <b>SpiceJet</b>
                            </h5>
                          </div>
                          <div className="col-md-4 text-center">
                            <span>From</span>
                            <h5>
                              <b>Mumbai</b>
                            </h5>
                          </div>
                          <div className="col-md-4 text-end">
                            <span>To</span>
                            <h5>
                              <b>Delhi</b>
                            </h5>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-md-6">
                            <span>passenger</span>
                            <h5>
                              <b>John Doe</b>
                            </h5>
                          </div>
                          <div className="col-md-6 text-end">
                            <span>Board Time</span>
                            <h5>
                              <b>12:45</b>
                            </h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-4">
                            <span>Departure Date</span>
                            <h5>
                              <b>2024-05-10</b>
                            </h5>
                          </div>
                          <div className="col-md-4 text-center">
                            <span>Departure Time</span>
                            <h5>
                              <b>09:45</b>
                            </h5>
                          </div>
                          <div className="col-md-4 text-end">
                            <span>Seat No</span>
                            <h5>
                              <b>23</b>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 ticket_box_right">
                    <h5 className="text-white mt-4"><b>Tripzzy</b></h5>
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

export default FlightTickets;
