import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Countdown from 'react-countdown';

import { rendererTwo } from '../count-down';

import { findIndex, hoverIntent } from '../../../utils';

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

    function quickViewHandler () {
        showQuickView( product.id );
    }

    useEffect( () => {
        hoverIntent();
    } )

    return (
        product ?
            <div className={ `product product-3 text-center` }>
                <figure className="product-media">
                    { product.top ? <span className="product-label label-primary">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">{ product.discount }% off</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-primary">Out Of Stock</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <LazyLoadImage
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                            threshold={ 400 }
                            height={ 0 }
                        />

                        { product.pictures[ 1 ] ?
                            <LazyLoadImage
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                threshold={ 400 }
                                wrapperClassName="product-image-hover"
                                height={ 0 }

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
                        <button className={ `btn-product-icon btn-wishlist btn-expandable ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` } title={ isWishlist ? "Go to wishlist" : "Add to wishlist" } onClick={ wishlistHandler }>
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>
                    </div>
                </figure>

                <div className="product-body">
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
                                    <span className="new-price">Now ${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    <span className="old-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }
                </div>

                <div className="product-footer">
                    {
                        product.ratings >= 0 ?
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

                    <div className="product-action">
                        <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                            <span>add to cart</span>
                        </button>

                        <button className="btn-product btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                            <span>quick view</span>
                        </button>
                    </div>
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