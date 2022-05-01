import React from 'react';

function Support() {
  return (
    <div>
        <section className="bg-black overflow-hidden vh-100">
            <div className="d-flex flex-column container level-3 min-vh-100">
                <div className="row align-items-center justify-content-center my-auto">
                    <div className="col-md-10 col-lg-8 col-xl-5">
                        <div className="card">
                            <div className="card-header bg-white text-center pb-0">
                                <p className='text-muted text-center small'>When Africans are raised, Africa will be made. Be a part of the change, make a contribution towards lifting Africans out of hunger poverty for good.</p>
                            </div>
                            <div className="card-body bg-white">
                            <form action="#">
                                <div className="form-floating mb-4">
                                    <input type="name" className="form-control" id="name" placeholder="Kayode Kelechi" />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                                <div className="form-floating mb-4">
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                    <label htmlFor="email">Email Address</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <input type="tel" className="form-control" id="phone" placeholder="08162680095" />
                                    <label htmlFor="phone">Phone Number</label>
                                </div>

                                <div className="form-floating mb-4">
                                    <div className="input-group">
                                        <span className="input-group-text">
                                        ₦
                                        {/* <i className="bx bx-dollar fs-base" /> */}
                                        </span>
                                        <input type="text" id="amount" className="form-control" placeholder='Amount' required />
                                        <span className="input-group-text">.00</span>
                                    </div>
                                </div>
                                
                                <div className="d-grid mb-2">
                                    <a href className="btn btn-lg btn-dark">Donate Now</a>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <figure className="background background-overlay" style={{backgroundImage: 'url("assets/images/supportbg.jpeg")'}}>
            </figure>
        </section>
    </div>
  )
}

export default Support