import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Common Header Components
import MainMenu from './partials/main-menu';
import CartMenu from './partials/cart-menu';
import SearchToggle from './partials/search-toggle';

import { showModal } from '../../actions';

function Header( props ) {
    const { wishlist, container } = props;

    return (
        <header className="header header-9">
            <div className="header-middle sticky-header">
                <div className={ container }>
                    <div className="header-left">
                        <button className="mobile-menu-toggler">
                            <span className="sr-only">Toggle mobile menu</span>
                            <i className="icon-bars"></i>
                        </button>

                        <Link to={ `${process.env.PUBLIC_URL}/` } className="logo">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/logo.png` } alt="Molla Logo" width="82" height="25" />
                        </Link>
                    </div>

                    <div className="header-right">
                        <MainMenu />

                        <div className="header-right-icons d-flex">
                            <div className="header-search">
                                <SearchToggle />
                            </div>

                            <Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` } className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">{ wishlist.length }</span>
                            </Link>

                            <CartMenu />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

function mapStateToProps( state ) {
    return {
        wishlist: state.wishlist.list
    }
}
export default connect( mapStateToProps, { showModal } )( Header );


