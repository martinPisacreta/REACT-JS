import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import ProductNine from '../features/product/product-nine';

// import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

function FeaturedCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal, addToCompare } = props;

    let products = props.products;
    products = products.slice( 23, 33 );
    let categoryName = [ "All", "Women", "Men" ];
    let categories = [ "All", "Women's", "Men's" ];

    return (
        <Tabs selectedTabClassName="show" defaultIndex={ 0 } className="container">
            <div className="heading heading-center mb-3">
                <h2 className="title-lg mb-2">Top Selling Products</h2>

                <TabList className="nav nav-pills justify-content-center">
                    { categoryName.map( ( cat, index ) =>
                        <Tab className="nav-item" key={ index }>
                            <span className="nav-link">{ categories[ index ] }</span>
                        </Tab>
                    ) }
                </TabList>
            </div>

            <div className="tab-content">
                { categoryName.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <div className="products just-action-icons-sm">
                            <div className="row">
                                {
                                    getProductsByCategory( products, cat ).map( ( item, index ) =>
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                                            <ProductNine product={ item }
                                                adClass="text-center"
                                                key={ index + item.name }
                                                onAddToCart={ addToCart }
                                                onToggleWishlist={ toggleWishlist }
                                                onAddToCompare={ addToCompare }
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

            <div className="more-container text-center mt-5">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-lightgray btn-more btn-round">
                    <span>View more products</span><i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( FeaturedCollection );