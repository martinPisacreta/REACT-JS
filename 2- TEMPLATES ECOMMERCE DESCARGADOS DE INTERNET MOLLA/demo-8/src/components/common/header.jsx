import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import SearchForm from './partials/search-form';

function Header ( props ) {
    const { container = "container", isWishlist } = props;

    return (
        <header className="header">
            <div className="header-bottom sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="Molla Logo" width={ 82 } height={ 20 } />
                        </Link>
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <SearchForm />

                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{ isWishlist.length }</span>
                        </Link>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps ( state ) {
    return {
        isWishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps )( Header );