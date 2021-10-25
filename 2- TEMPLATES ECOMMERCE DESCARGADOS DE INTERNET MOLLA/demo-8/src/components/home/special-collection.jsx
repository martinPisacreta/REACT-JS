import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// Import Services & Actions
import { getFeaturedProducts, getSaleProducts, getTopRatingProducts } from '../../services';
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';

// Import Slider Settings
import { productSlider } from '../settings';

function SpecialCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;
    let products = props.products;
    products = products.slice( 9, 20 );

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

            <div className="container">
                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow" carouselOptions={ productSlider }>
                        { featuredProducts.map( ( item, index ) =>
                            <ProductNine product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                                key={ index } />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow" carouselOptions={ productSlider }>
                        { saleProducts.map( ( item, index ) =>
                            <ProductNine product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                                key={ index } />
                        ) }
                    </OwlCarousel>
                </TabPanel>

                <TabPanel>
                    <OwlCarousel adClass="owl-simple carousel-with-shadow" carouselOptions={ productSlider }>
                        { topProducts.map( ( item, index ) =>
                            <ProductNine product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
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
    mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal }
)( SpecialCollection );
