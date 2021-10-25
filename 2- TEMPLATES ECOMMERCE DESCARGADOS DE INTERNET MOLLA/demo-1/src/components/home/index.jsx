import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import ServiceBox from '../features/service';
import Brand from '../features/brand';

import SpecialCollection from './special-collection';
import TopCollection from './top-collection';
import BlogSection from './blog-section';
import BannerGroup from './banner-group';
import HomeSlide from './home-slide';
import DealBanner from './deal-banner';
import CTA from './cta-section';
import { introSlider } from '../settings';

import _data from '../../mock_data/data.json';
import style from './style.scss';

export default function () {
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
                <title>Molla React Ecommerce - Furniture Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Furniture Store</h1>

            <div className="main home-page">
                <div className="intro-slider-container">
                    <OwlCarousel adClass="owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider } carouselId="introSlider">
                        {
                            _data.introBanners.map( ( item, index ) =>
                                <HomeSlide data={ item } key={ index } />
                            )
                        }
                    </OwlCarousel>

                    <span className="slider-loader text-white"></span>
                </div>

                <Brand adClass="brands-border owl-simple" />

                <div className="mb-3 mb-lg-5"></div>

                <BannerGroup />

                <div className="mb-3"></div>

                <SpecialCollection />

                <div className="mb-5"></div>

                <div className="bg-light deal-container pt-5 pb-3 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <DealBanner />
                            </div>

                            <div className="col-lg-3">
                                <div className="banner banner-overlay banner-overlay-light text-center d-none d-lg-block">
                                    <Link to="#">
                                        <div className="lazy-overlay"></div>

                                        <LazyLoadImage
                                            alt="deal-banner"
                                            src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-5.jpg` }
                                            threshold={ 100 }
                                            effect="blur"
                                            width={ 100 }
                                            height={ 500 }
                                        />
                                    </Link>

                                    <div className="banner-content banner-content-top banner-content-center">
                                        <h4 className="banner-subtitle">The Best Choice</h4>
                                        <h3 className="banner-title">AGEN</h3>
                                        <div className="banner-text text-primary">$49.99</div>
                                        <Link to="#" className="btn btn-outline-gray banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-6"></div>

                <TopCollection />

                <div className="container">
                    <hr className="mt-1 mb-6" />
                </div>

                <BlogSection />
            </div>

            <ServiceBox adClass="bg-light" />

            <CTA />

            <NewsletterModal />
        </>
    );
}