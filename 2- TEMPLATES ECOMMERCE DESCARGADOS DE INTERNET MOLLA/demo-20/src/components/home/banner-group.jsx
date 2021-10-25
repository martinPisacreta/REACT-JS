import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="banner-group mb-2">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay">
                        <Link to="#">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-6.jpg` } alt="Banner"/>
                        </Link>

                        <div className="banner-content">
                            <h4 className="banner-subtitle text-white"><Link to="#">A Perfect Choice For Your Children</Link></h4>
                            <h3 className="banner-title text-white"><Link to="#">Children's <br/>Bestselling Books</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay">
                        <Link to="#">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-7.jpg` } alt="Banner"/>
                        </Link>

                        <div className="banner-content">
                            <h4 className="banner-subtitle text-white"><Link to="#">Mental Health Awareness Week</Link></h4>
                            <h3 className="banner-title text-white"><Link to="#">Self-Help For <br/>Your Future.</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                    <div className="banner banner-overlay">
                        <Link to="#">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-8.jpg` } alt="Banner"/>
                        </Link>

                        <div className="banner-content">
                            <h4 className="banner-subtitle text-white"><Link to="#">New York Times Bestsellers</Link></h4>
                            <h3 className="banner-title text-white"><Link to="#">Bestselling Food <br/>and Drink Books.</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)