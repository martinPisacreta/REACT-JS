import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import NewsletterModal from '../features/modal/newsletter-modal';
import ServiceBox from '../features/service';
import Brand from '../features/brand';
import QuickView from '../features/product/common/quickview-two';

// import Home Components
import HomeSlide from './home-slide';
import NewCollection from './new-collection';
import TrendyCollection from './trendy-collection';
import Banner from './banner';
import Instagram from './instagram';

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
                <title>Molla React Ecommerce - Fashion Left Navigation Store</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Fashion Left Navigation Store</h1>

            <div className="main">
                <section className="slider">
                    <div className="intro-slider-container mb-3">
                        <OwlCarousel adClass="intro-slider owl-theme owl-nav-inside owl-light" carouselOptions={ introSlider } >
                            {
                                _data.introBanners.map( ( item, index ) =>
                                    <HomeSlide data={ item } key={ index } />
                                )
                            }
                        </OwlCarousel>

                        <span className="slider-loader"></span>
                    </div>
                </section>

                <ServiceBox adClass="service" iconAdClass="text-dark" />

                <section className="new-women row">
                    <div className="banner col-lg-6 col-md-5 col-sm-6 col-12">
                        <Banner data={ _data.banner[ 0 ] } />
                    </div>

                    <NewCollection type={ "Women" } />
                </section>

                <section className="testimonials">
                    <div className="testimonials-content">
                        <span className="quote">“</span>

                        <div className="content">
                            <h4><i>Sed egestas, antet vulputate volutpat, eros pede semperest, vitae luctus metus</i></h4>

                            <h4><i>libero eu augue Morobi purus libero, faucibus acipiscing.</i></h4>
                        </div>
                        <div className="creater">
                            <p className="name">Charly Smith,</p>

                            <p className="role">Customer</p>
                        </div>
                    </div>
                </section>

                <section className="new-men row mt-12">
                    <NewCollection type={ "Men" } />

                    <div className="banner col-lg-6 col-md-5 col-sm-6 col-12">
                        <Banner data={ _data.banner[ 1 ] } />
                    </div>
                </section>

                <section className="banner-section">
                    <Banner data={ _data.banner[ 2 ] } />

                    {
                        _data.banner.slice( 3, 5 ).map( ( item, index ) =>
                            <div className="col-lg-6 col-md-6 col-12" key={ `banner_${index}` }>
                                <Banner data={ item } />
                            </div>
                        )
                    }
                </section>

                <TrendyCollection />

                <section className="brands mb-7">
                    <div className="heading">
                        <p className="heading-cat">Shop by Brands</p>

                        <h3 className="heading-title">The World's Premium Brands<br />In One Destination.</h3>
                    </div>
                    <Brand adClass='owl-simple mt-5 mb-5' />
                </section>

                <section className="instagram">
                    <div className="heading">
                        <h3 className="heading-title">Shop by Instagram</h3>

                        <p className="heading-cat">@Molla Instagram</p>
                    </div>

                    <Instagram
                        adClass="instagram-images"
                    />
                </section>

                <section className="subscribe">
                    <div className="heading">
                        <h3 className="heading-title">Get The Latest Deals</h3>

                        <p className="heading-cat">and receive $20 coupon for first shopping</p>
                    </div>
                    <form action="#">
                        <div className="input-group">
                            <input type="email" placeholder="Enter your Email Address" aria-label="Email Adress" required />

                            <div className="input-group-append">
                                <button className="btn btn-subscribe" type="submit"><span>Subscribe</span></button>
                            </div>
                        </div>
                    </form>
                </section>

            </div>

            <NewsletterModal />

            <QuickView />
        </>
    );
}