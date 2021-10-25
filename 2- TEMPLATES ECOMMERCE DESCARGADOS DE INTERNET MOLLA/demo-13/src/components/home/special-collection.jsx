import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

import ProductNine from '../features/product/product-nine';
import OwlCarousels from '../features/owl-carousel';

import { getFeaturedProducts, getTopSellingProducts, getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

import { productSlider } from '../settings';

function SpecialCollection( props ) {
    let { category, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products.slice( 35, 55 );
    products = getProductsByCategory( products, category );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <div className="heading heading-flex heading-border mb-3">
                <div className="heading-left">
                    <h2 className="title">{ category }</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">New</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Featured</span>
                        </Tab>
                        <Tab className="nav-item">
                            <span className="nav-link">Best Seller</span>
                        </Tab>
                    </TabList>
                </div>
            </div>

            <TabPanel className="tab-pane p-0 react-tabs__tab-panel">
                <OwlCarousels adClass="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                    { products.map( ( item, index ) =>
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

            <TabPanel className="tab-pane p-0 react-tabs__tab-panel">
                <OwlCarousels adClass="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                    { getFeaturedProducts( products ).map( ( item, index ) =>
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

            <TabPanel className="tab-pane p-0 react-tabs__tab-panel">
                <OwlCarousels adClass="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                    { getTopSellingProducts( products ).map( ( item, index ) =>
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
        </Tabs>
    )
}

export const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( SpecialCollection );