import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist } from '../../actions';
import { getProductsByCategory, getFeaturedProducts } from '../../services';

import { trendingSlider } from '../settings';
import data from '../../mock_data/data.json';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist } = props;
    let products = props.products;
    products = getFeaturedProducts( products.slice( 35, 49 ) );

    return (
        <div className="container">
            <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Trendy Products</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        { data.trendyCategories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ `trendy_tab_${index}` }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    { data.trendyCategories.map( ( cat, index1 ) =>
                        <TabPanel key={ `trend_tabpanel_${index1}` }>
                            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider } >
                                { getProductsByCategory( products, cat ).map( ( item, index ) =>
                                    <ProductNine
                                        product={ item }
                                        key={ index + item.name }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                    />
                                ) }
                            </OwlCarousel>
                        </TabPanel>
                    ) }
                </div>
            </Tabs>
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( TrendyCollection );