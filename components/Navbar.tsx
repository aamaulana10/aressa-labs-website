import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <header id="header" className="fixed-top ">
            <div className="container d-flex align-items-center">

                <h1 className="logo me-auto"><a className="nav-link" href="/">Aressa Labs</a></h1>
                <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        {/* <li><a className="nav-link scrollto" href="#about">About</a></li> */}
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li className="dropdown"><a className="nav-link" href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a className="nav-link" href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                        <li><a className="nav-link getstarted scrollto" href="#about">Contact Us</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}

export default Navbar