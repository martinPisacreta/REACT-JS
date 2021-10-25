import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import QuickViewTwo from '../features/product/common/quickview-two';
import Service from '../features/service';
import NewsletterModal from '../features/modal/newsletter-modal';

import CTA from './cta-section';
import Banner from './banner';
import TrendyCollection from './trendy-collection';
import BlogSection from './blog-section';
import InstagramSection from './instagram-section';

// import Utils
import { isIEBrowser } from '../../utils';

import data from '../../mock_data/data';
import style from './style.scss';

function HomePage( props ) {
    useEffect( () => {
        document.getElementById( "menu-home" ).classList.add( "active" );
        style.use();

        if ( isIEBrowser() && document.querySelector( '.form-control' ) ) {
            document.querySelector( '.form-control' ).setAttribute( "style", "padding-left: 30px" );
        }

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
                <div className="intro-section bg-lighter pt-3">
                    <div className="container">
                        <div className="banner-group">
                            <div className="row">
                                <div className="col-md-5">
                                    <Banner banner={ data.categoryBanners[ 0 ] } />
                                </div>

                                <div className="col-md-7">
                                    <Banner banner={ data.categoryBanners[ 1 ] } />

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <Banner banner={ data.categoryBanners[ 2 ] } />
                                        </div>

                                        <div className="col-sm-6">
                                            <Banner banner={ data.categoryBanners[ 3 ] } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Service />
                </div>

                <div className="container">
                    <TrendyCollection />
                    <div className="mb-3"></div>
                </div>

                <CTA />

                <BlogSection />

                <div className="container-fluid">
                    <div className="heading text-center">
                        <h2 className="title">Follow us on instagram</h2>
                        <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                    </div>

                    <InstagramSection />
                </div>
            </div>

            <QuickViewTwo />

            <NewsletterModal />
        </>
    )
}

export default HomePage;