import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Countdown from 'react-countdown';

import { rendererOne } from '../count-down';

import { findIndex } from '../../../utils';

function ProductNine ( props ) {
    const { product, onAddToCart, isWishlist, showQuickView, onToggleWishlist } = props;

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
    }

    const quickViewHandler = () => {
        showQuickView( product.id );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = '/shop/wishlist';
        } else {
            onToggleWishlist( product, isWishlist );
        }
    }

    return (
        product ?
            <div className={ `product product-2 text-center ${0 === product.stock ? 'product-disabled' : ''}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out">Out of Stock</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <LazyLoadImage
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                            threshold={ 400 }
                        />

                        { product.pictures[ 1 ] ?
                            <LazyLoadImage
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                wrapperClassName="product-image-hover"
                                threshold={ 400 }
                            />
                            : ''
                        }
                    </Link>

                    {
                        0 < product.discount ?
                            <div className="product-countdown countdown-compact">
                                <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } />
                            </div> : ''
                    }

                    <div className="product-action-vertical">
                        <button
                            className={ `btn-product-icon btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>

                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickViewHandler }>
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

                    <div className="product-cat">
                        { product.category.map( ( cat, index ) => (
                            <span key={ index } className="mr-0">
                                <Link to="#">{ cat }</Link>
                                { index < product.category.length - 1 ? ', ' : '' }
                            </span>
                        ) ) }
                    </div>

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
                                    <span className="new-price">${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    <span className="old-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
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