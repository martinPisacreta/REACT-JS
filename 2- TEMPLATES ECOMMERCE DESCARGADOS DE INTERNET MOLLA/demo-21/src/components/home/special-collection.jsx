import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// import utils
import { isIEBrowser } from '../../utils';

// import Actions
import { addToCart, toggleWishlist } from '../../actions';

// import Slider Settings
import { productSlider1 } from '../settings';

function SpecialCollection ( props ) {

    let products = props.products;
    products = products.slice( 35, 38 );

    const { addToCart, toggleWishlist } = props;

    useEffect( () => {
        if ( isIEBrowser() ) {
            document.querySelector( '.banner-intro' ).style.paddingTop = '25rem';
        }
    } )

    return (
        <div className="choose-style">
            <div className="container row">
                <div className="banner-intro col-lg-5">
                    <h3 className="title">Get Your<br />Inspiration<br />In The Street.</h3>

                    <p className="darkWhite">IN THIS LOOK</p>
                    <h4 className="content darkWhite">• Stowell Hood Fleece</h4>
                    <h4 className="content darkWhite">• Force Tight </h4>
                    <h4 className="content darkWhite">• Blitzing 3.0 Cap</h4>
                    <p className="price darkWhite">$55.00 - $1,298.00</p>

                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-demoprimary">
                        <span>BUY ALL </span>
                        <i className="icon-long-arrow-right"></i>
                    </Link>
                </div>

                <div className="carousel col-lg-7">
                    <div className="heading">
                        <h2 className="title">Choose Your Style</h2>
                        <p className="content">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis</p>
                    </div>

                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider1 } >
                        { products.map( ( product, index ) =>
                            <ProductNine
                                product={ product }
                                onAddToCartClick={ addToCart }
                                onToggleWishlistClick={ toggleWishlist }
                                type={ 2 }
                                key={ index }
                            />
                        ) }
                    </OwlCarousel>
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

export default connect( ( mapStateToProps ), { addToCart, toggleWishlist } )( SpecialCollection );