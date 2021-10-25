import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ProductNine from '../features/product/product-nine';
import OwlCarousels from '../features/owl-carousel';

import { getProductsByCategory, getTopSellingProducts } from '../../services';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import data from '../../mock_data/data';

import { productSlider } from '../settings';

function HotCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;
    products = getTopSellingProducts( products.slice( 35, 55 ) );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                    <h2 className="title">Hot Deals Products</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        { data.productCategories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ `deal_tab_${index}` }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
            </div>

            { data.productCategories.map( ( cat, index ) =>
                <TabPanel key={ `deal_${index}` }>
                    <OwlCarousels adClass="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                        { getProductsByCategory( products, cat === "Clothes" ? "Clothing" : cat ).map( ( item, index ) =>
                            <ProductNine
                                product={ item }
                                key={ index + item.name }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal } />
                        ) }
                    </OwlCarousels>
                </TabPanel>
            ) }
        </Tabs>
    )
}

export const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( HotCollection );