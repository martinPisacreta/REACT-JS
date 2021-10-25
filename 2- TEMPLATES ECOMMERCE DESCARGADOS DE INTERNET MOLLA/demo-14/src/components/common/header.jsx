import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
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
        <header className="header header-14">
            <div className="header-top">
                <div className={ container }>
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i>Call: +0123 456 789</a>
                    </div>
                    <div className="header-right">
                        <ul className="top-menu">
                            <li>
                                <Link to="#">Links</Link>
                                <ul className="menus">
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

                                    <li className="login">
                                        <Link to="#signin-modal" data-toggle="modal" onClick={ openLoginModal }>Sign in / Sign up</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-middle">
                <div className={ container }>
                    <div className="row">
                        <div className="col-auto col-lg-3 col-xl-3 col-xxl-2">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">Toggle mobile menu</span>
                                <i className="icon-bars"></i>
                            </button>
                            <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width="105" height="25" />
                            </Link>
                        </div>
                        <div className="col col-lg-9 col-xl-9 col-xxl-10 header-middle-right">
                            <div className="row">
                                <div className="col-lg-8 col-xxl-4-5col d-none d-lg-block">
                                    <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                                        <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                                        <form action="#" method="get">
                                            <div className="header-search-wrapper search-wrapper-wide">
                                                <div className="select-custom">
                                                    <select id="cat" name="cat">
                                                        <option value="">All Departments</option>
                                                        <option value="1">Fashion</option>
                                                        <option value="2">- Women</option>
                                                        <option value="3">- Men</option>
                                                        <option value="4">- Jewellery</option>
                                                        <option value="5">- Kids Fashion</option>
                                                        <option value="6">Electronics</option>
                                                        <option value="7">- Smart TVs</option>
                                                        <option value="8">- Cameras</option>
                                                        <option value="9">- Games</option>
                                                        <option value="10">Home &amp; Garden</option>
                                                        <option value="11">Motors</option>
                                                        <option value="12">- Cars and Trucks</option>
                                                        <option value="15">- Boats</option>
                                                        <option value="16">- Auto Tools &amp; Supplies</option>
                                                    </select>
                                                </div>
                                                <label htmlFor="q" className="sr-only">Search</label>
                                                <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                                <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-xxl-5col d-flex justify-content-end align-items-center">
                                    <div className="header-dropdown-link">
                                        <CompareMenu />
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                                            <i className="icon-heart-o"></i>
                                            <span className="wishlist-count">{ props.wishlist.length }</span>
                                            <span className="wishlist-txt">Wishlist</span>
                                        </Link>
                                        <CartMenu />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bottom sticky-header">
                <div className={ container }>
                    <div className="row">
                        <div className="col-auto col-lg-3 col-xl-3 col-xxl-2 header-left">
                            <CategoryMenu />
                        </div>

                        <div className="col col-lg-6 col-xl-6 col-xxl-8 header-center">
                            <MainMenu />
                        </div>

                        <div className="col col-lg-3 col-xl-3 col-xxl-2 header-right">
                            <i className="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</p>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal />
        </header>

    );
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}

export default connect( mapStateToProps, { showModal } )( Header );