import React from 'react';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';
import CategoryBanner from './category-banner';
import OwlCarousel from '../features/owl-carousel';
import { bannerSlider } from '../settings';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import data from '../../mock_data/data';

function SoonCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;

    return (
        <>
            <div className="col-lg-7">
                <div className="products">
                    <div className="row">
                        { products.slice( 45, 51 ).map( ( product, index ) =>
                            <div className="col-6 col-md-4" key={ `gamesoon_${index}` }>
                                <ProductNine
                                    key={ `trending_${index}` }
                                    product={ product }
                                    onAddToCompare={ addToCompare }
                                    onToggleWishlist={ toggleWishlist }
                                    showQuickView={ showQuickViewModal }
                                    onAddToCart={ addToCart }
                                />
                            </div>
                        ) }
                    </div>
                </div>
            </div>

            <div className="col-lg-5 order-lg-first">
                <OwlCarousel adClass="games-banners-slider owl-simple" carouselOptions={ bannerSlider } >
                    { data.categoryBanners.map( ( banner, index ) =>
                        <CategoryBanner banner={ banner } key={ banner.img } />
                    ) }
                </OwlCarousel>
            </div>
        </>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)( SoonCollection );
