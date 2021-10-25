import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import { getSaleProducts, getTopRatingProducts, getFeaturedProducts } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

// Import Custom Component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { featuredSlider } from '../settings';

function SpecialCollection( props ) {
    const { addToCart, addToCompare, toggleWishlist, showQuickViewModal } = props;
    let products = props.products;
    products = getFeaturedProducts( products.slice( 35, 50 ) );

    return (
        <Tabs selectedTabClassName="show">
            <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                <Tab className="nav-item">
                    <span className="nav-link">Featured</span>
                </Tab>

                <Tab className="nav-item">
                    <span className="nav-link">On Sale</span>
                </Tab>

                <Tab className="nav-item">
                    <span className="nav-link">Top Rated</span>
                </Tab>
            </TabList>

            <TabPanel>
                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                    { products.map( ( item, index ) =>
                        <ProductNine
                            key={ item.name + index }
                            product={ item }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist }
                            onAddToCompare={ addToCompare }
                            showQuickView={ showQuickViewModal }
                        />
                    ) }
                </OwlCarousel>
            </TabPanel>

            <TabPanel>
                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                    { getSaleProducts( products ).map( ( item, index ) =>
                        <ProductNine
                            key={ index }
                            product={ item }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist }
                            onAddToCompare={ addToCompare }
                            showQuickView={ showQuickViewModal }
                        />
                    ) }
                </OwlCarousel>
            </TabPanel>

            <TabPanel>
                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ featuredSlider } >
                    { getTopRatingProducts( products ).map( ( item, index ) =>
                        <ProductNine
                            key={ "special" + index }
                            product={ item }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist }
                            onAddToCompare={ addToCompare }
                            showQuickView={ showQuickViewModal }
                        />
                    ) }
                </OwlCarousel>
            </TabPanel>
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, addToCompare, showQuickViewModal, toggleWishlist } )( SpecialCollection );