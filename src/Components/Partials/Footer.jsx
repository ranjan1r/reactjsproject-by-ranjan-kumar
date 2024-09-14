import React from "react"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            {/* <!-- Footer Start --> */}
            <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="mb-5">
                                <div className="row g-4">
                                    <div className="col-md-6 col-lg-6 col-xl-5">
                                        <div className="footer-item">
                                            <a href="index.html" className="p-0">
                                                <h3 className="text-white"><i className="fab fa-slack me-3"></i> Ecom</h3>
                                                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                                            </a>
                                            <p class="text-white mb-4">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing...</p>
                                            <div class="footer-btn d-flex">
                                                <Link className="btn btn-md-square rounded-circle me-3" to="#" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f"></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-3" to="#" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-3" to="#" target="_blank" rel="noreferrer"><i class="fab fa-instagram"></i></Link>
                                                <Link className="btn btn-md-square rounded-circle me-0" to="#" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-3">
                                        <div class="footer-item">
                                            <h4 class="text-white mb-4">Useful Links</h4>
                                            <Link className="text-light" to="/"><i class="fas fa-angle-right me-2"></i> Home</Link>
                                            <Link className="text-light" to="/about"><i class="fas fa-angle-right me-2"></i> About us</Link>
                                            <Link className="text-light" to="/shop"><i class="fas fa-angle-right me-2"></i> Shop</Link>
                                            <Link className="text-light" to="/contact"><i class="fas fa-angle-right me-2"></i> Contact</Link>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-6 col-xl-3">
                                        <div class="footer-item">
                                            <h4 class="text-white mb-4">Quick Links</h4>
                                            <Link className="text-light" to="/"><i class="fas fa-angle-right me-2"></i> Privacy Policy</Link>
                                            <Link className="text-light" to="/"><i class="fas fa-angle-right me-2"></i>Term & Policy</Link>
                                            <Link className="text-light" to="/"><i class="fas fa-angle-right me-2"></i> Refund Policy</Link>
                                            <Link className="text-light" to="/"><i class="fas fa-angle-right me-2"></i> Return Policy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="pt-5" >
                                <div className="row g-0">
                                    <div className="col-12">
                                        <div className="row g-4">
                                            <div className="col-lg-6 col-xl-4">
                                                <div className="d-flex">
                                                    <div className="btn-xl-square bg-primary text-white rounded p-2 me-2">
                                                        <i className="fas fa-map-marker-alt fa-2x"></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white">Address</h4>
                                                        <Link to="" target="_blank" rel="noreferrer" class="mb-0 text-light">sector11,gurugaon</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-4">
                                                <div className="d-flex">
                                                    <div className="btn-xl-square bg-primary text-white rounded p-2 me-2">
                                                        <i className="fas fa-envelope fa-2x"></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white">Mail Us</h4>
                                                        <Link to="mailto:vivek@123exp.com" target="_blank" rel="noreferrer" class="mb-0 text-light">vivek@123exp.com</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-xl-4">
                                                <div className="d-flex">
                                                    <div className="btn-xl-square bg-primary text-white rounded p-2 me-2">
                                                        <i className="fa fa-phone-alt fa-2x"></i>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-white">Telephone</h4>
                                                        <Link to="tel:7562342340" target="_blank" rel="noreferrer" className="mb-0 text-light">7562342340</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        <div className="col-lg-4">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Newsletter</h4>
                                <p className="text-white mb-3">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="position-relative rounded-pill mb-4">
                                    <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                                    <button type="button" className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                                </div>
                                <hr />
                                <div className="d-flex flex-shrink-0" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                                    <Link to="tel:7903201546" target="_blank" rel="noreferrer" className="mt-4 btn btn-light btn-lg-square rounded-circle position-relative wow tada" data-wow-delay=".9s">
                                        <i className="fa fa-phone-alt fa-2x"></i>
                                        <div className="position-absolute" style={{ top: "7px", right: "12px" }}>
                                            <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="d-flex flex-column ms-3 text-light mt-2">
                                    <span>Call to Our Experts</span>
                                    <Link to="tel:7903201546" target="_blank" rel="noreferrer" className="text-light"><span >Free: 7903201546</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Footer End --> */}

        </>
    )
}

