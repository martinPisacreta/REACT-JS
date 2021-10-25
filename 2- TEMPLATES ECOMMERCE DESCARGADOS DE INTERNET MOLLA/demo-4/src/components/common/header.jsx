import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Custom Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import CategoryMenu from './partials/category-menu';
import CompareMenu from './partials/compare-menu';
import LoginModal from '../features/modal/login-modal';

import { showModal } from '../../actions';

function Header( props ) {
    const { container = "container" } = props;

    function openLoginModal( e ) {
        props.showModal( 'login' );
        e.preventDefault();
    }

    return (
        <header className="header header-intro-clearance header-4">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <Link to="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</Link>
                    </div>

                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul>

                                    <li>
                                        <div className="header-dropdown">
                                            <Link to="#">USD</Link>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><Link to="#">Eur</Link></li>
                                                    <li><Link to="#">Usd</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="header-dropdown">
                                            <Link to="#">English</Link>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><Link to="#">English</Link></li>
                                                    <li><Link to="#">French</Link></li>
                                                    <li><Link to="#">Spanish</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>

                                    <li><Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModal }>Sign in / Sign up</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width={ 105 } height={ 25 } />
                        </Link>
                    </div>

                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block" style={ { marginRight: 0 } }>
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="header-right">
                        <CompareMenu />

                        <div className="wishlist">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } title="Wishlist">
                                <div className="icon">
                                    <i className="icon-heart-o"></i>
                                    <span className="wishlist-count badge">{ props.wishlist.length }</span>
                                </div>
                                <p>Wishlist</p>
                            </Link>
                        </div>
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <CategoryMenu type={ 3 } />
                    </div>

                    <div className="header-center">
                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance<span className="highlight">&nbsp;Up to 30% Off</span></p>
                    </div>
                </div>
            </div>
            <LoginModal />
        </header>
    )
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );