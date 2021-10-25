import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import ProductNine from '../features/product/product-nine';

import { getTopSellingProducts, getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

function TopCollection( props ) {
    const { addToCart, toggleWishlist } = props;
    let categories = [ "All", "Furniture", "Decoration", "Lighting" ];
    let products = props.products;
    products = products.slice( 20, 35 );

    let topProducts = getTopSellingProducts( products );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show">
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title">Top Selling Products</h2>
                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        { categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ index }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                { categories.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <div className="products">
                            <div className="row">
                                { getProductsByCategory( topProducts, cat ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                        <ProductNine type={ 2 }
                                            product={ item }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist } />
                                    </div>
                                ) }
                            </div>
                        </div>
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

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( TopCollection );
