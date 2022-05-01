import React from 'react'

function Navbar() {
  return (
    <div>
        <nav id="mainNav" className="navbar navbar-expand-lg navbar-sticky navbar-light">
            <div className="container">
                <a href="index.html" className="navbar-brand"><img src="assets/images/logo/logo-dark.svg" alt="Logo" /></a>
                {/* secondary */}
                <ul className="navbar-nav navbar-nav-secondary order-lg-3">
                    <li className="nav-item d-lg-none">
                    <a className="nav-link nav-icon" href role="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="bi bi-list" />
                    </a>
                    </li>
                    <li className="nav-item d-none d-lg-block">
                    <a href="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/" className="btn btn-outline-black rounded-pill ms-2">
                        Buy Cube
                    </a>
                    </li>
                </ul>
                {/* primary */}
                <div className="collapse navbar-collapse" id="navbar" data-bs-parent="#mainNav">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-hover">
                            <a className="nav-link dropdown-toggle" href="software.html#" id="navbarDropdown-1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Landings
                            </a>
                            <ul className="dropdown-menu dropdown-menu-md" aria-labelledby="navbarDropdown-1">
                            <li><a className="dropdown-item " href="startup.html">Startup</a></li>
                            <li><a className="dropdown-item " href="saas.html">Saas</a>
                            </li>
                            <li><a className="dropdown-item " href="coworking.html">Coworking</a></li>
                            <li><a className="dropdown-item " href="job-board.html">Job Board</a></li>
                            <li><a className="dropdown-item " href="agency.html">Agency</a>
                            </li>
                            <li><a className="dropdown-item " href="blog.html">Blog</a>
                            </li>
                            <li><a className="dropdown-item " href="product.html">Product</a></li>
                            <li><a className="dropdown-item " href="app.html">App</a>
                            </li>
                            <li><a className="dropdown-item " href="shop.html">Shop</a>
                            </li>
                            <li><a className="dropdown-item " href="event.html">Event</a></li>
                            <li><a className="dropdown-item " href="course.html">Course</a>
                            </li>
                            <li><a className="dropdown-item " href="service.html">Service</a></li>
                            <li><a className="dropdown-item active" href="software.html">Software</a></li>
                            <li><a className="dropdown-item " href="documentation.html">Documentation</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-hover">
                            <a className="nav-link dropdown-toggle" href="software.html#" id="navbarDropdown-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Pages
                            </a>
                            <div className="dropdown-menu dropdown-menu-custom" aria-labelledby="navbarDropdown-2">
                            <div className="row g-0">
                                <div className="col-6">
                                <div className="p-4">
                                    <span className="dropdown-label">Company</span>
                                    <a className="dropdown-item " href="about.html">About</a>
                                    <a className="dropdown-item " href="pricing.html">Pricing</a>
                                    <a className="dropdown-item " href="faq.html">FAQ</a>
                                    <a className="dropdown-item " href="terms.html">Terms</a>
                                    <a className="dropdown-item " href="services.html">Services</a>
                                    <a className="dropdown-item " href="job-listing.html">Job Listing</a>
                                    <a className="dropdown-item " href="job-post.html">Job Post</a>
                                    <span className="dropdown-label">Portfolio</span>
                                    <a className="dropdown-item " href="portfolio-grid.html">Grid</a>
                                    <a className="dropdown-item " href="portfolio-list.html">List</a>
                                    <a className="dropdown-item " href="case-study.html">Case Study</a>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="p-4">
                                    <span className="dropdown-label">Blog</span>
                                    <a className="dropdown-item " href="blog-listing.html">Listing</a>
                                    <a className="dropdown-item " href="blog-post.html">Post</a>
                                    <span className="dropdown-label">Contact</span>
                                    <a className="dropdown-item " href="contact.html">Classic</a>
                                    <a className="dropdown-item " href="contact-location.html">Location</a>
                                    <span className="dropdown-label">Utilities</span>
                                    <a className="dropdown-item " href="404.html">404</a>
                                    <a className="dropdown-item " href="coming-soon.html">Coming Soon</a>
                                </div>
                                </div>
                                <div className="col-12">
                                <a href="https://themes.getbootstrap.com/product/cube-multipurpose-template-ui-kit/" className="card card-arrow inverted bg-green">
                                    <div className="card-footer mt-auto">
                                    <h4 className="lead lh-3 fw-light">Buy Cube</h4>
                                    </div>
                                </a>
                                </div>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item dropdown dropdown-hover">
                            <a className="nav-link dropdown-toggle" href="software.html#" id="navbarDropdown-3" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            Account
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown-3">
                            <li><a className="dropdown-item " href="account.html">Dashboard</a></li>
                            <li><a className="dropdown-item " href="account-settings.html">Settings</a></li>
                            <li><a className="dropdown-item " href="account-orders.html">Orders</a></li>
                            <li><a className="dropdown-item " href="account-billing.html">Billing</a></li>
                            <li><a className="dropdown-item " href="sign-in.html">Sign
                                in</a></li>
                            <li><a className="dropdown-item " href="register.html">Register</a></li>
                            <li><a className="dropdown-item " href="forgot-password.html">Forgot Password</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-hover">
                            <a className="nav-link dropdown-toggle" href="software.html#" id="navbarDropdown-4" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                            Shop
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown-4">
                            <li><a className="dropdown-item " href="shop-product.html">Product</a></li>
                            <li className="dropend dropend-hover">
                                <a className="dropdown-item dropdown-toggle  " href="software.html#" id="navbarDropend-1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">Listing</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropend-1">
                                <li><a className="dropdown-item " href="shop-listing.html">Full width</a></li>
                                <li><a className="dropdown-item " href="shop-listing-sidebar.html">Sidebar</a></li>
                                </ul>
                            </li>
                            <li><a className="dropdown-item " href="shop-cart.html">Cart</a></li>
                            <li><a className="dropdown-item " href="shop-checkout.html">Checkout</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown dropdown-hover">
                            <a className="nav-link dropdown-toggle" href="software.html#" id="navbarDropdown-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Docs
                            </a>
                            <ul className="dropdown-menu dropdown-menu-detailed" aria-labelledby="navbarDropdown-5">
                            <li><a className="dropdown-item " href="docs/index.html">
                                <span>
                                    <i className="bi bi-book" />
                                    Get Started
                                    <small>Customising and building</small>
                                </span>
                                </a>
                            </li>
                            <li><a className="dropdown-item " href="docs/accordion.html">
                                <span>
                                    <i className="bi bi-grid" />
                                    Components
                                    <small>Full list of components</small>
                                </span>
                                </a>
                            </li>
                            </ul>
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