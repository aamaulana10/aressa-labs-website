import React from 'react'

function Services() {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>What We Offer</h2>
                    <h4>End-to-End Mobile App Solutions</h4>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bxl-dribbble"></i></div>
                            <h4><a className='nav-link' href="">Custom App Development</a></h4>
                            <p>Tailored solutions that reflect your unique business requirements and goals.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-file"></i></div>
                            <h4><a className='nav-link' href="">UI/UX Design</a></h4>
                            <p>Intuitive and visually stunning designs that enhance user engagement</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4><a className='nav-link' href="">Cross-Platform Development</a></h4>
                            <p>Reach a broader audience with apps that work seamlessly across platforms</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-layer"></i></div>
                            <h4><a className='nav-link' href="">Quality Assurance</a></h4>
                            <p>Rigorous testing processes to ensure flawless performance and user satisfaction</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services