import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import QuickViewTwo from '../features/product/common/quickview-two';
import OwlCarousels from '../features/owl-carousel';
import VideoBanner from '../features/video-banner/video-banner-one';
import VideoModal from '../features/modal/video-modal';
import NewsletterModal from '../features/modal/newsletter-modal';

import FirstCollection from './first-collection';
import SecondCollection from './second-collection';
import ThirdCollection from './third-collection';
import FourthCollection from './fourth-collection';
import BlogSection from './blog-section';
import CTA from './cta-section';

import { introSlider } from '../settings';

import style from './style.scss';
import { scrollToElement } from '../../utils';

function HomePage() {
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
                <title>Molla React Ecommerce - Lookbook Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Lookbook Store</h1>

            <div className="main home-page">
                <div className="intro-slider-container">
                    <OwlCarousels adClass="intro-slider owl-simple owl-nav-inside owl-light" carouselOptions={ introSlider } >
                        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <div className="container intro-content text-center">
                                <h3 className="intro-subtitle">Want to know what's hot?</h3>
                                <h1 className="intro-title text-white">Spring Lookbook { ( new Date() ).getFullYear() }</h1>

                                <Link to="#scroll-to-content" className="btn btn-outline-primary-2 scroll-to" data-target="#scroll-to-content" onClick={ scrollToElement }>
                                    <span>Start scrolling</span>
                                    <i className="icon-long-arrow-down"></i>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousels>

                    <span className="slider-loader text-white"></span>
                </div>

                <FirstCollection />

                <SecondCollection />

                <VideoBanner image="assets/images/home/bg-1.jpg" content={ `<span>Spring / Summer</span>The New Romantic Collection ${( new Date() ).getFullYear()}` } adClass="video-fullheight" />

                <ThirdCollection />

                <FourthCollection />

                <div className="mb-2"></div>

                <div className="container-fluid">
                    <CTA />
                </div>

                <div className="mb-7"></div>

                <BlogSection />
            </div>

            <VideoModal />

            <QuickViewTwo />

            <NewsletterModal />
        </>
    )
}

export default HomePage;