import React from 'react';

export default class ContactInfo extends React.Component {
    render(){
        return (
            <>
                <section className="contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">About</h4>
                                    <p className="contact-info__text">Lorem ipsum is simply free text dolor sit amet, consectetur
                                        adipiscing ullam bla.</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">Address</h4>
                                    <p className="contact-info__text">Kampala Uganda<br />
                                    Uganda</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single contact-info__single-3">
                                    <h4 className="contact-info__title">Contact</h4>
                                    <p className="contact-info__email-phone">
                                        <a href="mailto:info@womenselfinjectinitiative.org"
                                            className="contact-info__email">info@womenselfinjectinitiative.org</a>
                                        <a href="tel:0789191187" className="contact-info__phone">+(256)789191187</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}