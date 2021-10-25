import React from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider3, productSlider4 } from '../settings';

import { addToCart, toggleWishlist } from '../../actions';
import { getTopSellingProducts, getFeaturedProducts } from '../../services';

function BestColllection( props ) {
    const { type, addToCart, toggleWishlist } = props;

    let products = props.products.slice( 35, 51 );

    if ( type === "best" )
        products = getTopSellingProducts( products );
    else
        products = getFeaturedProducts( products );

    return (
        <OwlCarousel adClass="carousel-equal-height owl-simple" carouselOptions={ type === "best" ? productSlider3 : productSlider4 }>
            { products.map( ( item, index ) =>
                <ProductNine product={ item }
                    key={ index }
                    onAddToCart={ addToCart }
                    onToggleWishlist={ toggleWishlist } />
            ) }
        </OwlCarousel>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( BestColllection );