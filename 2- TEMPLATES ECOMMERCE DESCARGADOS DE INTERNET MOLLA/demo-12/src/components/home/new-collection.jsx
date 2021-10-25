import React from 'react';
import { connect } from 'react-redux';

import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

function NewCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;

    return (
        <OwlCarousel adClass="owl-simple" carouselOptions={ productSlider }>
            { products.slice( 35, 41 ).map( ( product, index ) =>
                <ProductNine
                    product={ product }
                    key={ index }
                    onAddToCart={ addToCart }
                    onToggleWishlist={ toggleWishlist }
                    onAddToCompare={ addToCompare }
                    showQuickView={ showQuickViewModal } />
            ) }
        </OwlCarousel>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)( NewCollection );
