import React, { useState, useEffect } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';

import { getProductsByCategory, getNewProducts } from '../../services';
import { addToCart, toggleWishlist } from '../../actions';

import data from '../../mock_data/data.json';

function NewCollection( props ) {
    const { addToCart, toggleWishlist } = props;

    let timer;
    let products = props.products;
    products = getProductsByCategory( getNewProducts( products.slice( 35, 49 ) ), [ "Clothing", "Handbags", "Bags", "Shoes", "Boots", "Accessories" ] );

    const [ loadedCount, setLoadedCount ] = useState( 8 );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loading, setLoading ] = useState( false );

    function loadMore() {
        // fake async api. products should be fetched from backend
        if ( loadedCount < products.length ) {
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
            if ( timer ) clearTimeout( this.timer );
        }
    }, [] )

    return (
        <div className="container pt-6 new-arrivals">
            <Tabs selectedTabClassName="show" defaultIndex={ 0 }>
                <div className="heading heading-center mb-3">
                    <h2 className="title">New Arrivals</h2>

                    <TabList className="nav nav-pills justify-content-center" role="tablist">
                        { data.arrivalCategories.map( ( cat, index ) =>
                            <Tab className="nav-item" key={ `arrival_tab_${index}` }>
                                <span className="nav-link">{ cat }</span>
                            </Tab>
                        ) }
                    </TabList>
                </div>

                <div className="tab-content">
                    { data.arrivalCategories.map( ( cat, index1 ) =>
                        <TabPanel key={ `arrival_tabpanel_${index1}` }>
                            <div className="row justify-content-center">
                                { getProductsByCategory( products.slice( 0, loadedCount ), cat ).map( ( item, index ) =>
                                    <div className="col-6 col-md-4 col-lg-3" key={ index + item.name }>
                                        <ProductNine
                                            product={ item }
                                            key={ index + item.name }
                                            onAddToCart={ addToCart }
                                            onToggleWishlist={ toggleWishlist }
                                        />
                                    </div>
                                ) }
                            </div>
                        </TabPanel>
                    ) }
                </div>

                <div className="more-container text-center mt-1 mb-3">
                    {
                        hasMore ?
                            <button className="btn btn-outline-primary-2 btn-round btn-more" onClick={ loadMore }><span>Load more</span>
                                { loading ?
                                    <i className="icon-refresh load-more-rotating"></i> : ''
                                }
                            </button>
                            : ''
                    }
                </div>
            </Tabs>
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist }
)( NewCollection );
