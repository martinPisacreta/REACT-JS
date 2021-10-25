import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Custom Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';

import { isIEBrowser } from '../../utils';

function Header( props ) {
    const { wishlist, logo = "assets/images/logo.png", container = "container" } = props;

    return (
        <header className="header header-6">
            <div className="header-middle">
                <div className={ container }>
                    <div className="header-left">
                        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                    <input type="search" style={ isIEBrowser() ? { paddingLeft: '30px' } : {} } className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="header-center">
                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/${logo}` } alt="Molla Logo" width="82" height="20" />
                        </Link>
                    </div>

                    <div className="header-right">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                            <i className="icon-heart-o"></i>
                            <span className="wishlist-count">{ wishlist.length }</span>
                            <span className="wishlist-txt">My Wishlist</span>
                        </Link>
                        <CartMenu />
                    </div>
                </div>
            </div>

            <div className="header-bottom sticky-header" >
                <div className={ container }>
                    <div className="header-left">
                        <MainMenu />
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>
                    </div>

                    <div className="header-right">
                        <i className="la la-lightbulb-o"></i><p>Clearance Up to 30% Off</p>
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