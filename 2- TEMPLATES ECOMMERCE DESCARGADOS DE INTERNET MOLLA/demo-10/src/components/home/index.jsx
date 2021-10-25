import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import QuickView from '../features/product/common/quickview';
import ServiceBox from '../features/service';
import ProductCategoryTwo from '../features/product-category/product-category-two';

// import Home Components
import IntroSlide from './intro-slide';
import Banner from './banner';
import NewCollection from './new-collection';
import TopCollection from './top-collection';
import CTAOne from './cta-section';
import CTATwo from './cta-section-two';
import BlogSection from './post-group';

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
                <title>Molla React Ecommerce - Shoes Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Shoes Store</h1>

            <div className="main">
                <div className="container">
                    <div className="intro-slider-container slider-container-ratio mb-2">
                        <OwlCarousel adClass="intro-slider owl-simple owl-light owl-nav-inside" carouselOptions={ introSlider }>
                            {
                                _data.introBanners.map( ( item, index ) =>
                                    <IntroSlide data={ item } key={ index } />
                                )
                            }
                        </OwlCarousel>

                        <span className="slider-loader"></span>
                    </div>
                </div>

                <div className="banner-group">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                    {
                                        _data.banner.slice( 0, 2 ).map( ( item, index ) =>
                                            <div className="col-sm-6" key={ `banner_${index}` }>
                                                <Banner data={ item } />
                                            </div>
                                        )
                                    }
                                </div>

                                <Banner data={ _data.banner[ 2 ] } />
                            </div>

                            <div className="col-lg-4 d-sm-none d-lg-block">
                                <Banner data={ _data.banner[ 3 ] } />
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceBox adClass="bg-transparent icon-boxes-separator" iconAdClass="text-primary" />

                <div className="bg-light pt-5 pb-10 mb-3">
                    <NewCollection />
                </div>

                <div className="container">
                    <div className="row justify-content-center">
                        {
                            _data.banner.slice( 4, 7 ).map( ( item, index ) =>
                                <div className="col-sm-6 col-md-4" key={ `cat_banner_${index}` }>
                                    <ProductCategoryTwo
                                        image={ item.img }
                                        adClass="font-weight-normal"
                                        category={ item.cat }
                                        count={ item.count } />
                                </div>
                            )
                        }
                    </div>
                </div>

                <div className="mb-4"></div>

                <TopCollection />

                <div className="container">
                    <CTAOne />
                </div>

                <BlogSection />

                <CTATwo />
            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}