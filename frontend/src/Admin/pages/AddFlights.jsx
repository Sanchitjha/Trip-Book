import React from "react";

const AddFlights = () => {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Add Flights</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Add Flight</li>
            </ol>
          </nav>
        </div>

        <section className="section">
          <div className="col-lg-12 mt-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Flight Details</h5>
                <div className="row mb-3 d-flex align-items-end">
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Flight Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Flight Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Flight Number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Flight Number"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        From
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        placeholder="Mumbai"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        To
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="password"
                        placeholder="Delhi"
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Departure Date
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        name=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Travel Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        name=""
                      />
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="form-group">
                      <label htmlFor="" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name=""
                        placeholder="2"
                      />
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <div className="form-group mt-2">
                      <button className="btn btn-success">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AddFlights;
