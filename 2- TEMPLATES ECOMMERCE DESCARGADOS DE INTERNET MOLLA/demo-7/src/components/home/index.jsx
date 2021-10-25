import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import Service from '../features/service';
import OwlCarousels from '../features/owl-carousel';
import Testimonial from '../features/testimonial';
import QuickView from '../features/product/common/quickview';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';

import Banner from './banner';
import BlogSection from './blog-section';
import FeaturedCollection from './featured-collection';
import NewCollection from './new-collection';

import { testiSlider, bannerSlider } from '../settings';
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

    return (
        <>
            <Helmet>
                <title>Molla React Ecommerce - Fashion Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Fashion Store</h1>

            <div className="main home-page">
                <div className="container-fluid banner-section">
                    <div className="row">
                        {
                            data.banners.slice( 0, 2 ).map( ( item, index ) =>
                                <div className="col-md-6" key={ `banner1_${index}` }>
                                    <Banner banner={ item } />
                                </div>
                            )
                        }
                    </div>

                    <div className="row justify-content-center">
                        <OwlCarousels adClass="owl-simple container" carouselOptions={ bannerSlider }>
                            {
                                data.banners.slice( 2, 5 ).map( ( item, index ) =>
                                    <Banner banner={ item } key={ `banner2_${index}` } />
                                )
                            }
                        </OwlCarousels>
                    </div>
                </div>

                <Service />

                <div className="bg-light-2 pt-6 pb-6 featured">
                    <div className="container-fluid">
                        <FeaturedCollection />
                    </div>
                </div>

                <div className="mb-6"></div>

                <div className="container-fluid">
                    <NewCollection />

                    <hr className="mt-0 mb-6" />

                    <BlogSection />
                </div>


                <div className="bg-light-2 pt-7 pb-6 testimonials">
                    <div className="container-fluid">
                        <h2 className="title text-center mb-2">Our Customers Say</h2>

                        <OwlCarousels adClass="owl-simple owl-testimonials" carouselOptions={ testiSlider } >
                            {
                                data.testimonials.map( ( item, index ) =>
                                    <Testimonial key={ index } lead={ item.lead } content={ item.content } name={ item.name } job={ item.job } />
                                ) }
                        </OwlCarousels>
                    </div>
                </div>

                <Brand adClass="owl-simple brands-border" />
            </div>

            <QuickView />
            <NewsletterModal />
        </>
    )
}

export default HomePage;