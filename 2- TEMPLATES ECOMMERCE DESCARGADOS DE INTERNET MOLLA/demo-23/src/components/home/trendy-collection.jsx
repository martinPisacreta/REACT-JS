import React from 'react';
import { connect } from 'react-redux';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from "../settings";

// import Actions
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';

function TrendyCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = products.slice( 37, 42 );

    return (
        <section className="trending">
            <div className="heading">
                <p className="heading-cat">new arrivals</p>

                <h3 className="heading-title">trending now</h3>
            </div>

            <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider }>
                { products.map( ( product, index ) =>
                    <ProductNine
                        key={ `product.name ${index}` }
                        product={ product }
                        onAddToCartk={ addToCart }
                        onToggleWishlist={ toggleWishlist }
                        showQuickView={ showQuickViewModal }
                    />
                ) }
            </OwlCarousel>
        </section>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( TrendyCollection );