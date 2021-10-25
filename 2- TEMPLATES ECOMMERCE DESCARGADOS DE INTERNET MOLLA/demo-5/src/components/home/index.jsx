import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousels from '../features/owl-carousel';
import Brand from '../features/brand';
import VideoBanner from '../features/video-banner/video-banner-one';
import VideoModal from '../features/modal/video-modal';
import NewsletterModal from '../features/modal/newsletter-modal';
import Service from '../features/service';

import IntroSlide from './intro-slide';
import Banner from './banner';
import CTA from './cta-section'
import Instagram from './instagram';
import NewCollection from './new-collection';
import SpecialCollection from './special-collection';
import TrendyCollection from './trendy-collection';

import { introSlider } from '../settings';
import data from '../../mock_data/data.json';

import style from './style.scss';

function HomePage() {
    useEffect( () => {
        document.getElementById( "menu-home" ).classList.add( "active" );
        style.use();

        return ( () => {
            document.querySelector( ".header" ).style.position = "static";
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
                <div className="intro-slider-container mb-0">
                    <OwlCarousels adClass="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                        {
                            data.introBanners.map( ( item, index ) =>
                                <IntroSlide slide={ item } key={ index } />
                            )
                        }
                    </OwlCarousels>

                    <span className="slider-loader text-white"></span>
                </div>

                <Brand adClass="brands-border owl-simple mb-5" />

                <div className="container">
                    <div className="banner-group">
                        <div className="row">
                            <div className="col-md-6">
                                <Banner banner={ data.banners[ 0 ] } />
                            </div>

                            <div className="col-md-6">
                                <Banner banner={ data.banners[ 1 ] } />
                                <Banner banner={ data.banners[ 2 ] } />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-4"></div>

                <TrendyCollection />

                <div className="mb-5"></div>

                <VideoBanner
                    image={ `assets/images/home/bg-2.jpg` }
                    content="<span>New Collection</span><strong>Winter’19 <i>/</i> Spring’20</strong>"
                />

                <SpecialCollection />

                <NewCollection filter />

                <div className="mb-2"></div>

                <CTA />

                <div className="bg-lighter pt-7 pb-4" style={ { backgroundColor: "#fafafa" } }>
                    <div className="container">
                        <div className="instagram-feed-container">
                            <div className="row">
                                {
                                    data.instagram.slice( 0, 2 ).map( ( item, index ) =>
                                        <Instagram insta={ item } key={ index } />
                                    )
                                }

                                <div className="feed-col feed-col-title">
                                    <div className="instagram-feed-title">
                                        <i className="icon-instagram"></i>
                                        <p>@Molla_store <br />on instagram</p>
                                        <Link to="#">FOLLOW</Link>
                                    </div>
                                </div>

                                {
                                    data.instagram.slice( 2, 9 ).map( ( item, index ) =>
                                        <Instagram insta={ item } key={ index } />
                                    )
                                }
                            </div>
                        </div>

                        <Service />
                    </div>
                </div>
            </div>

            <VideoModal />
            <NewsletterModal />
        </>
    )
}

export default HomePage;