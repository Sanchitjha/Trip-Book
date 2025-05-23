import React, { useState } from "react";
import "../assets/adminstyle.css";

const Dashboard = () => {
  const [showFlights, setShowFlights] = useState(true);

  const toggleTable = (isFlights) => {
    setShowFlights(isFlights);
  };
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Dashboard</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Dashboard</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-6 col-md-6">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">Number of Users</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="fas fa-user-friends"></i>
                        </div>
                        <div className="ps-3">
                          <h6>145</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-6 col-md-6">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">Number of Users Visited</h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="fas fa-eye"></i>
                        </div>
                        <div className="ps-3">
                          <h6>64</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-2 text-start">
              <button
                className={`btn me-2 ${
                  showFlights ? "btn-info" : "btn-outline-info"
                }`}
                onClick={() => toggleTable(true)}
              >
                Flights
              </button>
              <button
                className={`btn ${
                  showFlights ? "btn-outline-info" : "btn-info"
                }`}
                onClick={() => toggleTable(false)}
              >
                Hotels
              </button>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {showFlights ? "Flights" : "Hotels"} Table Data
                  </h5>

                  <table
                    className="table table-striped table-bordered"
                    style={{ display: showFlights ? "block" : "none" }}
                    id="flights"
                  >
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Passport No</th>
                        <th scope="col">Flight No</th>
                        <th scope="col">Flight Name</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">Departure Date</th>
                        <th scope="col">Return Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>brandon@gmail.com</td>
                        <td>9034256178</td>
                        <td>Surat, Gujarat</td>
                        <td>0021344</td>
                        <td>2342</td>
                        <td>Emirates</td>
                        <td>Mumbai</td>
                        <td>Delhi</td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                  <table
                    className="table table-striped table-bordered"
                    style={{ display: showFlights ? "none" : "block" }}
                    id="hotels"
                  >
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Adhaar/License No</th>
                        <th scope="col">Hotel Name</th>
                        <th scope="col">Check In</th>
                        <th scope="col">Check Out</th>
                        <th scope="col">Guests</th>
                        <th scope="col">Place Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>brandon@gmail.com</td>
                        <td>9034256178</td>
                        <td>Surat, Gujarat</td>
                        <td>0021344</td>
                        <td>2342</td>
                        <td>Emirates</td>
                        <td>Mumbai</td>
                        <td>Delhi</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
