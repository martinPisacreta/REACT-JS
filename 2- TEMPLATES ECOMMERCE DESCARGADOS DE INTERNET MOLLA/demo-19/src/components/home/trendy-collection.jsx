import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';
import { getNewProducts, getTopSellingProducts, getFeaturedProducts } from '../../services';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = getFeaturedProducts( products.slice( 35, 56 ) );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <TabList className="nav nav-pills nav-big nav-border-anim justify-content-center mb-5">
                <Tab className="nav-item">
                    <span className="nav-link">Now Trending</span>
                </Tab>
                <Tab className="nav-item">
                    <span className="nav-link">New Releases</span>
                </Tab>
                <Tab className="nav-item">
                    <span className="nav-link">Best-Rated</span>
                </Tab>
            </TabList>

            <div className="tab-content tab-content-carousel mt-2">
                <TabPanel className="p-0 react-tabs__tab-panel">
                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                        { products.map( ( product, index ) =>
                            <ProductNine
                                key={ `trending_${index}` }
                                product={ product }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                                onAddToCart={ addToCart }
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel className="p-0 react-tabs__tab-panel">
                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                        { getNewProducts( products ).map( ( product, index ) =>
                            <ProductNine
                                key={ `new_${index}` }
                                product={ product }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                                onAddToCart={ addToCart }
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel className="p-0 react-tabs__tab-panel">
                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                        { getTopSellingProducts( products ).map( ( product, index ) =>
                            <ProductNine
                                key={ `best_${index}` }
                                product={ product }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                                onAddToCart={ addToCart }
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>
            </div>
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( TrendyCollection );