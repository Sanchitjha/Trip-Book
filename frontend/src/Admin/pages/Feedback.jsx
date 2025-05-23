import React from 'react'

const Feedback = () => {
  return (
    <div>
      <main id="main" className="main">
        <div className="pagetitle">
          <h1>Feedback Messages</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Feedback Message</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Table Data</h5>

                  <table className="table table-striped table-bordered" id="feedback">
                    <thead>
                      <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Brandon Jacob</td>
                        <td>brandon@gmail.com</td>
                        <td>9034256178</td>
                        <td>hello</td>
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
  )
}

export default Feedback
