import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';

// import custom component
import ProductNine from '../features/product/product-nine';

// import Component
import DealProduct from './deal-product';

// import Service & Options
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';
import { getTopSellingProducts, getSaleProducts, getFeaturedProducts } from '../../services';

function SpecialCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    let dealProduct = products[ 42 ];
    products = getFeaturedProducts( products.slice( 38, 50 ) );

    return (
        <div className="featured-back" style={ { backgroundImage: "url(assets/images/home/banners/background-1.jpg)" } }>
            <Tabs className="container" selectedTabClassName="show">
                <div className="section-title">
                    <TabList className="nav nav-pills nav-border-anim" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link"><span>Featured</span></span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link"><span>Bestsellers</span></span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link"><span>Sale</span></span>
                        </Tab>
                    </TabList>


                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="link">All Featured Products</Link>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <DealProduct product={ dealProduct } />
                    </div>

                    <div className="col-lg-8 col-md-8">
                        <div className="tab-content">
                            <TabPanel id="tab-featured">
                                <div className="row products all">
                                    {
                                        products.map( ( item, index ) =>
                                            <div className="col-lg-4 col-6" key={ index }>
                                                <ProductNine product={ item }
                                                    onAddToCart={ addToCart }
                                                    onToggleWishlist={ toggleWishlist }
                                                    showQuickView={ showQuickViewModal } />
                                            </div>
                                        )
                                    }
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row products">
                                    {
                                        getTopSellingProducts( products ).map( ( item, index ) =>
                                            <div className="col-lg-4 col-6" key={ index }>
                                                <ProductNine product={ item }
                                                    onAddToCart={ addToCart }
                                                    onToggleWishlist={ toggleWishlist }
                                                    showQuickView={ showQuickViewModal } />
                                            </div>
                                        )
                                    }
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="row products">
                                    {
                                        getSaleProducts( products ).map( ( item, index ) =>
                                            <div className="col-lg-4 col-6" key={ index }>
                                                <ProductNine product={ item }
                                                    onAddToCart={ addToCart }
                                                    onToggleWishlist={ toggleWishlist }
                                                    showQuickView={ showQuickViewModal } />
                                            </div>
                                        )
                                    }
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>

                <div className="mb-2"></div>
            </Tabs>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( SpecialCollection );