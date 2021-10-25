import React, { useEffect } from 'react';

function SearchForm () {
    useEffect( () => {
        document.querySelector( ".search-toggle" ).addEventListener( "click", onSearchToggleHandler );
        document.querySelector( ".header-search" ).addEventListener( "click", function ( e ) {
            e.stopPropagation();
        } );

        document.querySelector( "body" ).addEventListener( "click", onSearchToggleHandler1 );

        return () => {
            document.querySelector( ".search-toggle" ).removeEventListener( "click", onSearchToggleHandler );
            document.querySelector( ".header-search" ).addEventListener( "click", function ( e ) {
                e.stopPropagation();
            } );
            document.querySelector( "body" ).addEventListener( "click", onSearchToggleHandler1 );
        }
    } )

    function onSearchToggleHandler1 ( e ) {
        if ( document.querySelector( '.header-search-wrapper' ) && document.querySelector( '.header-search-wrapper' ).classList.contains( 'show' ) ) {
            document.querySelector( '.header-search-wrapper' ).classList.remove( 'show' );
            document.querySelector( '.search-toggle' ).classList.remove( 'active' );
            document.querySelector( "body" ).classList.remove( 'is-search-active' );
            e.preventDefault();
        }
    }

    function onSearchToggleHandler ( e ) {
        document.querySelector( '.header-search-wrapper' ).classList.toggle( 'show' );
        document.querySelector( '.search-toggle' ).classList.toggle( 'active' );
        document.querySelector( '.header-search-wrapper input' ).focus();
        e.preventDefault();
    }

    return (
        <div className="header-search">
            <a href="#dropdown" className="search-toggle" role="button" title="Search" ><i className="icon-search"></i></a>
            <form>
                <div className="header-search-wrapper">
                    <label htmlFor="q" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search in..." required />
                </div>
            </form>
        </div>
    );
}

export default React.memo( SearchForm );