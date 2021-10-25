import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Helmet } from 'react-helmet';

// import Custom Components
import QuickView from '../features/product/common/quickview';
import Brand from '../features/brand';
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import Service from '../features/service';

import Banner from './banner';
import IntroSlider from './intro_slider';
import CTA from './cta-section';
import SpecialCollection from './special-collection';
import HotCollection from './hot-collection';
import BlogSection from './blog-section';

import { introSlider } from '../settings';
import { isIEBrowser } from '../../utils';
import data from '../../mock_data/data';
import style from './style.scss';

export default function HomePage( props ) {
    useEffect( () => {
        if ( isIEBrowser ) {
            document.querySelector( '.header-center .header-search' ).style.marginLeft = "-1.1rem";
            document.querySelector( '.header-center .header-search' ).style.paddingLeft = "1rem";
        }

        document.getElementById( "menu-home" ).classList.add( "active" );
        document.querySelector( ".category-dropdown" ).classList.add( "show" );
        document.querySelector( ".category-dropdown .dropdown-menu" ).classList.add( "show" );

        style.use();

        return ( () => {
            document.getElementById( "menu-home" ).classList.remove( "active" );
            style.unuse();
        } )
    }, [] )

    return (
        <>
            <Helmet>
                <title>Molla React Ecommerce - Market</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Market</h1>

            <div className="main">
                <div className="intro-slider-container">
                    <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside" data-toggle="owl" carouselOptions={ introSlider } >
                        { data.introBanners.map( ( slider, index ) =>
                            <IntroSlider slider={ slider } key={ `introSlider_${index}` } />
                        ) }
                    </OwlCarousel>

                    <span className="slider-loader"></span>
                </div>

                <div className="mb-4"></div>

                <div className="container">
                    <h2 className="title text-center mb-2">Explore Popular Categories</h2>

                    <div className="cat-blocks-container">
                        <div className="row">
                            { data.home_categories.map( ( cat, index ) =>
                                <div className="col-6 col-sm-4 col-lg-2" key={ `popular_${index}` }>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` } className="cat-block">
                                        <div className="position-relative">
                                            <div className="lazy-overlay bg-3"></div>

                                            <LazyLoadImage
                                                src={ `${process.env.PUBLIC_URL}/assets/images/home/cats/${parseInt( index ) + 1}.jpg` }
                                                alt="cat"
                                                width={ 100 }
                                                height={ 100 }
                                                effect="blur"
                                            />
                                        </div>
                                        <h3 className="cat-block-title">{ cat }</h3>
                                    </Link>
                                </div>
                            ) }
                        </div>
                    </div>
                </div>

                <div className="mb-2"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3" >
                            <Banner banner={ data.categoryBanners[ 0 ] } />
                        </div>
                        <div className="col-sm-6 col-lg-3 order-lg-last" >
                            <Banner banner={ data.categoryBanners[ 1 ] } />
                        </div>
                        <div className="col-lg-6" >
                            <Banner banner={ data.categoryBanners[ 2 ] } />
                        </div>
                    </div>
                </div>

                <div className="mb-3"></div>

                <div className="bg-light pt-3 pb-5">
                    <div className="container">
                        <HotCollection />
                    </div>
                </div>

                <div className="mb-3"></div>

                <div className="container electronics">
                    <SpecialCollection category="Electronics" />
                </div>

                <div className="mb-3"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <Banner banner={ data.categoryBanners[ 3 ] } />
                        </div>

                        <div className="col-lg-6">
                            <Banner banner={ data.categoryBanners[ 4 ] } />
                        </div>
                    </div>
                </div>

                <div className="mb-1"></div>

                <div className="container furniture">
                    <SpecialCollection category="Furniture" />
                </div>

                <div className="mb-3"></div>

                <div className="container clothing">
                    <SpecialCollection category="Clothing & Apparel" />
                </div>

                <div className="mb-3"></div>

                <div className="container">
                    <h2 className="title title-border mb-5">Shop by Brands</h2>
                    <Brand count={ 7 } />
                </div>

                <CTA />

                <BlogSection />

                <div className="footer">
                    <Service />
                </div>
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    )
}