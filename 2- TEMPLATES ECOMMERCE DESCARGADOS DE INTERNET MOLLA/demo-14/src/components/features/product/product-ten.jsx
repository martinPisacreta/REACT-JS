import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Countdown from 'react-countdown';

import { rendererOne } from '../count-down';

import { findIndex } from '../../../utils';

function ProductNine( props ) {
    const { product, isWishlist, onAddToCart, onToggleWishlist, showQuickView, onAddToCompare } = props;

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = process.env.PUBLIC_URL + '/shop/wishlist';
        } else {
            onToggleWishlist( product, isWishlist );
        }
    }

    const quickViewHandler = () => {
        showQuickView( product.id );
    }

    const addToCompareHandler = () => {
        onAddToCompare( product );
    }

    return (
        product ?
            <div className="product text-center w-100">
                <figure className="product-media">
                    <span className="product-label label-sale">Deal of the week</span>

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <LazyLoadImage
                            alt="product"
                            visibleByDefault={ true }
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                            threshold={ 100 }
                        />

                        { product.pictures[ 1 ] ?
                            <LazyLoadImage
                                alt="product"
                                visibleByDefault={ true }
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                threshold={ 100 }
                                wrapperClassName="product-image-hover product-image"
                            />
                            : ''
                        }
                    </Link>

                    <div className="product-action-vertical">
                        <button
                            className={ `btn-product-icon btn-wishlist btn-expandable ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>

                        </button>

                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                            <span>Quick view</span>
                        </button>

                        <button className="btn-product-icon btn-compare" title="Compare" onClick={ addToCompareHandler }>
                            <span>Compare</span>
                        </button>
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart" title="add to cart" onClick={ addToCartHandler }>
                            <span>add to cart</span>
                        </button>
                    </div>
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        <span className="mr-0">
                            <Link to="#">{ product.category[ 0 ] }</Link>
                        </span>
                    </div>

                    <h3 className="product-title">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } >{ product.name }</Link>
                    </h3>

                    {
                        0 === product.stock ?
                            <div className="product-price">
                                <span className="out-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                            </div> :

                            0 < product.discount ?
                                <div className="product-price">
                                    <span className="new-price">${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    <span className="old-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }

                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                        </div>
                        <span className="ratings-text">({ product.reviews } Reviews )</span>
                    </div>

                    <div className="product-countdown countdown-compact">
                        <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } />
                    </div>
                </div>
            </div> : ''
    );
}

function mapStateToProps( state, ownprops ) {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( ProductNine );