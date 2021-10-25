import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import CompareMenu from './partials/compare-menu';
import CategoryMenu from './partials/category-menu';
import SearchForm from './partials/search-form';
import LoginModal from '../features/modal/login-modal';

import { showModal } from '../../actions';

function Header ( props ) {
    const { container = "container", isWishlist, showModal } = props;

    function openLoginModal ( e ) {
        showModal( 'login' );
        e.preventDefault();
    }

    return (
        <header className="header header-22">
            <div className="header-middle">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="Molla Logo" width={ 130 } height={ 30 } />
                        </Link>
                    </div>

                    <div className="header-center">
                        <SearchForm />
                    </div>

                    <div className="header-right">
                        <CompareMenu />

                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link" title="Wishlist">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{ isWishlist.length }</span>
                        </Link>

                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="wrap-container sticky-header">
                <div className="header-bottom">
                    <div className={ container }>
                        <div className="header-left">
                            <CategoryMenu />
                        </div>
                        <div className="header-center">
                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <div className="header-text">
                                <ul className="top-menu top-link-menu">
                                    <li>
                                        <ul>
                                            <li><Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login / Registration</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LoginModal />
        </header>
    );
}

function mapStateToProps ( state ) {
    return {
        isWishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );