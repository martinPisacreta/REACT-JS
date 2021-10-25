import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Countdown from 'react-countdown';

// import custom component
import ProductNine from '../features/product/product-nine';
import { rendererThree } from '../features/count-down';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

function DealCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal, addToCompare } = props;
    let products = props.products;

    return (
        <div className="bg-light deal-container pt-7 pb-7 mb-5">
            <div className="container">
                <div className="heading text-center mb-4">
                    <h2 className="title">Deals & Outlet</h2>
                    <p className="title-desc">Today’s deal and more</p>
                </div>

                <div className="row">
                    <div className="col-lg-6 deal-col">
                        <div className="deal" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/deal/bg-1.jpg)` } }>
                            <div className="deal-top">
                                <h2>Deal of the Day.</h2>
                                <h4>Limited quantities. </h4>
                            </div>

                            <div className="deal-content">
                                <h3 className="product-title"><Link to={ `${process.env.PUBLIC_URL}/product/default/27` }>Home Smart Speaker with  Google Assistant</Link></h3>

                                <div className="product-price">
                                    <span className="new-price">$129.00</span>
                                    <span className="old-price">Was $150.99</span>
                                </div>

                                <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } className="btn btn-link"><span>Shop Now</span><i className="icon-long-arrow-right"></i></Link>
                            </div>

                            <div className="deal-bottom">
                                <div className="deal-countdown">
                                    <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererThree } />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="products">
                            <div className="row">
                                { products.slice( 35, 37 ).map( ( item, index ) =>
                                    <div className="col-6" key={ `product_${index}` } >
                                        <ProductNine
                                            product={ item }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                            onAddToCompare={ addToCompare }
                                            showQuickView={ showQuickViewModal }
                                        />
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="more-container text-center mt-3 mb-0">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-dark-2 btn-round btn-more"><span>Shop more Outlet deals</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, addToCompare, showQuickViewModal, toggleWishlist } )( DealCollection );