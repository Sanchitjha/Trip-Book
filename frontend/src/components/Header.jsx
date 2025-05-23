import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import tripzzy_logo from "../assets/img/tripzzy_white-logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [searchResultsFrom, setSearchResultsFrom] = useState([]);
  const [searchResultsTo, setSearchResultsTo] = useState([]);
  const [showDropdownFrom, setShowDropdownFrom] = useState(false);
  const [showDropdownTo, setShowDropdownTo] = useState(false);
  const location = useLocation();
  const [showFlights, setShowFlights] = useState(true);

  const toggleTable = (isFlights) => {
    setShowFlights(isFlights);
  };

  const onChangeFrom = (e) => {
    const searchTerm = e.target.value;
    setValueFrom(searchTerm);
    // Fetch search results from API
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResultsFrom(filteredResults);
        setShowDropdownFrom(true);
        setShowDropdownTo(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const onChangeTo = (e) => {
    const searchTerm = e.target.value;
    setValueTo(searchTerm);
    // Fetch search results from API
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => {
        const filteredResults = data.users.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResultsTo(filteredResults);
        setShowDropdownTo(true);
        setShowDropdownFrom(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const onSearchFrom = (searchTerm) => {
    setValueFrom(searchTerm);
    setShowDropdownFrom(false);
  };

  const onSearchTo = (searchTerm) => {
    setValueTo(searchTerm);
    setShowDropdownTo(false);
  };

  useEffect(() => {
    // Hide dropdown after 1 second if no text typed in From input
    const timeoutFrom = setTimeout(() => {
      if (!valueFrom) {
        setShowDropdownFrom(false);
      }
    }, 1000);

    // Hide dropdown after 1 second if no text typed in To input
    const timeoutTo = setTimeout(() => {
      if (!valueTo) {
        setShowDropdownTo(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeoutFrom);
      clearTimeout(timeoutTo);
    };
  }, [valueFrom, valueTo]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Dynamically change the banner title based on the current page
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/flights":
        return "Find Flights";
      case "/stays":
        return "Find Stays";
      case "/services":
        return "Services";
      case "/about":
        return "About Us";
      case "/contact":
        return "Contact Us";
      case "/book_flight":
        return "Book a Flight";
      case "/profile":
        return "Profile";
      default:
        return "Discover Your Next";
    }
  };

  // Conditionally render the query box based on the current page
  const renderQueryBox = () => {
    if (location.pathname === "/") {
      return (
        <div className="query_box">
          <div className="row">
            <div className="col-lg-12">
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
          </div>
          <div
            className="row align-items-center justify-content-between mt-4"
            id="search_flights"
            style={{ display: showFlights ? "flex" : "none" }}
          >
            <div className="col-md-3 search_bar_container">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  From
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Mumbai"
                  value={valueFrom}
                  onChange={onChangeFrom}
                  onFocus={onChangeFrom}
                  autoComplete="on"
                />
              </div>
              {showDropdownFrom && (
                <div
                  className={`search_dropdown ${
                    searchResultsFrom.length > 15 ? "scrollable" : ""
                  }`}
                >
                  {searchResultsFrom.map((user) => (
                    <div className="d-flex align-items-center">
                      <i className="fas fa-plane-departure ms-3"></i>
                      <div
                        onClick={() =>
                          onSearchFrom(`${user.firstName} ${user.lastName}`)
                        }
                        className="search_dropdown_row"
                        key={user.id}
                      >
                        {user.firstName} {user.lastName}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-3 search_bar_container">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  To
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Delhi"
                  value={valueTo}
                  onChange={onChangeTo}
                  onFocus={onChangeTo}
                />
              </div>
              {showDropdownTo && (
                <div
                  className={`search_dropdown ${
                    searchResultsTo.length > 15 ? "scrollable" : ""
                  }`}
                >
                  {searchResultsTo.map((user) => (
                    <div className="d-flex align-items-center">
                      <i className="fas fa-plane-arrival ms-3"></i>
                      <div
                        onClick={() =>
                          onSearchTo(`${user.firstName} ${user.lastName}`)
                        }
                        className="search_dropdown_row"
                        key={user.id}
                      >
                        {user.firstName} {user.lastName}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-3">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Departure
                </label>
                <input type="date" name="" className="form-control" id="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Travel Class
                </label>
                <select name="" id="" className="form-select">
                  <option>Economy Class</option>
                  <option>Business Class</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 text-center mt-4">
              <a className="btn button2" href="/flights">
                Search
              </a>
            </div>
          </div>
          <div
            className="row align-items-center justify-content-between mt-4"
            id="search_hotels"
            style={{ display: !showFlights ? "flex" : "none" }}
          >
            <div className="col-md-3 search_bar_container">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Select Destination
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Mumbai"
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="col-md-3 search_bar_container">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Check In
                </label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Delhi"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Check Out
                </label>
                <input type="date" name="" className="form-control" id="" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="input_box flight_search_box">
                <label htmlFor="" className="control-label">
                  Guests & Rooms
                </label>
                <select name="" id="" className="form-select">
                  <option>1 Room, 2 Guests</option>
                  <option>1 Room, 3 Guests</option>
                  <option>2 Room, 5 Guests</option>
                  <option>2 Room, 7 Guests</option>
                </select>
              </div>
            </div>
            <div className="col-lg-12 text-center mt-4">
              <a className="btn button2" href="/stays">
                Search
              </a>
            </div>
          </div>
        </div>
      );
    }
    return null; // Render nothing for other pages
  };

  return (
    <div>
      <div id="header" className={`fixed-top ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid ms-5 me-5">
            <a className="navbar-brand">
              <img
                src={tripzzy_logo}
                className="logo"
                width={100}
                height={50}
                alt=""
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll left_navbar">
                <li className="nav-item">
                  <a className="nav-link"></a>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/flights" ? "active" : ""
                    }`}
                    to="/flights"
                  >
                    <i className="fas fa-plane"></i> Find Flight
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/stays" ? "active" : ""
                    }`}
                    to="/stays"
                  >
                    <i className="fas fa-bed"></i> Find Stays
                  </Link>
                </li>
              </ul>
              <form className="" role="search">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll right_navbar">
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/" ? "active" : ""
                      }`}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#">
                      Destinations
                    </a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link">
                      Bookings
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/services" ? "active" : ""
                      }`}
                      to="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link ${
                        location.pathname === "/contact" ? "active" : ""
                      }`}
                      to="/contact"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/login" className="btn action_btn">
                      Sign In
                    </a>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </div>
      {/* Header end */}

      {/* home start */}
      <section className="home" id="home">
        <div className="container-fluid">
          <div className="home_heading">
            {/* <h2>Discover your next</h2>
            <h1>Adventure</h1>
            <h3>Once a year, go someplace you've never been before.</h3> */}
            <h2>{getPageTitle()}</h2>
            <h1>
              {getPageTitle() === "Discover Your Next"
                ? "Adventure"
                : getPageTitle().replace("Find ", "")}
            </h1>
            <h3>Once a year, go someplace you've never been before.</h3>
          </div>
          {renderQueryBox()}
        </div>
      </section>
      {/* home end */}
    </div>
  );
};

export default Header;
