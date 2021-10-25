import React from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import ProductTen from '../features/product/product-ten';

import { addToCart, toggleWishlist } from '../../actions';
import { productSlider1, productSlider2 } from '../settings';
import { getNewProducts } from '../../services';

function NewCollection( props ) {
    const { addToCart, toggleWishlist } = props;

    let products = props.products;
    let big_products = products.slice( 49, 51 );
    products = getNewProducts( products.slice( 35, 51 ) );

    return (
        <>
            <div className="col-xl-4">
                <OwlCarousel adClass="carousel-equal-height owl-simple" carouselOptions={ productSlider2 }>
                    { big_products.map( ( item, index ) =>
                        <ProductTen product={ item }
                            key={ index }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist } />
                    ) }
                </OwlCarousel>

                <div className="mb-3 d-xl-none"></div>
            </div>
            <div className="col-xl-8">
                <div className="block-wrapper ">
                    <OwlCarousel adClass="carousel-equal-height owl-simple" carouselOptions={ productSlider1 }>
                        { products.map( ( item, index ) =>
                            <ProductNine product={ item }
                                key={ index }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist } />
                        ) }
                    </OwlCarousel>
                </div>
            </div>
        </>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( NewCollection );