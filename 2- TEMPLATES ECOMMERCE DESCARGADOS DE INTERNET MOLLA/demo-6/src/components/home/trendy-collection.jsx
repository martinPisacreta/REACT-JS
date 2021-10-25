import React from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// Import Slider Settings
import { productSlider } from '../settings';

// Import Services and Actions
import { getProductsByCategory, getFeaturedProducts } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

// Import Data
import _data from '../../mock_data/data.json';

function TrendyCollection ( props ) {
    const { addToCart, toggleWishlist } = props;

    let products = props.products;
    products = products.slice( 14, 37 );

    return (
        <Tabs className="container" selectedTabClassName="show">
            <div className="heading heading-center mb-3">
                <h2 className="title">Trending</h2>

                <TabList className="nav nav-pills justify-content-center">
                    { _data.category.map( ( cat, index ) =>
                        <Tab key={ index } className="nav-item">
                            <span className="nav-link">{ cat }</span>
                        </Tab>
                    ) }
                </TabList>
            </div>

            <div className="tab-content tab-content-carousel">
                { _data.category.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <OwlCarousel adClass="owl-simple carousel-with-shadow"
                            carouselOptions={ productSlider }>
                            {
                                getFeaturedProducts( getProductsByCategory( products, cat ) ).map( ( item, index ) =>
                                    <ProductNine product={ item }
                                        adClass="text-center"
                                        key={ index + item.name }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                    />
                                )
                            }
                        </OwlCarousel>
                    </TabPanel>
                ) }
            </div>
        </Tabs>
    )
}

function mapStateToProps ( state ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( TrendyCollection );
