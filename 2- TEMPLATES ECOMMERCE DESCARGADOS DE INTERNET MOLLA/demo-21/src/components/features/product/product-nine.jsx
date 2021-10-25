import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { findIndex, safeContent } from '../../../utils';

function ProductNine ( props ) {
    const { product, isWishlist, onAddToCart, onToggleWishlist, type = 1 } = props;

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

    return (
        product ?
            <div className={ `product demo21 ${0 === product.stock ? 'product-disabled' : ''}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { product.stock === 0 ? <span className="product-label label-out">Out Of Stock</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <LazyLoadImage
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                            threshold={ 100 }
                        />

                        { product.pictures[ 1 ] ?
                            <LazyLoadImage
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                threshold={ 100 }
                                wrapperClassName="product-image-hover product-image"
                            />
                            : ''
                        }
                    </Link>
                </figure>

                <div className="product-body text-center">
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
                        <span className="ratings-text">( { product.reviews } Reviews )</span>
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                            <span>add to cart</span>
                        </button>

                        {
                            type === 1 ?
                                <button className={ `btn-addtolist ${isWishlist ? 'wishlisted' : ''}` } onClick={ wishlistHandler }>
                                    <span dangerouslySetInnerHTML={ safeContent( isWishlist ? "&nbsp;go to wishlist" : "&nbsp;add to wishlist" ) }></span>
                                </button>
                                : ""
                        }
                    </div>

                    {
                        type === 2 ?
                            <button className={ `btn-addtolist ${isWishlist ? 'wishlisted' : ''}` } onClick={ wishlistHandler }>
                                <span dangerouslySetInnerHTML={ safeContent( isWishlist ? "&nbsp;go to wishlist" : "&nbsp;add to wishlist" ) }></span>
                            </button>
                            : ""
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