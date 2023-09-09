import React from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";

export default class Hero extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="main-slider">
                    <Swiper 
                        loop={true}
                        slidesPerView={1}
                        effect="fade"
                        autoplay={{delay:   5000}}
                        modules={[EffectFade, Pagination, Navigation]}
                        pagination={{
                            el: "#main-slider-pagination",
                            type: "bullets",
                            clickable: true
                        }}
                        navigation={{
                            nextEl: "#main-slider__swiper-button-next",
                            prevEl: "#main-slider__swiper-button-prev"
                        }}
                        className="swiper-container thm-swiper__slider">

                        <div className="swiper-wrapper">

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/woman-si.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">
                                                <h2>Empowering <span>Women's</span> Health. <br /> </h2>
                                                <p>Welcome to Women Self Inject Initiative, where we empower women to make informed choices about their reproductive health. Our mission is to provide knowledge, support, and resources to women of all backgrounds, helping them gain the confidence and skills they need to self-administer contraceptive injections safely and effectively.</p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/main-slider-1-2.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">
                                                <h2>Lets <span>Chenge</span> The World <br /> With Humanity.</h2>
                                                <p>There are many variations of passages of Lorem Ipsum Fasts by <br /> injected
                                                    humour, or randomised words which... </p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                            {/* Start Swiper Slide Single */}
                            <SwiperSlide className="swiper-slide">
                                <div className="image-layer" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/main-slider-1-3.jpg)'}}></div>
                                <div className="main-slider-shape-1"></div>
                                <div className="main-slider-shape-2"></div>
                                <div className="main-slider-shape-3 zoominout"></div>
                                <div className="main-slider-shape-4 zoominout-2"></div>
                                <div className="main-slider-shape-5">
                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-5.png"} alt="" />
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xl-7">
                                            <div className="main-slider__content">
                                                <h2>Give the <span>Poor</span> Help <br /> for Families.</h2>
                                                <p>There are many variations of passages of Lorem Ipsum Fasts by <br /> injected
                                                    humour, or randomised words which... </p>
                                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn main-slider__btn">Leran More</Link>
                                                <div className="main-slider-arrow">
                                                    <img src={publicUrl+"assets/images/shapes/main-slider-shape-1.png"} className="float-bob-x" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* End Swiper Slide Single */}

                        </div>

                        <div className="swiper-pagination" id="main-slider-pagination"></div>

                        <div className="main-slider__nav">
                            <div className="swiper-button-prev" id="main-slider__swiper-button-next">
                                <i className="fa fa-long-arrow-alt-left"></i>
                            </div>
                            <div className="swiper-button-next" id="main-slider__swiper-button-prev">
                                <i className="fa fa-long-arrow-alt-right"></i>
                            </div>
                        </div>

                    </Swiper>
                </section>
            </>
        )
    }
}