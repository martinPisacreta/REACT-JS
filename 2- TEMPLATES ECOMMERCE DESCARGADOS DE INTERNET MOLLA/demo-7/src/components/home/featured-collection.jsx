import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { getProductsByCategory, getFeaturedProducts } from '../../services';
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';
import data from '../../mock_data/data.json';

function FeaturedCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let products = props.products;
    products = getFeaturedProducts( products );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show">
            <div className="heading heading-center mb-3">
                <h2 className="title">FEATURED PRODUCTS</h2>

                <TabList className="nav nav-pills justify-content-center" role="tablist">
                    {
                        data.home_categories.map( ( item, index ) =>
                            <Tab className="nav-item" key={ item.key }>
                                <span className="nav-link">{ item.value }</span>
                            </Tab>
                        ) }
                </TabList>
            </div>

            { data.home_categories.map( ( item, index ) =>
                <TabPanel key={ item.key }>
                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                        { getProductsByCategory( products, item.key ).map( ( item, index ) =>
                            <ProductNine
                                product={ item }
                                key={ index + item.name }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                showQuickView={ showQuickViewModal }
                            />
                        ) }
                    </OwlCarousel>
                </TabPanel>
            ) }
        </Tabs>
    )
}

const mapStateToProps = ( state, props ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal } )( FeaturedCollection );