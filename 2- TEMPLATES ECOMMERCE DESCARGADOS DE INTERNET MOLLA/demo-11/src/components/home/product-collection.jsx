import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import ProductNine from '../features/product/product-nine';

import { toggleWishlist, showQuickViewModal, addToCart } from '../../actions';
import { getVisibleProducts } from '../../services';
import { isotopeLoad } from '../../utils';

function ProductCollection( props ) {
    let timer;
    const [ loadedCount, setLoadedCount ] = useState( 8 );
    const [ hasMore, setHasMore ] = useState( true );
    const [ loading, setLoading ] = useState( false );

    let { filters, toggleWishlist, showQuickViewModal, addToCart } = props;
    let products = props.products;
    products = getVisibleProducts( products.slice( 20, 35 ), filters );

    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.products-container', '.product-item', '.product-filter', "fitRows" );
    }, [ loadedCount ] )

    useEffect( () => {
        return () => {
            clearTimeout( timer );
        }
    }, [] )

    useEffect( () => {
        if ( loadedCount >= products.length ) {
            setHasMore( false );
        } else {
            setHasMore( true );
        }

        setLoadedCount( 8 );
        setLoading( false );
    }, [ filters ] )

    function loadMore() {
        // fake async api. products should be fetched from backend
        if ( products.length > loadedCount ) {
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

    return (
        <>
            <div className="products-container" data-layout="fitRows" key={ filters }>
                { products.slice( 0, loadedCount ).map( ( item, index ) =>
                    <div className={ `product-item col-6 col-md-4 col-lg-3 ${item.category.toString().replace( ',', ' ' )} ${item.discount > 0 ? 'Sale' : ''}` } key={ `product_${index}_${item.name}` }>
                        <ProductNine
                            product={ item }
                            key={ index + item.name }
                            onToggleWishlist={ toggleWishlist }
                            showQuickView={ showQuickViewModal }
                            onAddToCart={ addToCart }
                        />
                    </div>
                ) }
            </div>

            <div className="more-container text-center mt-0 mb-7">
                {
                    hasMore ?
                        true === loading ?
                            <button className="btn btn-outline-dark-3 btn-more" onClick={ loadMore }><span>more products</span><i className="icon-refresh load-more-rotating"></i>
                            </button>
                            :
                            <button className="btn btn-outline-dark-3 btn-more" onClick={ loadMore }><span>more products</span><i className="icon-refresh"></i>
                            </button>
                        : ''
                }
            </div>
        </>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }
}

export default connect(
    mapStateToProps, { toggleWishlist, showQuickViewModal, addToCart }
)( ProductCollection );
