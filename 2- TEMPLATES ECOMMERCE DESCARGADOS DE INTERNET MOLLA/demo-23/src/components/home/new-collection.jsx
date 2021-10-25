import React from 'react';
import { connect } from 'react-redux';

// import custom component
import ProductNine from '../features/product/product-nine';

// import Services & Actions
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

function NewCollection ( props ) {
    const { type, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;
    products = ( type === "Women" ? products.slice( 35, 40 ) : products.slice( 37, 43 ) );

    return (
        <div className="products col-lg-6 col-md-7 col-12">
            { getProductsByCategory( products, type ).map( ( product, index ) =>
                <div className="col-6" key={ product.name }>
                    <ProductNine
                        product={ product }
                        onAddToCart={ addToCart }
                        onToggleWishlist={ toggleWishlist }
                        onAddToCompare={ addToCompare }
                        showQuickView={ showQuickViewModal }
                    />
                </div>
            ) }
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( NewCollection );