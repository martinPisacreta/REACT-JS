import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import SearchForm from './partials/search-form';
import LoginModal from '../features/modal/login-modal';

import { showModal } from '../../actions';

function Header ( props ) {
    const { isWishlist, showModal, container = "container" } = props;

    function openLoginModal ( e ) {
        showModal( 'login' );
        e.preventDefault();
    }

    function hideNotificationHandler ( e ) {
        document.querySelector( '.notification' ).style.display = "none";
        e.preventDefault();
    }

    return (
        <>
            <div className="notification" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/notification-back.jpg)` } }>
                <div className="notify-content">
                    <h3>FREE SHIPPING FOR ALL ORDERS OVER $50</h3>
                </div>
                <div className="notify-action">
                    <Link to="#"><i className="icon-close" onClick={ hideNotificationHandler }></i></Link>
                </div>
            </div>
            <header className="header">
                <div className="header-top">
                    <div className={ container }>
                        <div className="header-left">
                            <div className="header-dropdown">
                                <Link to="#">Usd</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">Eur</Link></li>
                                        <li><Link to="#">Usd</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="header-dropdown">
                                <Link to="#">Eng</Link>
                                <div className="header-menu">
                                    <ul>
                                        <li><Link to="#">English</Link></li>
                                        <li><Link to="#">French</Link></li>
                                        <li><Link to="#">Spanish</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="header-right">
                            <ul className="top-menu">
                                <li>
                                    <Link to="#">Links</Link>
                                    <ul>
                                        <li><Link to="tel: "><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About Us</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact Us</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` } data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header-middle sticky-header">
                    <div className={ container }>
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>

                            <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="Molla Logo" width="100" height="25" />
                            </Link>

                            <MainMenu />
                        </div>

                        <div className="header-right">
                            <SearchForm />

                            <div className="wishlist">
                                <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } title="Wishlist">
                                    <i className="icon-heart-o"></i>
                                    <span className="wishlist-count">{ isWishlist.length }</span>
                                </Link>
                            </div>

                            <CartMenu />
                        </div>
                    </div>
                </div>
                <LoginModal />
            </header>
        </>
    );
}

function mapStateToProps ( state ) {
    return {
        isWishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );