import React from 'react';
import { Link } from 'react-router-dom';
import { isIEBrowser } from '../../utils';

export default function CTA () {
    return (
        <div className="cta cta-display bg-image pt-4 pb-4" style={ { backgroundImage: 'url(assets/images/backgrounds/cta/bg-6.jpg)' } }>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9 col-xl-8">
                        <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                            <div className="col text-center text-sm-left" style={ isIEBrowser() ? { minHeight: '80px' } : {} }>
                                <h3 className="cta-title text-white">Sign Up & Get 10% Off</h3>
                                <p className="cta-desc text-white">Molla presents the best in interior design</p>
                            </div>
                            <div className="col-auto d-flex justify-content-center">
                                <Link to={ `${process.env.PUBLIC_URL}/pages/login` } className="btn btn-outline-white"><span>SIGN UP</span><i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}