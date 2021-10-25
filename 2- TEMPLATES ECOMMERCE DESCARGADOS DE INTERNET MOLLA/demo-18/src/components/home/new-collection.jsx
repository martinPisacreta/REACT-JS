import React from 'react';
import { connect } from 'react-redux';

// import custom component
import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { getNewProducts } from '../../services';

function TrendyCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;
    products = getNewProducts( products.slice( 35, 44 ) );

    return (
        products.map( ( item, index ) =>
            <div className="col-6 col-md-4" key={ index }>
                <ProductNine
                    product={ item }
                    onAddToCart={ addToCart }
                    onToggleWishlist={ toggleWishlist }
                    onAddToCompare={ addToCompare }
                    showQuickView={ showQuickViewModal } />
            </div>
        )
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );