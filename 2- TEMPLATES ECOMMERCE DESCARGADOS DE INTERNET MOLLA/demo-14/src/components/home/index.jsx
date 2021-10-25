import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import Service from '../features/service';
import QuickView from '../features/product/common/quickview';
import NewsletterModal from '../features/modal/newsletter-modal';
import Brand from '../features/brand';

import Introslide from './intro-slide';
import Sidebar from './sidebar';
import Banner from './banner';
import CTA from './cta-section';
import TrendyCollection from './trendy-collection';
import ProductCollection from './product-collection';

import { introSlider, homeBrandSlider } from '../settings';

import data from '../../mock_data/data';
import style from './style.scss';

function HomePage() {
    useEffect( () => {
        document.getElementById( "menu-home" ).classList.add( "active" );
        style.use();

        document.getElementById( "menu-home" ).classList.add( "active" );
        document.querySelector( ".category-dropdown" ).classList.add( "show" );
        document.querySelector( ".category-dropdown .dropdown-menu" ).classList.add( "show" );

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
                <div className="mb-lg-2"></div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                            <div className="intro-slider-container slider-container-ratio mb-2">
                                <OwlCarousel adClass="intro-slider owl-simple owl-nav-inside" carouselOptions={ introSlider }>
                                    {
                                        data.introBanners.map( ( item, index ) =>
                                            <Introslide slide={ item } key={ `intro_${index}` } />
                                        )
                                    }
                                </OwlCarousel>

                                <span className="slider-loader"></span>
                            </div>
                        </div>
                        <div className="col-xl-3 col-xxl-2 d-none d-xxl-block">
                            <Banner data={ data.banners[ 7 ] } />
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 col-xxl-10">
                            <div className="row">
                                <div className="col-lg-12 col-xxl-4-5col">
                                    <div className="row banner-group">
                                        <div className="col-md-6">
                                            <Banner data={ data.banners[ 0 ] } />
                                        </div>

                                        <div className="col-md-6">
                                            <Banner data={ data.banners[ 1 ] } />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-xxl-5col d-none d-xxl-block">
                                    <Banner data={ data.banners[ 2 ] } />
                                </div>
                            </div>

                            <div className="mb-3"></div>

                            <Brand adClass="owl-simple brands-carousel" sliderOption={ homeBrandSlider } count={ 7 } />

                            <div className="mb-5"></div>

                            <TrendyCollection />

                            <div className="mb-5"></div>

                            <ProductCollection
                                category="Electronics"
                                index={ 0 }
                            />

                            <div className="mb-3"></div>

                            <ProductCollection
                                category="Furniture"
                                index={ 1 }
                            />

                            <div className="mb-3"></div>

                            <div className="row banner-group">
                                {
                                    data.banners.slice( 3, 5 ).map( ( item, index ) =>
                                        <div className="col-md-6" key={ `banner_${index}` }>
                                            <Banner data={ item } key={ `banner_${index}` } />
                                        </div>
                                    )
                                }
                            </div>

                            <div className="mb-3"></div>

                            <ProductCollection
                                category="Clothing"
                                index={ 2 }
                            />

                            <div className="mb-3"></div>

                            <ProductCollection
                                category="Cooking"
                                index={ 3 }
                            />

                            <div className="mb-3"></div>

                            <Service adClass="" />

                            <div className="mb-5"></div>
                        </div>
                        <Sidebar banners={ data.banners.slice( 5, 7 ) } />
                    </div>
                </div>
                <CTA />
            </div>

            <NewsletterModal demo="14" />
            <QuickView />
        </>
    )
}

export default HomePage;