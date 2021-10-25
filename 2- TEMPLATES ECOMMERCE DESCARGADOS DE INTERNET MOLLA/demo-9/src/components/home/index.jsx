import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';
import QuickView from '../features/product/common/quickview-two';
import ServiceBox from '../features/service';

// import Home Components
import IntroSlide from './intro-slide';
import Banner from './banner';
import TrendyCollection from './trendy-collection';
import CTA from './cta-section';
import ShoesCollection from './shoes-collection';
import BagCollection from './bag-collection';
import Instagram from './instagram';

// import Slider Settings
import { brandSlider, introSlider } from '../settings';

//import Data & Style
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
                <div className="intro-section">
                    <div className="intro-section-slider">
                        <div className="container">
                            <div className="intro-slider-container slider-container-ratio mb-0">
                                <OwlCarousel adClass="intro-slider owl-simple owl-light" carouselOptions={ introSlider }>
                                    {
                                        _data.introBanners.map( ( item, index ) =>
                                            <IntroSlide data={ item } key={ index } />
                                        )
                                    }
                                </OwlCarousel>

                                <span className="slider-loader"></span>
                            </div>
                        </div>
                    </div>

                    <ServiceBox />
                </div>

                <div className="pt-3 pb-3">
                    <div className="container">
                        <div className="banner-group">
                            <div className="row">
                                {
                                    _data.banner.slice( 0, 2 ).map( ( item, index ) =>
                                        <Banner data={ item } key={ `banner_${index}` } />
                                    )
                                }

                                <div className="col-12 col-lg-4">
                                    <div className="row">
                                        {
                                            _data.banner.slice( 2, 4 ).map( ( item, index ) =>
                                                <Banner data={ item } key={ `banner_${index + 2}` } />
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Brand adClass="mt-4 mb-3" count={ 6 } sliderOption={ brandSlider } />
                    </div>
                </div>

                <div className="bg-lighter pt-6">
                    <div className="container">
                        <TrendyCollection />
                    </div>
                </div>

                <div className="container featured mt-4 pb-2">
                    <ShoesCollection />
                </div>

                <div className="container">
                    <hr className="mt-3 mb-4" />
                </div>

                <div className="container pb-2">
                    <BagCollection />
                </div>

                <div className="container">
                    <hr className="mt-3 mt-xl-1 mb-0" />

                    <CTA />
                </div>

                <Instagram />
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}