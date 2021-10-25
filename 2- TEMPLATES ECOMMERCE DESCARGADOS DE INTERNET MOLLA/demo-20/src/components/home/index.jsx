import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import NewsletterModal from '../features/modal/newsletter-modal';
import Service from '../features/service';

import Banner from './banner';
import BestCollection from './best-collection';
import NewCollection from './new-collection';
import BlogSection from './blog-section';
import CTA from './cta-section';

import data from '../../mock_data/data';
import style from './style.scss';

function IndexTwenty( props ) {
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
                <title>Molla React Ecommerce - Book Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Book Store</h1>

            <div className="main home-page">
                <div className="intro-section pt-lg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-6">
                                <Banner banner={ data.banners[ 0 ] } />
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <Banner banner={ data.banners[ 1 ] } />
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <Banner banner={ data.banners[ 2 ] } />
                                <Banner banner={ data.banners[ 3 ] } />
                            </div>

                        </div>
                    </div>

                    <div className="icon-boxes-container bg-transparent">
                        <Service boxAdClass="icon-box-side" iconAdClass="" />
                    </div>
                </div>

                <div className="bestseller-products bg-light pt-5 pb-5 mb-5">
                    <div className="block">
                        <div className="block-wrapper ">
                            <div className="container">
                                <div className="heading heading-flex">
                                    <div className="heading-left">
                                        <h2 className="title">Bestsellers</h2>
                                    </div>

                                    <div className="heading-right">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>

                                <BestCollection type="best" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="heading heading-flex">
                        <div className="heading-left">
                            <h2 className="title">New Releases</h2>
                        </div>

                        <div className="heading-right">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>

                    <div className="row">
                        <NewCollection />
                    </div>
                </div>

                <div className="mb-5"></div>

                <div className="banner-group mb-2">
                    <div className="container">
                        <div className="row justify-content-center">
                            {
                                data.banners.slice( 4, 7 ).map( ( item, index ) =>
                                    <div className="col-md-6 col-lg-4" key={ `banner_${index}` }>
                                        <Banner banner={ item } />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="block-wrapper ">
                        <div className="container">
                            <div className="heading heading-flex">
                                <div className="heading-left">
                                    <h2 className="title">Picks From Our Experts</h2>
                                </div>

                                <div className="heading-right">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="title-link">View more Products <i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>

                            <BestCollection type="expert" />
                        </div>
                    </div>
                </div>

                <div className="mb-5"></div>

                <BlogSection />
                <CTA />
            </div>

            <NewsletterModal />
        </>
    )
}

export default IndexTwenty;