import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { trendingSlider } from '../settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import data from '../../mock_data/data.json';
import { getProductsByCategory, getFeaturedProducts } from '../../services';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;
    let products = props.products;
    products = getFeaturedProducts( products.slice( 35, 50 ) );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Trending Products</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        { data.home_categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ index }>
                                <span className="nav-link">{ cat.name }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-5col d-none d-xl-block">
                    <div className="banner">
                        <Link to="#">
                            <div className="lazy-overlay bg-3"></div>

                            <LazyLoadImage
                                src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-4.jpg` }
                                alt="banner"
                                effect="blur"
                                width={ 100 }
                                height={ 400 }
                            />
                        </Link>
                    </div>
                </div>

                <div className="col-xl-4-5col">
                    { data.home_categories.map( ( cat, index ) =>
                        <TabPanel key={ index }>
                            <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider }>
                                { getProductsByCategory( products, cat.name ).map( ( item, index ) =>
                                    <ProductNine
                                        product={ item }
                                        key={ "trendy" + index }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        onAddToCompare={ addToCompare }
                                        showQuickView={ showQuickViewModal }
                                        type={ 2 }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );