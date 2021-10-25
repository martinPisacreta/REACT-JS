import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import custom component
import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist } from '../../actions';

function SpecialCollection( props ) {
    const { addToCart, toggleWishlist } = props;

    let products = [];
    products.push( props.products[ 46 ], props.products[ 37 ] );

    return (
        <div className="pt-6 pb-6" style={ { backgroundColor: "#fff" } }>
            <div className="container">
                <div className="banner-set">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner-set-content text-center">
                                <div className="set-content-wrapper">
                                    <h4>Special</h4>
                                    <h2>Refine Your Style.</h2>

                                    <p>Get on our exclusive email list and be the first to hear about sales, coupons, new arrivals and more! </p>

                                    <div className="banner-set-products">
                                        <div className="row">
                                            <div className="products">
                                                { products.map( ( item, index ) =>
                                                    <div className="col-6" key={ index + item.name } >
                                                        <ProductNine
                                                            product={ item }
                                                            onAddToCart={ addToCart }
                                                            onToggleWishlist={ toggleWishlist }
                                                            type={ 2 }
                                                        />
                                                    </div>
                                                ) }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="banner-set-image banner-border-hover">
                                <Link to="#">
                                    <div className="lazy-overlay bg-3"></div>

                                    <LazyLoadImage
                                        src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-4.jpg` }
                                        alt="banner"
                                        width={ 100 }
                                        height={ 500 }
                                        effect="blur"
                                    />
                                </Link>

                                <div className="banner-content">
                                    <h3 className="banner-title"><Link to="#"><span>Casual basics and<br />trendy key pieces.</span></Link></h3>
                                    <h4 className="banner-subtitle">in this look</h4>

                                    <h4 className="banner-detail">• Rib-knit cardigan <br />• Linen-blend paper bag trousers</h4>
                                    <h4 className="banner-price">$19.99 - $48.00</h4>
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-primary-2 banner-link">buy all</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( SpecialCollection );