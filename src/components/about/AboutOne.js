import React from 'react';

export default class AboutOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="about-one about-three">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-one__img-box">
                                        <div className="about-one__img">
                                            <img src={publicUrl+"assets/images/resources/women-happy.jpg"} alt="" />
                                        </div>
                                        <div className="about-one__small-img wow zoomIn animated animated" data-wow-delay="500ms"
                                            data-wow-duration="2500ms">
                                            <img src={publicUrl+"assets/images/resources/recent-event-1-5.jpg"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                        <div className="section-title text-left">
                                            <span className="section-title__tagline">About Us</span>
                                            <h2 className="section-title__title">Learn to Take Control.</h2>
                                        </div>
                                        <p className="about-one__text">We have been committed to making a positive impact on women's lives. Our team of experts in women's health, including doctors, nurses, and educators, came together with a shared vision: to ensure that women have the tools they need to make choices that are right for them.</p>
                                        <ul className="list-unstyled about-one__points">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Our Mission.</h4>
                                                    <p>ill give you a complete account of the system, and
                                                        expound the actual teachings...</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Our Vision.</h4>
                                                    <p>ill give you a complete account of the system, and
                                                        expound the actual teachings...</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="about-one__bottom-video-box">
                                            <div className="about-one__btn-box">
                                                <a href="about.html" className="thm-btn about-one__btn">About More</a>
                                            </div>
                                            <div className="about-one__video-link">
                                                <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                    <div className="about-one__video-icon">
                                                        <span className="fa fa-play"></span>
                                                        <i className="ripple"></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}