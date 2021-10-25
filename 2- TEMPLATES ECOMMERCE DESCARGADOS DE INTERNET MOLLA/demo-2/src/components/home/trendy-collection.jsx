import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../features/owl-carousel';

import Product from '../features/product/product-nine';
import { productSlider } from '../settings';

import { getProductsByCategory, getFeaturedProducts } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

import data from '../../mock_data/data.json';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist } = props;

    let products = props.products;
    products = getFeaturedProducts( products );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" onSelect={ index => { } }>
            <div className="container trendy-collection">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg">Trendy Products</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        { data.categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ index }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                { data.categories.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <OwlCarousel adClass="owl-simple carousel-with-shadow" carouselOptions={ productSlider }>
                            { getProductsByCategory( products, cat ).map( ( item, index ) =>
                                <Product product={ item }
                                    onAddToCart={ addToCart }
                                    onToggleWishlist={ toggleWishlist }
                                    key={ `${cat}_${index}` }
                                />
                            ) }
                        </OwlCarousel>
                    </TabPanel>
                ) }
            </div>
        </Tabs>
    )
}

function mapStateToProps( state ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( TrendyCollection );
