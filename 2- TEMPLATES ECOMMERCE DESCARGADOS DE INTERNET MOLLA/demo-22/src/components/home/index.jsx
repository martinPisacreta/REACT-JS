import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import ServiceBox from '../features/service';
import Brand from '../features/brand';
import QuickView from '../features/product/common/quickview';

// import Home Components
import HomeSlide from './home-slide';
import SpecialCollection from './special-collection';
import Banner from './banner';
import CTA from './cta-section';
import NewCollection from './new-collection';
import BlogSection from './blog-section';

// import Slider Settings
import { introSlider } from '../settings';

// import Data & Style
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
                <title>Molla React Ecommerce - Tools Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Tools Store</h1>

            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="intro-slider-container mt-2">
                                <OwlCarousel adClass="intro-slider owl-theme owl-light owl-nav-inside" carouselOptions={ introSlider } >
                                    {
                                        _data.introBanners.slice( 0, 2 ).map( ( item, index ) =>
                                            <HomeSlide data={ item } key={ index } />
                                        )
                                    }
                                </OwlCarousel>

                                <span className="slider-loader"></span>
                            </div>
                        </div>

                        <div className="col-lg-4 banner">
                            <div className="row">
                                {
                                    _data.introBanners.slice( 2, 5 ).map( ( item, index ) =>
                                        <HomeSlide data={ item } key={ index } />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container text-center shop">
                    <h2 className="title mt-4 mb-5"> Shop by Brands </h2>

                    <Brand adClass="mb-5 owl-simple" count={ 7 } />
                </div>

                <SpecialCollection />

                <CTA />

                <div className="container banner-container">
                    <div className="row">
                        {
                            _data.banner.slice( 0, 2 ).map( ( item, index ) =>
                                <div className="col-lg-6 col-md-6 col-sm-6 banner-lg" style={ { minHeight: '21rem' } } key={ `banner_${index}` }>
                                    <Banner data={ item } />
                                </div>
                            )
                        }
                    </div>
                </div>

                <ServiceBox container="container service" boxAdClass="icon-box-side" iconAdClass="text-dark" />

                <div className="container popular">
                    <hr className="mb-5" />

                    <div className="section-title">
                        <div><p className="title"><span>Popular Products</span></p></div>

                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="link">See All Products</Link>
                    </div>

                    <NewCollection />
                </div>

                <div className="container bannerad">
                    <div className="banner-lg" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/banners/background-3.jpg)` } }>
                        <div className="price">
                            <h4 className="highlight">from</h4><h3>$39</h3><sup className="highlight">,99</sup>
                        </div>

                        <div className="content">
                            <h4>woodworking tools</h4>

                            <h3>from top rated brands</h3>

                            <div className="action">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>discover now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <BlogSection />
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}