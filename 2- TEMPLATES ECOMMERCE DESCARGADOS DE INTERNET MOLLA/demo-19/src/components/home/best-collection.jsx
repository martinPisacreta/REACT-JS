import React from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../actions';

function BestCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;

    return (
        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow best-collection" carouselOptions={ productSlider } >
            { products.slice( 51, 56 ).map( ( product, index ) =>
                <ProductNine
                    key={ `consoles_${index}` }
                    product={ product }
                    isCategory={ false }
                    onToggleWishlist={ toggleWishlist }
                    showQuickView={ showQuickViewModal }
                    onAddToCart={ addToCart }
                />
            ) }
        </OwlCarousel>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare } )( BestCollection );