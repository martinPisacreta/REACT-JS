import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';
import QuickView from '../features/product/common/quickview-two';
import ServiceBox from '../features/service';

// Import Home Components
import IntroSlide from './intro-slide';
import Banner from './banner';
import SpecialCollection from './special-collection';
import NewCollection from './new-collection';
import Instagram from './instagram';

// Import Slider Settings
import { brandSlider, introSlider } from '../settings';

// Import Data & Style
import _data from '../../mock_data/data.json';
import style from './style.scss';

export default function HomePage () {
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
                <div className="intro-slider-container">
                    <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                        {
                            _data.introBanners.map( ( item, index ) =>
                                <IntroSlide data={ item } key={ `intro_${index}` } />
                            )
                        }
                    </OwlCarousel>

                    <span className="slider-loader"></span>
                </div>

                <div className="pt-2 pb-2">
                    <div className="container brands">
                        <div className="banner-group">
                            <div className="row">
                                {
                                    _data.banner.slice( 0, 3 ).map( ( item, index ) =>
                                        <Banner data={ item } key={ `banner_${index}` } />
                                    )
                                }
                            </div>
                        </div>

                        <Brand adClass="mt-3 mb-3" count={ 7 } sliderOption={ brandSlider } />
                    </div>
                </div>

                <div className="mb-3"></div>

                <SpecialCollection />

                <div className="mb-3 mb-xl-2"></div>

                <div className="trending">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-4.jpg` } alt="Banner" />
                    </Link>
                    <div className="banner banner-big d-md-block">
                        <div className="banner-content text-center">
                            <h4 className="banner-subtitle text-white">Trending</h4>

                            <h3 className="banner-title text-white">New League</h3>

                            <p className="d-none d-lg-block text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br />Donec odio. Quisque volutpat mattis eros. </p>

                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary-white">
                                <span>Shop Now</span><i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container new-arrivals">
                    <div className="row">
                        {
                            _data.banner.slice( 3, 5 ).map( ( item, index ) =>
                                <Banner data={ item } key={ `banner2_${index}` } />
                            )
                        }
                    </div>
                </div>

                <div className="mb-5"></div>

                <NewCollection />

                <div className="mb-7"></div>

                <div className="container">
                    <ServiceBox boxAdClass="icon-box-card text-center" textAdClass="" />
                </div>

                <div className="container instagram">
                    <div className="heading text-center">
                        <h2 className="title title-lg">Follow Us On Instagram</h2>

                        <p className="title-desc">Wanna share your style with us?</p>
                    </div>
                </div>

                <Instagram />
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}