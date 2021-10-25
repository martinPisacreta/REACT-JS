import React from 'react';
import { connect } from 'react-redux';

// import custom component
import ProductNine from '../features/product/product-nine';

// import Actions
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';

function NewCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = products.slice( 35, 45 );

    return (
        <div className="row products just-action-icons-sm ">
            {
                products.map( ( item, index ) =>
                    <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ index }>
                        <ProductNine product={ item }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist }
                            showQuickView={ showQuickViewModal } />
                    </div>
                )
            }
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( NewCollection );