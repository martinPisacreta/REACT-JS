import React from 'react';

function SearchForm () {
    return (
        <div className={ "header-search header-search-extended header-search-visible header-search-no-round" }>
            <button className="search-toggle"><i className="icon-search"></i></button>
            <form action="#" method="get">
                <div className={ "header-search-wrapper search-wrapper-wide" }>
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </div>
            </form>
        </div>
    );
}

export default React.memo( SearchForm );