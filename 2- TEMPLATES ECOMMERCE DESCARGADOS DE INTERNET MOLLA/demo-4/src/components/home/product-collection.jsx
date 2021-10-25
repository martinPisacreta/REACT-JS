import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { getTopSellingProducts } from '../../services';

function ProductCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;
    products = getTopSellingProducts( products.slice( 35, 50 ) );

    return (
        <div className="container for-you">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Recommendation For You</h2>
                </div>

                <div className="heading-right">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="title-link">
                        View All Recommendadion <i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>

            <div className="products">
                <div className="row justify-content-center">
                    { products.map( ( item, index ) =>
                        <div className="col-6 col-md-4 col-lg-3" key={ index } >
                            <ProductNine product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal } />
                        </div>
                    ) }
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
)( ProductCollection );
