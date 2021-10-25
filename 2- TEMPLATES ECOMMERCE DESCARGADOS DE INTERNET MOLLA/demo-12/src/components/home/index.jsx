import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import Service from '../features/service';
import QuickViewTwo from '../features/product/common/quickview-two';
import NewsletterModal from '../features/modal/newsletter-modal';

import Banner from './banner';
import NewCollection from './new-collection';

import { introSlider } from '../settings';
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
                    <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside owl-light" carouselOptions={ introSlider }>
                        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <div className="container intro-content text-center">
                                <h3 className="intro-subtitle text-white">SEASONAL PICKS</h3>
                                <h1 className="intro-title text-white">Get All The Good Stuff</h1>

                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white">
                                    <span>DISCOVER MORE</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel>

                    <span className="slider-loader text-white"></span>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <Banner banner={ data.banners[ 0 ] } />
                        </div>

                        <div className="col-md-6">
                            <Banner banner={ data.banners[ 1 ] } />

                            <Banner banner={ data.banners[ 2 ] } />
                        </div>
                    </div>

                    <div className="mb-3"></div>
                </div>

                <div className="bg-lighter pt-5 pb-5 mb-5">
                    <div className="container">
                        <div className="heading text-center mb-4">
                            <h2 className="title">Recent Arrivals</h2>
                            <p className="title-desc">Aliquam tincidunt mauris eurisus</p>
                        </div>

                        <NewCollection />
                    </div>
                </div>

                <div className="container">
                    <div className="heading text-center mb-4">
                        <h2 className="title">Popular Categories</h2>
                        <p className="title-desc">Vestibulum auctor dapibus neque</p>
                    </div>

                    <div className="row">
                        <div className="col-sm-6 col-lg-4">
                            <Banner banner={ data.banners[ 3 ] } />
                        </div>

                        <div className="col-sm-6 col-lg-4 order-lg-last">
                            <Banner banner={ data.banners[ 4 ] } />
                        </div>

                        <div className="col-lg-4">
                            <div className="row">
                                <div className="col-sm-6 col-lg-12">
                                    <Banner banner={ data.banners[ 5 ] } />
                                </div>

                                <div className="col-sm-6 col-lg-12">
                                    <Banner banner={ data.banners[ 6 ] } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <Service iconAdClass="" />
                </div>
            </div>

            <NewsletterModal demo="12" />

            <QuickViewTwo />
        </>
    )
}

export default React.memo( HomePage );