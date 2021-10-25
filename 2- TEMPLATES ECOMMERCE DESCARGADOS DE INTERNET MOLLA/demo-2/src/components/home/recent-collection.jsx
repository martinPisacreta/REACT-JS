import React, { useState, useEffect, } from 'react';
import { connect } from "react-redux";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

// Import Custom Component
import ProductNine from '../features/product/product-nine';

import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';
import data from '../../mock_data/data.json';

function RecentCollection( props ) {
    const { addToCart, toggleWishlist } = props;
    const [ loadedCount, setLoadedCount ] = useState( 8 );
    const [ loading, setLoading ] = useState( false );
    const [ hasMore, setHasMore ] = useState( true );

    let products = props.products, timer;
    products = getProductsByCategory( products, [ "Furniture", "Decoration", "Lighting" ] );

    function loadMore() {
        if ( loadedCount < 16 ) {
            setLoading( true );

            timer = setTimeout( () => {
                setLoadedCount( loadedCount + 4 );
                setLoading( false );

                if ( loadedCount >= products.length - 4 ) {
                    setHasMore( false );
                }
            }, 2000 );
        }
    }

    useEffect( () => {
        return () => {
            if ( timer )
                clearTimeout( timer );
        }
    }, [] )

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" onSelect={ index => { } }>
            <div className="container">
                <div className="heading heading-center mb-7">
                    <h2 className="title">Recent Arrivals</h2>

                    <TabList className="nav nav-pills nav-border-anim justify-content-center" role="tablist">
                        { data.categories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ index }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                { data.categories.map( ( cat, index ) =>
                    <TabPanel key={ index }>
                        <div className="products">
                            <div className="row justify-content-center">
                                { getProductsByCategory( products.slice( 0, loadedCount ), cat ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3 mt-n5" key={ index }>
                                        <ProductNine product={ item }
                                            style={ `mt-v3` }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                            key={ index }
                                        />
                                    </div>
                                ) }
                            </div>
                        </div>
                    </TabPanel>
                ) }

                <div className="more-container text-center mt-n4 position-relative">
                    {
                        hasMore ?
                            <button className="btn btn-outline-darker btn-more" onClick={ loadMore }><span>Load more products</span>
                                { loading ?
                                    <i className="icon-refresh load-more-rotating"></i> :
                                    <i className="icon-long-arrow-down"></i>
                                }
                            </button>
                            : ''
                    }
                </div>
            </div>
        </Tabs>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( RecentCollection );
