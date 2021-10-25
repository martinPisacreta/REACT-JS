import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import Service from '../features/service';
import QuickViewTwo from '../features/product/common/quickview-two';
import NewsletterModal from '../features/modal/newsletter-modal';
import VideoBannerOne from '../features/video-banner/video-banner-one';
import VideoModal from '../features/modal/video-modal';

import CTA from './cta-section';
import InstgaramSection from './instagram-section';
import ShopCollection from './shop-collection';
import ClothCollection from './cloth-collection';
import BlogSection from './blog-section';
import { introSlider } from '../settings';

import { scrollToElement, isIEBrowser } from '../../utils';

import style from './style.scss';

function IndexSixteen( props ) {
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
                    <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside owl-light" carouselOptions={ introSlider }>
                        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <div className="container intro-content text-center" style={ isIEBrowser() ? { position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' } : {} }>
                                <h3 className="intro-subtitle">Want to know what's hot?</h3>
                                <h1 className="intro-title text-white">For Spring In The City</h1>

                                <Link to="#" className="btn btn-outline-white" data-target="#scroll-to-content" onClick={ scrollToElement }>
                                    <span>Start scrolling</span>
                                    <i className="icon-long-arrow-down"></i>
                                </Link>
                            </div>
                        </div>
                    </OwlCarousel>

                    <span className="slider-loader text-white"></span>
                </div>

                <div className="container" id="scroll-to-content">
                    <div className="pt-7"></div>

                    <Service adClass="" container="" iconAdClass="text-dark" />

                    <hr className="mt-2 mb-6" />

                    <div className="products-display">
                        <div className="heading text-center">
                            <h4 className="subtitle text-primary">Womens Clothing</h4>
                            <h2 className="title">Refresh Your Wardrobe</h2>
                            <p className="title-desc">Discover this season’s latest trends with the newest additions to <br />our women’s clothing collection.</p>
                        </div>

                        <ClothCollection type="Dress" from={ 36 } to={ 38 } single={ 35 } />

                        <ClothCollection type="Coat&jacket" from={ 38 } to={ 40 } single={ 44 } />
                    </div>
                </div>

                <div className="bg-lighter pt-6 pb-9">
                    <div className="container">
                        <div className="heading text-center">
                            <h2 className="title">Shop The Collection</h2>
                            <p className="title-desc">Donec nec justo eget felis facilisis fermentum. <br />Aliquam porttitor mauris sit amet orci..</p>
                        </div>

                        <ShopCollection />
                    </div>
                </div>

                <VideoBannerOne content={ `<span>Spring / Summer</span><strong>New & Stylish</strong><br> Collection ${( new Date() ).getFullYear()}` }
                    image="assets/images/home/bg-1.jpg" />

                <div className="mb-6"></div>

                <BlogSection />
                <CTA />

                <div className="bg-lighter instagram pb-5">
                    <div className="container">
                        <h2 className="title text-center mb-3 mb-md-4">Let Us Inspire You On Instagram</h2>

                        <InstgaramSection />
                    </div>
                </div>
            </div>

            <VideoModal />

            <NewsletterModal />

            <QuickViewTwo />
        </>
    )
}

export default IndexSixteen;