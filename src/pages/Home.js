import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
        <Navbar />

        <section className="bg-opaque-green">
            <div className="container d-flex flex-column py-20">
                <div className="row align-items-center justify-content-center justify-content-lg-between mt-lg-10">
                    <div className="col-md-10 col-lg-5 text-center text-lg-start level-3">
                    <h1 className="fw-light">A better workflow for your <span className="fw-bold" data-typed="{&quot;strings&quot;: [&quot;team&quot;, &quot;startup&quot;]}" /></h1>
                    <p className="lead text-secondary mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum dolore
                        provident corrupti consectetur a quis modi illum corporis deserunt</p>
                    <a href className="btn btn-green btn-with-icon rounded-pill btn-lg">Get Started <i className="bi bi-arrow-right" /></a>
                    </div>
                </div>
            </div>
            <div className="container-fluid back back-static">
                <div className="row justify-content-end h-100">
                    <div className="col-lg-6 overflow-hidden position-relative" data-aos="fade-in">
                    <figure className="media media-video" data-bp="{&quot;ytSrc&quot;: &quot;JFm7YDVlqnI&quot;}">
                        <span style={{backgroundImage: 'url("assets/images/small-2.jpg")'}}>
                        </span>
                    </figure>
                    </div>
                </div>
            </div>
        </section>
        
        <Footer />
    </div>
  )
}

export default Home