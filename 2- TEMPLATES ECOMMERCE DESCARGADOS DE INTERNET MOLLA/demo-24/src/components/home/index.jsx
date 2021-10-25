import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';
import QuickView from '../features/product/common/quickview';
import VideoModal from '../features/modal/video-modal';
import ServiceBox from '../features/service';
import OwlCarousel from '../features/owl-carousel';

// import Home Componenets
import Banner from './banner';
import BannerCarousel from './banner-carousel';
import BestCollection from './best-collection';
import FeaturedCollection from './featured-collection';
import VideoBanner from './video-banner';
import CTA from './cta-section';
import BlogSection from './blog-section';
import Instagram from './instagram';

// import Slider Settings
import { brandSlider, bannerSlider } from '../settings';

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
                <title>Molla React Ecommerce - Extreme Sport Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Extreme Sport Store</h1>

            <div className="main">
                <section className="logos">
                    <div className="container">
                        <hr className="mb-4" />

                        <div className="heading">
                            <p className="heading-cat">trending brands</p>
                        </div>

                        <Brand sliderOption={ brandSlider } count={ 7 } adClass="mb-5 owl-simple" />
                    </div>
                </section>

                <section className="banners center">
                    <div className="container">
                        <OwlCarousel adClass="owl-simple carousel-equal-height owl-full carousel-with-shadow row cols-2 cols-md-3" carouselOptions={ bannerSlider } >
                            { _data.banner.slice( 0, 3 ).map( ( item, index ) =>
                                <BannerCarousel data={ item } key={ `banner_group_${index}` } />
                            ) }
                        </OwlCarousel>
                    </div>
                </section>

                <section className="best-sellers">
                    <div className="container">
                        <div className="heading">
                            <p className="heading-cat">favourite from every category</p>

                            <h3 className="heading-title">Best Sellers</h3>
                        </div>

                        <BestCollection />
                    </div>
                </section>

                <section className="banners stretch mt-2">
                    <div className="container">
                        <div className="row">
                            <Banner data={ _data.banner[ 3 ] } />

                            <div className="col-lg-6 col-md-6 col-12 banner-sm-div">
                                {
                                    _data.banner.slice( 4, 8 ).map( ( item, index ) =>
                                        <Banner data={ item } key={ `banner_group_${index}` } />
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <FeaturedCollection />

                <VideoBanner />

                <CTA />

                <BlogSection />

                <section className="instagram mb-3">
                    <div className="container">
                        <div className="heading">
                            <p className="heading-cat">Follow Us On Instagram <span className="highlight">@molla_store<span></span></span></p>
                        </div>

                        <Instagram />
                    </div>
                </section>

                <ServiceBox />
            </div>

            <NewsletterModal />

            <QuickView />

            <VideoModal />
        </>
    );
}