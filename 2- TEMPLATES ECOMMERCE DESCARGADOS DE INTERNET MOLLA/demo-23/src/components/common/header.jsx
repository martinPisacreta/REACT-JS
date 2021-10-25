import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import CartMenu from './partials/cart-menu';
import SearchForm from './partials/search-form';

import { getCartTotal } from '../../services';

function Header ( props ) {
    const { isWishlist, cartlist } = props;
    let total = getCartTotal( cartlist );

    return (
        <div className="sticky-wrapper">
            <div className="header sticky-header">
                <div className="header-left">
                    <button className="mobile-menu-toggler">
                        <span className="sr-only">Toggle mobile menu</span>
                        <i className="icon-bars"></i>
                    </button>

                    <SearchForm />
                </div>

                <div className="header-center text-center">
                    <p>Free Delivery For Members</p>
                </div>

                <div className="header-right">
                    <div className="account">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/dashboard` } title="My account">
                            <i className="icon-user"></i>
                        </Link>
                    </div>

                    <div className="wishlist">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } title="Wishlist">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count badge">{ isWishlist.length }</span>
                        </Link>
                    </div>

                    <CartMenu />

                    <p className="price">$ { total.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</p>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps ( state ) {
    return {
        isWishlist: state.wishlist.list,
        cartlist: state.cartlist.cart ? state.cartlist.cart : []
    }
}

export default connect( mapStateToProps )( Header );