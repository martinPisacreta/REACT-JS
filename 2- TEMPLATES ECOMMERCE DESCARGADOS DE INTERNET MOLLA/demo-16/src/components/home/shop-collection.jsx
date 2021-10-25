import React from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../actions';

import { shopSlider } from '../settings';

function ShopCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;

    return (
        <OwlCarousel adClass="owl-simple" carouselOptions={ shopSlider }>
            { products.slice( 40, 45 ).map( ( item, index ) =>
                <ProductNine product={ item }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare } )( ShopCollection );