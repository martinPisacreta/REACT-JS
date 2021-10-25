import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { rendererTwo } from '../count-down';

import { findIndex } from '../../../utils';

function ProductNine ( props ) {
    const { product, isWishlist, onAddToCart, onToggleWishlist, showQuickView } = props;

    function addToCartHandler () {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
    }

    function wishlistHandler () {
        if ( isWishlist ) {
            window.location = '/shop/wishlist';
        } else {
            onToggleWishlist( product, isWishlist );
        }
    }

    function quickviewHandler () {
        showQuickView( product.id );
    }

    return (
        product ?
            <div className={ `product product-7 text-center ${0 === product.stock ? 'product-disabled' : ''}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out">Out Of Stock</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <img
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                        />

                        { product.pictures[ 1 ] ?
                            <img
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                className="product-image-hover"
                            />
                            : ''
                        }
                    </Link>

                    {
                        product.until ?
                            <div className="product-countdown-container">
                                <span className="product-contdown-title">offer ends in:</span>
                                <div className="product-countdown countdown-compact">
                                    <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererTwo } />
                                </div>
                            </div> : ''
                    }

                    <div className="product-action-vertical">
                        <button className={ `btn-product-icon btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` } title={ isWishlist ? "Go to wishlist" : "Add to wishlist" } onClick={ wishlistHandler }>
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>

                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickviewHandler }>
                            <span>Quick view</span>
                        </button>
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                            <span>add to cart</span>
                        </button>
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    <h3 className="product-title">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/7` } >{ product.name }</Link>
                    </h3>

                    {
                        0 === product.stock ?
                            <div className="product-price">
                                <span className="out-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                            </div> :

                            0 < product.discount ?
                                <div className="product-price">
                                    <span className="new-price">Now ${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    <span className="old-price">Was ${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }

                    {
                        product.ratings ?
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                                </div>
                                <span className="ratings-text">({ product.reviews } Reviews )</span>
                            </div> : ''
                    }

                    {
                        product.variants ?
                            product.variants[ 0 ].model ?
                                <div className="product-nav product-nav-thumbs">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                        </Link>
                                    ) }
                                </div>
                                :
                                <div className="product-nav product-nav-dots">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' } style={ { background: vari.color } }>
                                        </Link>
                                    ) }
                                </div>
                            : ''
                    }
                </div>
            </div>
            : ''
    );
}

function mapStateToProps ( state, ownprops ) {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( ProductNine );