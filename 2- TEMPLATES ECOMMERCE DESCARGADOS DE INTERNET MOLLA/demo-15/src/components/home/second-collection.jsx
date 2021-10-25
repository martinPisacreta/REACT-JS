import React from 'react';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';
import Banner from './banner';

// import Action
import { addToCart, toggleWishlist, showQuickViewModal, addToCompare } from '../../actions';

import data from '../../mock_data/data';

function SecondCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal, addToCompare } = props;

    let products = props.products;

    return (
        <div className="display-row" style={ { backgroundColor: "#f2f2f2" } }>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Banner banner={ data.categoryBanners[ 1 ] } />
                    </div>

                    <div className="col-lg-6">
                        <div className="heading text-center">
                            <h2 className="title">About This Look</h2>
                            <p className="title-desc">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.</p>
                        </div>

                        <div className="row">
                            { products.slice( 37, 40 ).map( ( item, index ) =>
                                <div className="col-6 col-md-4" key={ `2_${index}` }>
                                    <ProductNine
                                        product={ item }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        onAddToCompare={ addToCompare }
                                        showQuickView={ showQuickViewModal }
                                    />
                                </div>
                            ) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps( state ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal, addToCompare } )( SecondCollection );