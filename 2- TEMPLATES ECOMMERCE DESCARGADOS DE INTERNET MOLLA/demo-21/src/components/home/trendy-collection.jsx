import React from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';

// import custom component
import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';

// import Actions & Services
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { getProductsByCategory } from '../../services';

// import Slider Settings
import { productSlider } from "../settings";

function TrendyCollection ( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;

    let categoryName = [ "Women", "Men" ];
    let products = props.products;
    products = products.slice( 15, 20 );

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show">
            <div className="heading heading-flex mb-3">
                <div className="heading-left">
                    <h2 className="title">Trending Now</h2>
                </div>

                <div className="heading-right">
                    <TabList className="nav nav-pills nav-border-anim justify-content-center">
                        { categoryName.map( ( cat, index ) =>
                            <Tab key={ index } className="nav-item">
                                <span className="nav-link">{ `${cat}'s Clothing` }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>
            </div>

            { categoryName.map( ( cat, index ) =>
                <TabPanel key={ index }>
                    <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow"
                        carouselOptions={ productSlider }>
                        {
                            getProductsByCategory( products, cat ).map( ( item, index ) =>
                                <ProductNine product={ item }
                                    adClass="text-center product-7"
                                    key={ index }
                                    onAddToCart={ addToCart }
                                    onToggleWishlist={ toggleWishlist }
                                    showQuickView={ showQuickViewModal }
                                />
                            )
                        }
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

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( TrendyCollection );