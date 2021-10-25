import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousels from '../features/owl-carousel';
import QuickView from '../features/product/common/quickview';
import SideBarFilter from '../features/sidebar/sidebar-filter';
import NewsletterModal from '../features/modal/newsletter-modal';

import IntroSlide from './intro-slide';
import ProductCollection from './product-collection';
import { introSlider } from '../settings';

import data from '../../mock_data/data';
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

    function hideSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) )
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        document.querySelector( '.widget-filter-area' ).classList.remove( 'active' );
    }

    return (
        <>
            <Helmet>
                <title>Molla React Ecommerce - Furniture Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Furniture Store</h1>

            <div className="main">
                <div className="intro-slider-container mb-4">
                    <OwlCarousels adClass="intro-slider owl-simple owl-nav-inside" carouselOptions={ introSlider }>
                        {
                            data.introBanners.map( ( item, index ) =>
                                <IntroSlide slide={ item } key={ `intro_${index}` } />
                            )
                        }
                    </OwlCarousels>

                    <span className="slider-loader"></span>
                </div>

                <div className="container" style={ { overflow: "hidden" } }>
                    <SideBarFilter />

                    <ProductCollection />
                </div>
            </div>

            <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>

            <QuickView />

            <NewsletterModal />
        </>
    )
}

export default HomePage;