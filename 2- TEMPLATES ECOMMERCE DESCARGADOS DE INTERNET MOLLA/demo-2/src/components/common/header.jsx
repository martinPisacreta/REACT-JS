import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Custom Components
import MainMenu from './partials/main-menu';
import SearchToggle from './partials/search-toggle';
import CartMenu from './partials/cart-menu';
import LoginModal from '../features/modal/login-modal';

import { showModal } from '../../actions';

function Header( props ) {
    const { container = "container" } = props;

    function openLoginModal( e ) {
        props.showModal( 'login' );
        e.preventDefault();
    }

    return (
        <header className="header">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <div className="header-dropdown">
                            <Link to="#">USD</Link>
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
                                    <li><Link to="#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }><i className="icon-heart-o"></i>My Wishlist <span>({ props.isWishlist.length })</span></Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }  >About Us</Link></li>
                                    <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact Us</Link></li>
                                    <li><Link to="#login" data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login</Link></li>
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

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width={ 105 } height={ 25 } />
                        </Link>

                        <MainMenu />
                    </div>
                    <div className="header-right">
                        <SearchToggle />
                        <CartMenu />
                    </div>
                </div>
            </div>
            <LoginModal />
        </header>
    )
}

function mapStateToProps( state ) {
    return {
        isWishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );