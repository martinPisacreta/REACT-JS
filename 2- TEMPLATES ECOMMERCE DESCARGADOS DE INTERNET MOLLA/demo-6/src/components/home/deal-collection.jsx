import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

//import Custom Component
import { rendererThree } from '../features/count-down';

function DealCollection ( props ) {

    let products = props.products;
    products = products.slice( 35, 37 );

    return (
        <div className="deal bg-image pt-8 pb-8" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/banners/bg-1.jpg)` } }>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="deal-content text-center">
                            <h4>Limited quantities. </h4>

                            <h2>Deal of the Day</h2>

                            <div className="deal-countdown">
                                <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererThree } />
                            </div>
                        </div>
                        <div className="row deal-products">
                            <div className="deal-product col-6 text-center">
                                <figure className="product-media">
                                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${products[ 1 ].id}` }>
                                        <img src={ process.env.PUBLIC_URL + '/' + products[ 1 ].pictures[ 0 ] } alt="Product" className="product-image" />
                                    </Link>
                                </figure>

                                <div className="product-body pt-2">
                                    <div className="product-price">
                                        <span className="new-price">Now ${ products[ 1 ].salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                                        <span className="old-price">Was ${ products[ 1 ].price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    </div>
                                </div>

                                <Link to={ `${process.env.PUBLIC_URL}/product/default/${products[ 1 ].id}` } className="action">shop now</Link>
                            </div>

                            <div className="deal-product col-6 text-center">
                                <figure className="product-media">
                                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${products[ 0 ].id}` }>
                                        <img src={ process.env.PUBLIC_URL + '/' + products[ 0 ].pictures[ 0 ] } alt="Product" className="product-image" />
                                    </Link>
                                </figure>

                                <div className="product-body pt-2">
                                    <div className="product-price">
                                        <span className="new-price">Now ${ products[ 0 ].salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                                        <span className="old-price">Was ${ products[ 0 ].price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    </div>
                                </div>

                                <Link to={ `${process.env.PUBLIC_URL}/product/default/${products[ 0 ].id}` } className="action">shop now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( DealCollection );