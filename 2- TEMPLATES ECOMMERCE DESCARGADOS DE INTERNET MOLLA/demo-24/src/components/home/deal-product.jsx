import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import { rendererOne } from '../features/count-down';

// import Utils
import { safeContent, findIndex } from '../../utils';

function DealProduct ( props ) {
    const { isWishlist, product, type = 'label', colorType = "color", adClass = "text-center", onToggleWishlist, onAddToCart, showQuickView } = props;

    const quickViewHandler = () => {
        showQuickView( product.id );
    }

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
            <div className={ `product product-10 product-lg ${adClass}` }>
                <figure className="product-media">
                    <span className="product-label label-deal">deal of the day</span>

                    { product.new ? <span className="product-label label-new">New</span> : '' }

                    { product.top ? <span className="product-label label-top">Top</span> : '' }

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
                                threshold={ 400 }
                                wrapperClassName="product-image-hover"
                            />
                            : ''
                        }
                    </Link>

                    <div className="product-action-vertical">
                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                            { 'label' === type ? <span>quick view</span> : '' }
                        </button>
                    </div>
                </figure>

                { product.until ?
                    <div className="deal">
                        <div className="deal-countdown offer-countdown">
                            <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } />
                        </div>
                    </div> : ''
                }

                <div className="product-body">
                    <div className="product-intro">
                        <h3 className="product-title">
                            <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` } dangerouslySetInnerHTML={ safeContent( product.name ) }></Link>
                        </h3>

                        { 0 === product.stock ?
                            <div className="product-price">
                                <span className="out-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                                <span className="out-text">Out of Stock</span>
                            </div> :
                            0 < product.discount ?
                                <div className="product-price">
                                    <span className="new-price">${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                                    <span className="old-price">Was ${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :
                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                        }
                    </div>

                    <div className="product-detail">
                        <div className="ratings-container">
                            <div className="ratings">
                                <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                            </div>

                            <span className="ratings-text">( { product.reviews } Reviews )</span>
                        </div>

                        { product.variants ?
                            ( "model" === colorType && product.variants[ 0 ].model ) || product.variants[ 0 ].image ?
                                <div className="product-nav product-nav-thumbs">
                                    { product.variants.map( ( vari, i ) => {
                                        return (
                                            <Link to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                                <img src={ vari.model ? process.env.PUBLIC_URL + '/' + vari.model : process.env.PUBLIC_URL + '/' + vari.image } alt="product desc" />
                                            </Link> )
                                    } ) }
                                </div> :

                                <div className="product-nav product-nav-dots">
                                    { product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' } style={ { background: vari.color } }>
                                        </Link>
                                    ) }
                                </div>
                            : '' }
                    </div>

                    <div className="product-action">
                        <button className="btn-cart" onClick={ addToCartHandler }>
                            { 'label' === type ? <span>Add to Cart</span> : '' }
                        </button>

                        <button className={ `btn-product-icon btn-wishlist ${isWishlist ? 'added-to-wishlist' : ''}` } onClick={ wishlistHandler } title={ isWishlist ? "Remove from wishlist" : "Add to wishlist" }>
                            <span>{ isWishlist ? "Remove from Wishlist" : "Add to Wishlist" }</span>
                        </button>
                    </div>
                </div>
            </div> : ''
    )
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( DealProduct );