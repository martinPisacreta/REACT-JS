import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { findIndex } from '../../../utils';

function ProductNine( props ) {
    const { product, isWishlist, onAddToCart, onToggleWishlist, showQuickView } = props;

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

    return (
        product ?
            <div className="product product-4">
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out">Out</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <LazyLoadImage
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                            threshold={ 300 }
                        />

                        { product.pictures[ 1 ] ?
                            <LazyLoadImage
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                threshold={ 300 }
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
                    </div>

                    <div className="product-action product-action-transparent">
                        <button className="btn-product btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                            <span>Quick view</span>
                        </button>
                    </div>
                </figure>

                <div className="product-body">

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
                                    <span className="old-price">Was ${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }

                    {
                        product.variants ?
                            product.variants[ 0 ].model ?
                                <div className="product-nav product-nav-thumbs">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ `vari_${i}` } className={ 0 === i ? 'active' : '' }>
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                        </Link>
                                    ) }
                                </div>
                                :
                                <div className="product-nav product-nav-dots">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ `vari_${i}` } className={ 0 === i ? 'active' : '' } style={ { background: vari.color } }>
                                        </Link>
                                    ) }
                                </div>
                            : ''
                    }

                    <div className="product-action">
                        <button className="btn-product btn-cart" title="add to cart" onClick={ addToCartHandler }>
                            <span>add to cart</span><i className="icon-long-arrow-right"></i>
                        </button>
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