import React, { useState, useEffect } from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import ProductNine from '../features/product/product-nine';

import { getProductsByCategory } from '../../services';
import { addToCart, toggleWishlist, showQuickViewModal } from '../../actions';
import data from '../../mock_data/data.json';

function NewCollection( props ) {
    const { addToCart, toggleWishlist, showQuickViewModal } = props;
    const [ loadedCount, setLoadedCount ] = useState( 10 );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loading, setLoading ] = useState( false );
    let timer;

    let products = props.products;
    products = getProductsByCategory( products.slice( 35, 50 ), [ "Women", "Men" ] );

    function loadMore() {
        // fake async api. products should be fetched from backend
        if ( loadedCount < products.length ) {
            setLoading( true );

            timer = setTimeout( () => {
                setLoadedCount( loadedCount + 5 );
                setLoading( false );

                if ( loadedCount >= products.length - 5 ) {
                    setHasMore( false );
                }
            }, 2000 );
        } else {
            setHasMore( false );
        }
    }

    useEffect( () => {
        return () => {
            if ( timer ) clearTimeout( timer );
        }
    }, [] )

    return (
        <React.Fragment>
            <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                <div className="heading heading-center mb-3">
                    <h2 className="title">NEW ARRIVALS</h2>

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
                        <div className="products">
                            <div className="row justify-content-center">
                                {
                                    getProductsByCategory( products.slice( 0, loadedCount ), item.key ).map( ( product, index1 ) =>
                                        <div className="col-6 col-md-4 col-lg-3 col-xl-5col" key={ product.id + product.name }>
                                            <ProductNine
                                                product={ product }
                                                onAddToCart={ addToCart }
                                                onToggleWishlist={ toggleWishlist }
                                                showQuickView={ showQuickViewModal }
                                            />
                                        </div>
                                    ) }
                            </div>
                        </div>
                    </TabPanel>
                ) }
            </Tabs>

            <div className="more-container text-center mt-2">
                {
                    hasMore ?
                        <button className="btn btn-outline-dark-3 btn-more" onClick={ loadMore }><span>Load more</span>
                            { loading ?
                                <i className="icon-refresh load-more-rotating"></i> :
                                <i className="icon-long-arrow-right"></i>
                            }
                        </button>
                        : ''
                }
            </div>
        </React.Fragment>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, showQuickViewModal }
)( NewCollection );
