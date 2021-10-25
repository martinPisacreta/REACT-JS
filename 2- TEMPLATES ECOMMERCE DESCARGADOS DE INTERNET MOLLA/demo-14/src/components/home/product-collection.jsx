import React from 'react';
import { connect } from 'react-redux';

// import Custom Components
import OwlCarousel from '../features/owl-carousel';

import CategoryBanner from './category-banner';
import ProductNine from '../features/product/product-nine';
import { productSlider1 } from '../settings';

// import Actions & Services & data
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

import data from '../../mock_data/data';
import { getProductsByCategory } from '../../services';

function ProductCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal, category } = props;

    let products = props.products;
    products = getProductsByCategory( products.slice( 35, 59 ), category );

    return (
        <div className="row cat-banner-row clothing">
            <div className="col-xl-3 col-xxl-4">
                <CategoryBanner catban={ data.categoryBanners[ props.index ] } />
            </div>

            <div className="col-xl-9 col-xxl-8">
                <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider1 }>
                    {
                        products.map( ( item, index ) =>
                            <ProductNine product={ item }
                                key={ category + '/' + index }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal } />
                        )
                    }
                </OwlCarousel>
            </div>
        </div>
    )
}

export const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default ( connect )( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( ProductCollection );