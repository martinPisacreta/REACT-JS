import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SmallProduct from '../features/product/product-sm';
import OwlCarousel from '../features/owl-carousel';
import PostTen from '../features/post/post-ten';

import { sidebarSlider } from '../settings';
import posts from '../../mock_data/posts';

function Sidebar( props ) {
    let products = props.products.slice( 39, 43 );

    return (
        <div className="sidebar sidebar-home">
            <div className="row">
                <div className="col-sm-6 col-lg-12">
                    <div className="widget widget-products">
                        <h4 className="widget-title">Best Selling</h4>

                        <div className="products">
                            {
                                products.map( ( item, index ) =>
                                    <SmallProduct product={ item } key={ index } />
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-12">
                    <div className="widget widget-subscribe" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/bg-newsletter.jpg)`, backgroundColor: "#348484" } }>
                        <h2 className="widget-title">Sign up for email <br />& get 25% off </h2>
                        <p>Subcribe to get information about products and coupons</p>

                        <form action="#">
                            <input type="email" className="form-control" placeholder="Enter your Email Address" required />

                            <input type="submit" className="btn btn-outline-white" value="Subscribe" />
                        </form>

                    </div>
                </div>

                <div className="col-sm-6 col-lg-12">
                    <div className="widget widget-banner">
                        <div className="banner banner-overlay">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-5.jpg` } alt="Banner" />
                            </Link>

                            <div className="banner-content">
                                <h4 className="banner-subtitle"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Spring { ( new Date() ).getFullYear() }</Link></h4>
                                <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>SAVE UP TO <br />50% OFF</Link></h3>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-lg-12">
                    <div className="widget widget-posts">
                        <h4 className="widget-title">New Blog Posts</h4>

                        <OwlCarousel adClass="owl-simple"
                            carouselOptions={ sidebarSlider }>
                            { posts.slice( 100, 102 ).map( ( item, index ) =>
                                <PostTen post={ item } key={ index } />
                            ) }
                        </OwlCarousel>

                    </div>
                </div>
            </div>
        </div >
    );
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps )( Sidebar );