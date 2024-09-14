import React from "react";
import Features from "./Partials/Features";
import ProductContainer from "./Partials/ProductContainer";
import Faqs from "./Partials/Faqs";
import Testimonial from "./Partials/Testimonials";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Home() {
    const options = {
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout	:1000
    }
    return (
        <>
            {/* <!-- Carousel Start --> */}
            <div className="header-carousel  ">
                <OwlCarousel className='owl-theme'{...options} >
                    <div className="header-carousel-item bg-primary">
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row g-4 align-items-center">
                                    <div className="col-lg-7 animated fadeInLeft">
                                        <div className="text-sm-center text-md-start">
                                            <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To LifeSure</h4>
                                            <h1 className="display-1 text-white mb-4">Life Insurance Makes You Happy</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> Watch Video</a>
                                                <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 animated fadeInRight">
                                        <div className="calrousel-img" style={{ objectFit: "cover" }}>
                                            <img src="img/carousel-2.png" className="img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-carousel-item bg-primary">
                        <div className="carousel-caption">
                            <div className="container">
                                <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
                                    <div className="col-lg-5 animated fadeInLeft">
                                        <div className="calrousel-img">
                                            <img src="img/carousel-2.png" className="img-fluid w-100" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 animated fadeInRight">
                                        <div className="text-sm-center text-md-end">
                                            <h4 className="text-white text-uppercase fw-bold mb-4">Welcome To LifeSure</h4>
                                            <h1 className="display-1 text-white mb-4">Life Insurance Makes You Happy</h1>
                                            <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy...
                                            </p>
                                            <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                                                <a className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2" href="#"><i class="fas fa-play-circle me-2"></i> Watch Video</a>
                                                <a className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2" href="#">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>;
            </div>
            {/* <!-- Carousel End --> */}
            <Features />
            <ProductContainer />
            <Faqs />
            <Testimonial />

        </>
    )
}