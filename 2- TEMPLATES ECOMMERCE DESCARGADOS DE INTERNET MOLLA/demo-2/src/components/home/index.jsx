import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import ServiceBox from '../features/service';
import Brand from '../features/brand';

import TrendyCollection from './trendy-collection';
import RecentCollection from './recent-collection';
import BlogSection from './blog-section';
import IntroSlide from './intro-slide';
import CTA from './cta-section';
import BannerGroup from './banner-group';
import IntroBanner from './intro-banner';

import { introSlider } from '../settings';
import data from '../../mock_data/data.json';
import style from './style.scss';

export default function HomePage() {
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

            <div className="main">
                <div className="intro-section bg-lighter pb-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-slider-container slider-container-ratio slider-container-1 mb-2 mb-lg-0">
                                    <OwlCarousel adClass="intro-slider intro-slider-1 owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider }>
                                        {
                                            data.introBanners.map( ( item, index ) =>
                                                <IntroSlide data={ item } key={ index } />
                                            )
                                        }
                                    </OwlCarousel>

                                    <span className="slider-loader"></span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="intro-banners">
                                    <div className="row row-sm">
                                        {
                                            data.banner.map( ( item, index ) =>
                                                <div className="col-md-6 col-lg-12" key={ index }>
                                                    <IntroBanner data={ item } />
                                                </div>
                                            ) }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6"></div>

                        <Brand adClass="owl-simple" />
                    </div>
                </div>

                <div className="mb-6"></div>

                <TrendyCollection />

                <BannerGroup />

                <div className="mb-5"></div>

                <RecentCollection />

                <div className="mb-5"></div>

                <div className="container">
                    <hr />

                    <ServiceBox boxAdClass="icon-box-card text-center" />

                    <div className="mb-2"></div>
                </div>

                <BlogSection />

                <CTA />
            </div>

            <NewsletterModal />
        </>
    );
}
