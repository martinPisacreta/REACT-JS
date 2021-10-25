import React from 'react';
import { Link } from 'react-router-dom';

function SearchForm () {
    return (
        <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
            <form action="#" method="get">
                <div className="header-search-wrapper search-wrapper-wide">
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product..." required />
                    <Link to="#" className="search-toggle" role="button"><i className="icon-search"></i></Link>
                </div>
            </form>
        </div>
    );
}

export default React.memo( SearchForm );