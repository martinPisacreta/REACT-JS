import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import ProductNine from '../features/product/product-nine';

// Import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

// Import Data
import _data from '../../mock_data/data';

function NewCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = products.slice( 12, 20 );

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 } className="container recent-arrivals">
            <div className="heading heading-flex align-items-center mb-3">
                <h2 className="title title-lg">Recent Arrivals</h2>

                <TabList className="nav nav-pills nav-border-anim justify-content-center">
                    { _data.category.map( ( cat, index ) =>
                        <Tab className="nav-item" key={ index }>
                            <span className="nav-link">{ cat }</span>
                        </Tab>
                    ) }
                </TabList>
            </div>

            <div className="tab-content">
                {
                    _data.category.map( ( cat, index ) =>
                        <TabPanel key={ index }>
                            <div className="products">
                                <div className="row justify-content-center">
                                    {
                                        getProductsByCategory( products, cat ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4 col-lg-3" key={ index + item.name }>
                                                <ProductNine product={ item }
                                                    adClass="text-center product-7"
                                                    key={ index }
                                                    onAddToCart={ addToCart }
                                                    onToggleWishlist={ toggleWishlist }
                                                    showQuickView={ showQuickViewModal }
                                                />
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </TabPanel>
                    ) }
            </div>

            <div className="more-container text-center mt-3 mb-3">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-dark-3 btn-more"><span>View More</span><i className="icon-long-arrow-right"></i></Link>
            </div>
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( NewCollection );