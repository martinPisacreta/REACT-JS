import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousels from '../features/owl-carousel';
import QuickView from '../features/product/common/quickview';
import Service from '../features/service';
import Brand from '../features/brand';
import NewsletterModal from '../features/modal/newsletter-modal';

import SpecialCollection from './special-collection';
import DealCollection from './deal-collection';
import TrendyCollection from './trendy-collection';
import TopCollection from './top-collection';
import IntroSlide from './intro-slide';
import Banner from './banner';
import CTAOne from './cta-section-one';
import CTATwo from './cta-section-two';
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
                <title>Molla React Ecommerce - Electronic Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Electronic Store</h1>

            <div className="main home-page">
                <div className="intro-section pt-3 pb-3 mb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="intro-slider-container slider-container-ratio mb-2 mb-lg-0">
                                    <OwlCarousels adClass="intro-slider owl-simple owl-dark owl-nav-inside" carouselOptions={ introSlider }>
                                        {
                                            data.introBanners.map( ( item, index ) =>
                                                <IntroSlide data={ item } key={ index } />
                                            )
                                        }
                                    </OwlCarousels>

                                    <span className="slider-loader"></span>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="intro-banners">
                                    {
                                        data.banner.map( ( item, index ) =>
                                            <Banner data={ item } key={ index } />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container featured">
                    <SpecialCollection />
                </div>

                <div className="mb-7 mb-lg-11"></div>

                <div className="container">
                    <CTAOne />
                </div>

                <DealCollection />

                <div className="container">
                    <Brand />
                </div>

                <div className="container">
                    <hr className="mt-3 mb-6" />
                </div>

                <div className="container trending">
                    <TrendyCollection />
                </div>

                <div className="container">
                    <hr className="mt-5 mb-6" />
                </div>

                <div className="container trending">
                    <TopCollection />
                </div>

                <div className="container">
                    <hr className="mt-5 mb-0" />
                </div>

                <Service adClass="bg-transparent mt-2 mb-2" />

                <CTATwo />
                <QuickView />
            </div>

            <NewsletterModal />
        </>
    )
}