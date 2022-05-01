import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-sticky navbar-light">
            <div className="container">
                <a href="index.html" className="navbar-brand"><img src="assets/images/logo/logo-dark.svg" alt="Logo" width="250px"/></a>
                {/* secondary */}
                <ul className="navbar-nav navbar-nav-secondary order-lg-3">
                    <li className="nav-item d-lg-none">
                    <a className="nav-link nav-icon" href role="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-list" />
                    </a>
                    </li>
                    <li className="nav-item d-none d-lg-block">
                    <Link to="/support" className="btn btn-outline-black ms-2">
                        Support
                    </Link>
                    </li>
                </ul>
                {/* primary */}
                <div className="collapse navbar-collapse" id="navbar" data-bs-parent="#mainNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item d-lg-none">
                            <a href="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/" className="nav-link text-primary">Buy Cube</a>
                        </li>
                    </ul>
                </div>
                {/* mobile user menu */}
            </div>
        </nav>
    </div>
  )
}

export default Navbar