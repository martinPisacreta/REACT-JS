import React from 'react';
import { connect } from 'react-redux';

// import Custom Components
import ProductNine from '../features/product/product-nine';

// import Component
import DealProduct from './deal-product';

// import Services & Actions
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';
import { getFeaturedProducts } from '../../services';

function SpecialCollection ( props ) {

    let products = props.products;
    let deal_product = products[ 35 ];
    products = products.slice( 36, 40 );

    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    return (
        <section className="featured-products">
            <div className="container">
                <div className="heading">
                    <p className="heading-cat">Featured Products </p>

                    <h3 className="heading-title">Featured Products</h3>
                </div>

                <div className="row">
                    <div className="col-lg-7 col-md-7 products featured-collection">
                        {
                            getFeaturedProducts( products ).map( ( item, index ) =>
                                <div className="col-6" key={ index }>
                                    <ProductNine product={ item }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        showQuickView={ showQuickViewModal } />
                                </div>
                            )
                        }
                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-8 col-12">
                        <DealProduct product={ deal_product }
                            onAddToCart={ addToCart }
                            onToggleWishlist={ toggleWishlist }
                            showQuickView={ showQuickViewModal } />
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( ( mapStateToProps ), { addToCart, toggleWishlist, showQuickViewModal } )( SpecialCollection );