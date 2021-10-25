import React from 'react';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';
import Banner from './banner';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

import data from '../../mock_data/data';

function ClothCollection( props ) {
    const { type, addToCart, toggleWishlist, addToCompare, showQuickViewModal, from = 0, to = 0, single = 0 } = props;

    let products = props.products;
    let productArr = products.slice( from, to ), singleProduct = products[ single ], bannerId;

    if ( type === "Dress" )
        bannerId = 0;
    else
        bannerId = 1;

    return (
        <div className="row">
            <div className="col-lg-6">
                <Banner banner={ data.banner[ bannerId ] } />
            </div>

            <div className={ `col-sm-4 col-lg-3 ${!bannerId ? 'order-lg-first' : ''}` }>
                <div className="display-products-col">
                    <ProductNine product={ singleProduct }
                        adClass={ type === "dress" ? "mb-7" : "" }
                        type={ 2 }
                        onAddToCart={ addToCart }
                        onToggleWishlist={ toggleWishlist }
                        onAddToCompare={ addToCompare }
                        showQuickView={ showQuickViewModal } />
                </div>
            </div>

            <div className={ `col-sm-8 col-lg-3 ${bannerId ? 'order-lg-first' : ''}` }>
                <div className="display-products-col">
                    <div className="row">
                        { productArr.map( ( item, index ) =>
                            <div className="col-6 col-lg-12" key={ index } >
                                <ProductNine product={ item }
                                    adClass={ type === "dress" ? "mb-7" : "" }
                                    type={ 2 }
                                    onAddToCart={ addToCart }
                                    onToggleWishlist={ toggleWishlist }
                                    onAddToCompare={ addToCompare }
                                    showQuickView={ showQuickViewModal } />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)( ClothCollection );
