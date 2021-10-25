import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import QuickViewTwo from '../features/product/common/quickview-two';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';

import Banner from './banner';
import Sidebar from './sidebar';
import NewCollection from './new-collection';
import InstagramSection from './instagram-section';

import { introSlider } from '../settings';
import { isIEBrowser } from '../../utils';
import data from '../../mock_data/data';
import style from './style.scss';

function HomePage( props ) {
    useEffect( () => {
        document.getElementById( "menu-home" ).classList.add( "active" );
        style.use();

        return ( () => {
            document.getElementById( "menu-home" ).classList.remove( "active" );
            style.unuse();
        } )
    }, [] )

    return (
        <>
            <Helmet>
                <title>Molla React Ecommerce - Fashion Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Fashion Store</h1>

            <div className="main">
                <div className="intro-slider-container mb-3 mb-lg-5">
                    <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider }>
                        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <div className="container">
                                <div className="intro-content text-center" style={ { marginTop: isIEBrowser() ? '50%' : '' } }>
                                    <h3 className="intro-subtitle cross-txt text-primary">SEASONAL PICKS</h3>
                                    <h1 className="intro-title text-white">Summer Sale</h1>
                                    <div className="intro-text text-white">up to 70% off</div>
                                    <div className="intro-action cross-txt">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white">
                                            <span>Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-2.jpg)` } }>
                            <div className="container">
                                <div className="intro-content text-center" style={ { marginTop: isIEBrowser() ? '50%' : '' } }>
                                    <h3 className="intro-subtitle text-primary cross-txt">Women's Accessories</h3>
                                    <h1 className="intro-title text-white">Save up to</h1>
                                    <div className="intro-text text-white">30-50% off</div>
                                    <div className="intro-action cross-txt">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white">
                                            <span>Discover More</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                    <span className="slider-loader text-white"></span>
                </div>

                <div className="container banners">
                    <div className="row">
                        <div className="col-lg-6">
                            <Banner banner={ data.banners[ 0 ] } />
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Banner banner={ data.banners[ 1 ] } />
                        </div>

                        <div className="col-sm-6 col-lg-3">
                            <Banner banner={ data.banners[ 2 ] } />

                            <Banner banner={ data.banners[ 3 ] } />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2 className="title">Recent Arrivals</h2>
                            <div className="products-container mb-7">
                                <div className="row justify-content-center">
                                    <NewCollection />
                                </div>

                                <div className="more-container text-center mt-0 mb-0">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-primary-2 btn-more">
                                        <span>View more Products</span>
                                    </Link>
                                </div>

                            </div>
                        </div>

                        <aside className="col-lg-3">
                            <Sidebar />
                        </aside>
                    </div>

                    <hr className="mt-0 mb-4" />
                    <h2 className="title text-center brands">Shop by Brands</h2>

                    <Brand adClass="mt-3 mb-4 owl-simple" count={ 7 } />
                </div>

                <div className="bg-lighter pt-5 pb-5">
                    <div className="container">
                        <div className="heading text-center">
                            <h2 className="title instagram">Let Us Inspire You On Instagram</h2>
                            <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                        </div>

                        <InstagramSection adClass="mb-3" />

                        <div className="more-container text-center">
                            <Link to="#" className="btn btn-outline-primary-2 btn-more">@Molla Instagram</Link>
                        </div>
                    </div>
                </div>
            </div>

            <NewsletterModal demo="18" />

            <QuickViewTwo />
        </>
    )
}

export default HomePage;