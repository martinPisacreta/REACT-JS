import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';
import ServiceBox from '../features/service';
import QuickView from '../features/product/common/quickview-two';

// import Home Components
import IntroSlide from './intro-slide';
import Banner from './banner';
import BestCollection from './best-collection';
import SpecialCollection from './special-collection';
import CatBanner from './cat-banner';
import NewCollection from './new-collection';
import CTA from './cta-section';
import Instagram from './instagram';

// import Slider Settings
import { introSlider } from '../settings';

// import Data & Style
import _data from '../../mock_data/data';
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
                <title>Molla React Ecommerce - Sport Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Sport Store</h1>

            <div className="main">
                <div className="intro-slider-container mb-5">
                    <OwlCarousel adClass="intro-slider owl-theme owl-light owl-nav-inside" carouselOptions={ introSlider }>
                        {
                            _data.introBanners.map( ( item, index ) =>
                                <IntroSlide data={ item } key={ index } />
                            )
                        }
                    </OwlCarousel>

                    <span className="slider-loader"></span>
                </div>

                <div className="container banner-container">
                    {
                        _data.banner.slice( 0, 3 ).map( ( item, index ) =>
                            <div className="col-12 col-sm-10 col-md-8 col-lg-4 col-pd1" key={ `banner_group ${index}` }>
                                <Banner data={ item } />
                            </div>
                        )
                    }
                </div>

                <Brand adClass="mb-5 owl-simple" count={ 7 } />

                <div className="container bestsellers">
                    <hr className="mb-3" />
                    <div className="heading">
                        <h2 className="title text-center">BEST SELLERS</h2>

                        <p className="content text-center mb-4">The Trends Boutique: The latest fashion trends from top brands!</p>
                    </div>

                    <BestCollection />
                </div>

                <SpecialCollection />

                <div className="container category-banner">
                    <div className="row">
                        {
                            _data.banner.slice( 3, 7 ).map( ( item, index ) => {
                                return (
                                    <div className="col-lg-3 col-md-6 col-sm-6" key={ `cat_banner_${index}` }>
                                        <CatBanner data={ item } />
                                    </div>
                                )
                            } )
                        }
                    </div>
                </div>

                <NewCollection />

                <div className="container newsletter">
                    <CTA />
                </div>

                <ServiceBox
                    iconAdClass="text-dark"
                    adClass=""
                />

                <Instagram />
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}