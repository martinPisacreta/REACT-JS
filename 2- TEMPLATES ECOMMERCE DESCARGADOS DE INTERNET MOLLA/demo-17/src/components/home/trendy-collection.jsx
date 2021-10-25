import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { getNewProducts, getFeaturedProducts, getTopSellingProducts } from '../../services';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = getNewProducts( props.products.slice( 35, 43 ) );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
            <h2 className="title text-center">Currently Popular Items</h2>

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

            <div className="tab-content mt-2">
                <TabPanel>
                    <div className="row justify-content-center">
                        { getNewProducts( products ).map( ( product, index ) =>
                            <div className="col-6 col-md-4 col-lg-3" key={ `New_${index}` }>
                                <ProductNine
                                    product={ product }
                                    onAddToCompare={ addToCompare }
                                    onToggleWishlist={ toggleWishlist }
                                    showQuickView={ showQuickViewModal }
                                    onAddToCart={ addToCart }
                                />
                            </div>
                        ) }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="row justify-content-center">
                        { getFeaturedProducts( products ).map( ( product, index ) =>
                            <div className="col-6 col-md-4 col-lg-3" key={ `featured_${index}` }>
                                <ProductNine
                                    product={ product }
                                    onAddToCompare={ addToCompare }
                                    onToggleWishlist={ toggleWishlist }
                                    showQuickView={ showQuickViewModal }
                                    onAddToCart={ addToCart }
                                />
                            </div>
                        ) }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="row justify-content-center">
                        { getTopSellingProducts( products ).map( ( product, index ) =>
                            <div className="col-6 col-md-4 col-lg-3" key={ `topselling_${index}` }>
                                <ProductNine
                                    product={ product }
                                    onAddToCompare={ addToCompare }
                                    onToggleWishlist={ toggleWishlist }
                                    showQuickView={ showQuickViewModal }
                                    onAddToCart={ addToCart }
                                />
                            </div>
                        ) }
                    </div>
                </TabPanel>
            </div>
        </Tabs>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );