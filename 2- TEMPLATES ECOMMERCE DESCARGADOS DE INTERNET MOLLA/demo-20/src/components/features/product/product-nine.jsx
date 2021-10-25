import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { findIndex } from '../../../utils';

function ProductNine( props ) {
    const { product, isWishlist, onAddToCart, onToggleWishlist } = props;

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

    return (
        product ?
            <div className="product">
                { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                { ( 0 === product.stock ) ? <span className="product-label label-out">Out</span> : '' }

                <figure className="product-media">
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
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        by&nbsp;
                        { product.author ?
                            product.author.map( ( author, index ) => (
                                <span key={ index } className="mr-0">
                                    <Link to="#">{ author }</Link>
                                    { index < product.author.length - 1 ? ' and ' : '' }
                                </span>
                            ) ) : ""
                        }
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

                    <div className="product-footer">
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                            </div>
                            <span className="ratings-text">({ product.reviews } Reviews )</span>
                        </div>

                        <div className="product-action">
                            <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                                <span>add to cart</span>
                            </button>

                            <button
                                className={ `btn-product btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                                onClick={ wishlistHandler }
                                title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                            >
                                <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                            </button>
                        </div>
                    </div>
                </div >
            </div > : ''
    );
}

function mapStateToProps( state, ownprops ) {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( ProductNine );