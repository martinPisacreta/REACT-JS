import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { getFeaturedProducts, getSaleProducts, getTopRatingProducts } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

function SpecialCollection( props ) {
    const { addToCart, toggleWishlist } = props;
    let products = props.products;
    products = products.slice( 20, 35 );

    let featuredProducts = getFeaturedProducts( products );
    let saleProducts = getSaleProducts( products );
    let topProducts = getTopRatingProducts( products );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
            <div className="container">
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
            </div>

            <div className="container-fluid">
                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" carouselOptions={ productSlider } carouselId="special-one">
                        { featuredProducts.map( ( item, index ) =>
                            <ProductNine
                                type="carousel"
                                product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                key={ index } />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" carouselOptions={ productSlider } carouselId="special-two">
                        { saleProducts.map( ( item, index ) =>
                            <ProductNine
                                type="carousel"
                                product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                key={ index } />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow cols-xxl-6 cols-xl-5 cols-lg-4 cols-md-3 cols-xs-2" carouselOptions={ productSlider } carouselId="special-three">
                        { topProducts.map( ( item, index ) =>
                            <ProductNine
                                type="carousel"
                                product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                key={ index } />
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( SpecialCollection );
