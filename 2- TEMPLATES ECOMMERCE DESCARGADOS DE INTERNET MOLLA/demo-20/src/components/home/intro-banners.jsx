import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-lg-6">
                <div className="banner banner-big banner-overlay">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-1.jpg` } alt="Banner"/>
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white"><Link to="#">Your Guide To The World</Link></h4>
                        <h2 className="banner-title text-white"><Link to="#">Must-Read <br/>Travel Books</Link></h2>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols`} className="btn btn-outline-white-3 banner-link">Find out more<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="banner banner-overlay">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-2.jpg` } alt="Banner"/>
                    </Link>

                    <div className="banner-content banner-content-stretch">
                        <h4 className="banner-subtitle text-white"><Link to="#">New This Week</Link></h4>
                        <h3 className="banner-title text-white"><Link to="#">Discover Our <br/>Best Romance <br/>Books</Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-lg-3">
                <div className="banner banner-small banner-overlay">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-3.jpg` } alt="Banner"/>
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white d-lg-none d-xl-block"><Link to="#">Deal Of The Day</Link></h4>
                        <h3 className="banner-title text-white"><Link to="#">20% Off Use <br/>Code: <span>mybook</span></Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>

                <div className="banner banner-small banner-overlay">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/demos/demo-20/banners/banner-4.jpg` } alt="Banner"/>
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white d-lg-none d-xl-block"><Link to="#">New Arrivals</Link></h4>
                        <h3 className="banner-title text-white"><Link to="#">Business <br/>& Economics</Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-3 banner-link">Discover Now<i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)