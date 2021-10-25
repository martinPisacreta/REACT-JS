import React from 'react';
import { connect } from 'react-redux';

import Banner from './banner';
import PostTen from '../features/post/post-ten';
import OwlCarousel from '../features/owl-carousel';
import ProductTen from '../features/product/product-ten';

// import Actions
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';
import { sidebarSlider } from '../settings';

import posts from '../../mock_data/posts';
import SmallProduct from '../features/product/product-sm';

function Sidebar( props ) {
    const { banners, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;
    let products = props.products;

    return (
        <aside className="col-xl-3 col-xxl-2 order-xl-first">
            <div className="sidebar sidebar-home">
                <div className="row">
                    <div className="col-sm-6 col-xl-12">
                        <div className="widget widget-banner">
                            <Banner data={ banners[ 0 ] } />
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-12 mb-2">
                        <div className="widget widget-products">
                            <h4 className="widget-title"><span>Bestsellers</span></h4>

                            <div className="products">
                                {
                                    products.slice( 36, 41 ).map( ( item, index ) =>
                                        <SmallProduct key={ "sm" + index } product={ item } />
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="widget widget-deals">
                            <h4 className="widget-title"><span>Special Offer</span></h4>

                            <div className="row">
                                {
                                    products.slice( 39, 41 ).map( ( item, index ) =>
                                        <div className="col-sm-6 col-xl-12" key={ "sidebar" + index }>
                                            <ProductTen
                                                product={ item }
                                                onAddToCart={ addToCart }
                                                onToggleWishlist={ toggleWishlist }
                                                onAddToCompare={ addToCompare }
                                                showQuickView={ showQuickViewModal }
                                            />
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-12">
                        <div className="widget widget-banner">
                            <Banner data={ banners[ 1 ] } />
                        </div>
                    </div>

                    <div className="col-sm-6 col-xl-12">
                        <div className="widget widget-posts">
                            <h4 className="widget-title"><span>Latest Blog Posts</span></h4>

                            <OwlCarousel adClass="owl-simple"
                                carouselOptions={ sidebarSlider }>
                                { posts.slice( 100, 103 ).map( ( item, index ) =>
                                    <PostTen post={ item } key={ index } />
                                ) }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal } )( Sidebar );