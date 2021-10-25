import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { trendingSlider } from '../settings';

import data from '../../mock_data/data.json';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { getProductsByCategory, getTopSellingProducts } from '../../services';

function TopCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;
    let products = props.products;
    products = getTopSellingProducts( products.slice( 35, 50 ) );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Top Selling Products</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        { data.home_categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ `Tab1-${index}` }>
                                <span className="nav-link">{ cat.name }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
            </div>

            { data.home_categories.map( ( cat, index ) =>
                <TabPanel key={ `tabpanel1-${index}` }>
                    <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ trendingSlider }>
                        { getProductsByCategory( products, cat.name ).map( ( item, index ) =>
                            <ProductNine
                                product={ item }
                                key={ "top" + index }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal }
                                type={ 3 }
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>
            ) }
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TopCollection );