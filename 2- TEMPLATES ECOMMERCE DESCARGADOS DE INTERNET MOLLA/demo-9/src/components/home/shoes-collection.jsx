import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

// import Slider Settings
import { featuredSlider } from "../settings";

// import Data
import _data from '../../mock_data/data';

function FeaturedCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = products.slice( 9, 20 );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Featured Footwear</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
                        { _data.category.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ index }>
                                <span className="nav-link">{ `${cat}'s Shoes` }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <div className="banner banner-overlay product-banner">
                        <Link to="#">
                            <img src={ process.env.PUBLIC_URL + '/assets/images/home/banners/banner-5.jpg' } alt="banner" />
                        </Link>

                        <div className="banner-content">
                            <div className="banner-top">
                                <div className="banner-title text-white text-center">
                                    <i className="la la-star-o"></i><h3 className="text-white">Our Experts<br />Recommend</h3>
                                </div>
                            </div>

                            <div className="banner-bottom">
                                <div className="product-cat">
                                    <h4 className="text-white">Sale</h4>
                                </div>

                                <div className="product-price">
                                    <h4 className="text-white">$29.99</h4>
                                </div>

                                <div className="product-txt">
                                    <p className="text-white">Wedge-heel sandals</p>
                                </div>

                                <Link to="#" className="btn btn-outline-white banner-link">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9">
                    { _data.category.map( ( cat, index ) =>
                        <TabPanel key={ index }>
                            <OwlCarousel adClass="owl-simple carousel-euqal-height carousel-with-shadow" carouselOptions={ featuredSlider }>
                                { getProductsByCategory( getProductsByCategory( products, cat ), 'Shoes' ).map( ( item, index ) =>
                                    <ProductNine product={ item }
                                        adClass="text-center product-7"
                                        key={ index }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        showQuickView={ showQuickViewModal }
                                    />
                                ) }
                            </OwlCarousel>
                        </TabPanel>
                    ) }
                </div>
            </div>
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( FeaturedCollection );