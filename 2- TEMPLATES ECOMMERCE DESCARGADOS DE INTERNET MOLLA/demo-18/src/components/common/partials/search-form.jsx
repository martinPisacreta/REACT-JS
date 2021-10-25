import React from 'react';

function SearchForm( props ) {
    const { adClass = "header-search-extended header-search-visible header-search-no-radius d-none d-lg-block", wrapper_adClass = "search-wrapper-wide" } = props;

    return (
        <div className={ `header-search ${adClass}` }>
            <button className="search-toggle"><i className="icon-search"></i></button>
            <form action="#" method="get">
                <div className={ `header-search-wrapper ${wrapper_adClass}` }>
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </div>
            </form>
        </div>
    );
}

export default React.memo( SearchForm );