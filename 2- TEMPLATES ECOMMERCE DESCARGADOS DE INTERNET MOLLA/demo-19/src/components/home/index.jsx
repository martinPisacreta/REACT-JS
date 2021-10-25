import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import NewsletterModal from '../features/modal/newsletter-modal';
import Service from '../features/service';
import QuickViewTwo from '../features/product/common/quickview-two';

import BannerGroup from './banner-group';
import Banner from './banner';
import SideNavBar from './sidenav';
import NewsletterSection from './newsletter-section';
import TrendyCollection from './trendy-collection';
import SoonCollection from './soon-collection';
import BestCollection from './best-collection';
import BlogSection from './blog-section';

import data from '../../mock_data/data.json';
import style from './style.scss';

function HomePage( props ) {
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
                <title>Molla React Ecommerce - Game Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Game Store</h1>

            <div className="wrap-container">
                <div className="main">
                    <div className="mb-2"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 d-none d-xl-block">
                                <SideNavBar />
                            </div>

                            <div className="col-lg-8 col-xl-6">
                                <Banner banner={ data.banners[ 0 ] } />
                            </div>

                            <div className="col-sm-6 col-lg-4 col-xl-3">
                                <Banner banner={ data.banners[ 1 ] } />

                                <Banner banner={ data.banners[ 2 ] } />
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <Banner banner={ data.banners[ 3 ] } />
                            </div>

                            <div className="col-lg-9">
                                <Banner banner={ data.banners[ 4 ] } />
                            </div>
                        </div>
                    </div>

                    <Service />

                    <div className="bg-light pt-3 pb-5 mb-5">
                        <div className="container">
                            <TrendyCollection />
                        </div>
                    </div>

                    <div className="container">
                        <BannerGroup />
                    </div>

                    <div className="container">
                        <hr className="mt-0 mb-4" />
                    </div>

                    <div className="container">
                        <div className="heading heading-flex mb-2 mb-lg-3">
                            <div className="heading-left">
                                <h2 className="title mb-0">Games Coming Soon</h2>
                            </div>

                            <div className="heading-right">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="title-link">View more products <i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="games-soon">
                            <div className="row">
                                <SoonCollection />
                            </div>
                        </div>
                    </div>

                    <div className="mb-3"></div>

                    <div className="container">
                        <NewsletterSection />
                    </div>

                    <div className="container">
                        <div className="heading heading-flex mb-2">
                            <div className="heading-left">
                                <h2 className="title mb-5">Consoles & Accessories</h2>
                            </div>

                            <div className="heading-right">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="title-link">View more products <i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>

                        <BestCollection />
                        <div className="mb-5"></div>
                    </div>

                    <BlogSection />
                </div>
            </div>

            <QuickViewTwo />
            <NewsletterModal />
        </>
    )
}

export default HomePage;