import React from 'react';
import { Link } from 'react-router-dom';

function FooterComponent(props) {
  return (
       <footer>
         {props.children}
      <div className="container p-0">
        <div className="row">
          <div className="col-md-8 p-0" style={{marginTop: "20px"}}>
              <ul className="social-network social-circle">
                <li><a href="#" className="icoFacebook social-icon" title="Facebook"><img src="/fb.png" /></a></li>
                <li><a href="#" className="icoLinkedin social-icon" title="Linkedin"><img src="/linked.png" /></a></li>
              </ul>
            <nav className="navbar navbar-expand-md navbar-light bg-light footerNav  p-0">
              <div className="nav-container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-8" aria-controls="navbarSupportedContent-8" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse footer" id="navbarSupportedContent-8">
                  <ul className="navbar-nav footer-list">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/who-we-are">Who We Are</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/quality">Quality</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/team">Team</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/work-at-acc">Work At Acc</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav> 
          </div>
          <div className="col-md-4 p-0" style={{marginTop: "20px"}}>
            <Link className="navbar-brand" to="/">
              <img src="/logo.png" className="img-fluid" />
            </Link>
            <p className="copyRight">&copy; 1996-2020 Advance Construction Co.<br /> <span>All right Reserved</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
