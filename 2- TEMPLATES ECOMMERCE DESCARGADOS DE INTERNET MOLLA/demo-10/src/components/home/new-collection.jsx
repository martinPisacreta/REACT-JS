import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';

// import Slider Settings
import { productSlider } from "../settings";

function TrendyCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let categories = [ "All", "Women's", "Men's" ];
    let categoryName = [ "All", "Women", "Men" ];
    let products = props.products;
    products = products.slice( 35, 41 );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" className="container">
            <div className="heading heading-center mb-3">
                <h2 className="title-lg">New Arrivals</h2>

                <TabList className="nav nav-pills justify-content-center">
                    { categoryName.map( ( cat, index ) =>
                        <Tab key={ index } className="nav-item">
                            <span className="nav-link">{ categories[ index ] }</span>
                        </Tab>
                    ) }
                </TabList>
            </div>

            <div className="tab-content tab-content-carousel tab-pane-shadow">
                { categoryName.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <OwlCarousel adClass="owl-simple carousel-equal-height"
                            carouselOptions={ productSlider }>
                            {
                                getProductsByCategory( products, cat ).map( ( item, index ) =>
                                    <ProductNine product={ item }
                                        adClass="text-center"
                                        key={ index }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        showQuickView={ showQuickViewModal }
                                    />
                                )
                            }
                        </OwlCarousel>
                    </TabPanel>
                ) }
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