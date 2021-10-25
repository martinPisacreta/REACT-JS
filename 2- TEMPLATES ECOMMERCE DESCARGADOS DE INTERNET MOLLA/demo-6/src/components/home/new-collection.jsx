import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

// Import Custom Component
import ProductNine from '../features/product/product-nine';

//Import Service & Actions
import { getFeaturedProducts } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

function NewCollection ( props ) {
    const { addToCart, toggleWishlist } = props;
    let products = props.products;
    products = products.slice( 0, 37 );

    let featuredProducts = getFeaturedProducts( products );

    return (
        <div className="container">
            <h2 className="title text-center mb-4">New Arrivals</h2>

            <div className="products">
                <div className="row justify-content-center">
                    {
                        featuredProducts.map( ( item, index ) =>
                            <div className="col-6 col-md-4 col-lg-3" key={ index + item.name }>
                                <ProductNine product={ item }
                                    adClass="text-center"
                                    key={ index + item.name }
                                    onAddToCart={ addToCart }
                                    onToggleWishlist={ toggleWishlist }
                                />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="more-container text-center mt-2">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-more"><span>show more</span></Link>
            </div>

        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( NewCollection );
