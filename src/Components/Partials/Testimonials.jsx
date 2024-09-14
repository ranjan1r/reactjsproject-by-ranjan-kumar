import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Testimonial() {
    const options = {
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            
        },
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav:true,
        navText:['<button className="btn btn-primary" style="width:80px;border-radius:80px"><i className="fa fa-arrow-right"></i><button/>','<button className="btn btn-primary" style="width:80px;border-radius:80px"> <i className="fa fa-arrow-left"></i><button/>']	

    }
    return (
        <>
            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid testimonial pb-5">
                <div className="container pb-5">
                    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                        <h4 className="text-primary">Testimonial</h4>
                        <h1 className="display-4 mb-4">What Our Customers Are Saying</h1>
                        <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                        </p>
                    </div>
                    <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
                        <OwlCarousel className='owl-theme'{...options} >
                            <div className="testimonial-item bg-light rounded">
                                <div className="row g-0">
                                    <div className="col-4  col-lg-4 col-xl-3">
                                        <div className="h-100">
                                            <img src="img/testimonial-1.jpg" className="img-fluid h-100 rounded" style={{ objectFit: "cover" }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8 col-lg-8 col-xl-9">
                                        <div className="d-flex flex-column my-auto text-start p-4">
                                            <h4 className="text-dark mb-0">Client Name</h4>
                                            <p className="mb-3">Profession</p>
                                            <div className="d-flex text-primary mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded">
                                <div className="row g-0">
                                    <div className="col-4  col-lg-4 col-xl-3">
                                        <div className="h-100">
                                            <img src="img/testimonial-2.jpg" className="img-fluid h-100 rounded" style={{ objectFit: "cover" }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8 col-lg-8 col-xl-9">
                                        <div className="d-flex flex-column my-auto text-start p-4">
                                            <h4 className="text-dark mb-0">Client Name</h4>
                                            <p className="mb-3">Profession</p>
                                            <div className="d-flex text-primary mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star text-body"></i>
                                            </div>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded">
                                <div className="row g-0">
                                    <div className="col-4  col-lg-4 col-xl-3">
                                        <div className="h-100">
                                            <img src="img/testimonial-3.jpg" class="img-fluid h-100 rounded" style={{ objectFit: "cover" }} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-8 col-lg-8 col-xl-9">
                                        <div className="d-flex flex-column my-auto text-start p-4">
                                            <h4 className="text-dark mb-0">Client Name</h4>
                                            <p className="mb-3">Profession</p>
                                            <div className="d-flex text-primary mb-3">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star text-body"></i>
                                                <i className="fas fa-star text-body"></i>
                                            </div>
                                            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error molestiae aut modi corrupti fugit eaque rem nulla incidunt temporibus quisquam,
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --></> */}
        </>
    )
}