import React from 'react';
import { Link } from 'react-router-dom';

import { isIEBrowser } from '../../../utils';

function SearchForm () {
    return (
        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
            <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
            <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">Search</label>
                    <button className="btn btn-primary" type="submit" style={ { paddingLeft: isIEBrowser() ? '0' : '' } }>
                        <i className="icon-search"></i>
                    </button>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." style={ { paddingLeft: isIEBrowser() ? '30px' : '' } } required />
                </div>
            </form>
        </div>
    );
}

export default React.memo( SearchForm );