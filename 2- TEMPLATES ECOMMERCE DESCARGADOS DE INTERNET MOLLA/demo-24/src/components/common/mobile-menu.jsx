import React from 'react';
import { Link } from 'react-router-dom';

import MobileMainNav from './partials/mobile-nav';

export default function MobileMenu ( props ) {
    const { adClass } = props;

    return (
        <div className={ `mobile-menu-container ${adClass}` }>
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-close"></i></span>

                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <nav className="mobile-nav">
                    <MobileMainNav />
                </nav>

                <div className="social-icons">
                    <Link to="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
                </div>
            </div>
        </div>
    )
}