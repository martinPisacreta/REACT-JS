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
    const { container = "container", isWishlist, showModal } = props;

    function openLoginModal ( e ) {
        showModal( 'login' );
        e.preventDefault();
    }

    return (
        <header className="header header-6">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <ul className="top-menu top-link-menu d-none d-md-block">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="header-right">
                        <div className="social-icons social-icons-color">
                            <a href="https://www.facebook.com" className="social-icon social-facebook" rel="noopener noreferrer" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
                            <a href="https://twitter.com" className="social-icon social-twitter" rel="noopener noreferrer" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
                            <a href="https://pinterest.com" className="social-icon social-pinterest" rel="noopener noreferrer" title="Pinterest" target="_blank"><i className="icon-pinterest-p"></i></a>
                            <a href="https://instagram.com" className="social-icon social-instagram" rel="noopener noreferrer" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
                        </div>
                        <ul className="top-menu top-link-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>
                                    <li><Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModal }><i className="icon-user"></i>Login</Link></li>
                                </ul>
                            </li>
                        </ul>
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
                </div>
            </div>

            <div className="header-middle">
                <div className={ container }>
                    <div className="header-left">
                        <SearchForm />
                    </div>

                    <div className="header-center">
                        <Link to={ `${process.env.PUBLIC_URL}` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/home/logo.png` } alt="Molla Logo" width={ 82 } height={ 20 } />
                        </Link>
                    </div>

                    <div className="header-right">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{ isWishlist.length }</span>
                            <span className="wishlist-txt">My Wishlist</span>
                        </Link>
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
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