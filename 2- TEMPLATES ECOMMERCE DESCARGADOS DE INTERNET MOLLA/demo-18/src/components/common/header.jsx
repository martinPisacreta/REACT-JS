import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Custom Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import SearchForm from './partials/search-form';

function Header( props ) {
    const { wishlist, container = "container" } = props;

    return (
        <header className="header header-11">
            <div className="header-middle sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <MainMenu />

                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                    </div>

                    <div className="header-center">
                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width="82" height="25" />
                        </Link>
                    </div>

                    <div className="header-right">
                        <SearchForm adClass="header-search-extended header-search-visible" wrapper_adClass="" />

                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{ wishlist.length }</span>
                        </Link>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}

export default ( connect )( mapStateToProps )( Header );