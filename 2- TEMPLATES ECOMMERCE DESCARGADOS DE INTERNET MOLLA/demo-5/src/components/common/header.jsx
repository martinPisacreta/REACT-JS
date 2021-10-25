import React from 'react';
import { Link } from 'react-router-dom';

// import Custom Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';

function Header( props ) {
    const { logo = "assets/images/logo.png" } = props;

    return (
        <header className="header header-5">
            <div className="header-middle sticky-header">
                <div className="container-fluid">
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to="/" className="logo">
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
                        </Link>

                        <CartMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default React.memo( Header );