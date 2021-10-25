import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import ProductNine from '../features/product/product-nine';

// import Services & Settings
import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

function NewCollection ( props ) {
    const { addToCart, toggleWishlist } = props;
    let categories = [ "All", "Women", "Men", "Shoes", "Accessories" ];
    let products = props.products;
    products = products.slice( 41, 51 );

    // let featuredProducts = getFeaturedProducts( products );

    return (
        <div className="container new-arrivals">

            <hr className="mb-5 mt-8" />

            <Tabs selectedTabClassName="show react-tabs__tab-panel--selected" defaultIndex={ 0 } >
                <div className="heading heading-center mb-3">
                    <h2 className="title">NEW ARRIVALS </h2>

                    <TabList className="nav nav-pills justify-content-center">
                        { categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ `arrival_${cat}` }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                <div className="tab-content tab-content-carousel">
                    { categories.map( ( cat, index ) =>
                        <TabPanel className="tab-pane p-0 react-tabs__tab-panel" key={ `arrivalpanel_${cat}` } selectedClassName="active show">
                            <div className="row">
                                { getProductsByCategory( products, cat ).map( ( product, index ) =>
                                    <div className="col-xl-5col col-lg-3 col-md-4 col-6" key={ `${cat}_${index}` }>
                                        <ProductNine
                                            type={ 2 }
                                            product={ product }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                        />
                                    </div>
                                ) }
                            </div>
                        </TabPanel>
                    ) }
                </div>
            </Tabs>

            <div className="text-center">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-viewMore">
                    <span>VIEW MORE PRODUCTS</span>

                    <i className="icon-long-arrow-right"></i>
                </Link>
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
