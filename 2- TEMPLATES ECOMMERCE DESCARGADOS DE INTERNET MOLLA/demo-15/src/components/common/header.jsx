import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Custom Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';

function Header( props ) {
    const { wishlist, logo = "assets/images/logo.png", container = "container" } = props;

    return (
        <header className="header header-5">
            <div className="header-middle sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ process.env.PUBLIC_URL + '/' + logo } alt="Molla Logo" width="105" height="25" />
                        </Link>

                        <MainMenu />
                    </div>

                    <div className="header-right">
                        <div className="header-search header-search-extended header-search-visible">
                            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                            <form action="#" method="get">
                                <div className="header-search-wrapper">
                                    <label htmlFor="q" className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>

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