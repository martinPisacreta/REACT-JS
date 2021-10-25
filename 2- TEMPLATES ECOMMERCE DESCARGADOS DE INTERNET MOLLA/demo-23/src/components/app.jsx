import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { matchPath } from 'react-router-dom';
import store from '../store';

// import Custom Components
import Header from './common/header';
import Footer from './common/footer';
import MobileMenu from './common/mobile-menu';

import Sidebar from './home/sidebar';

// import Utils
import { mobileMenu, preventProductDefault, removePreventProductDefault, stickyHeaderHandler } from '../utils';

// import Actions
import { closeQuickViewModal } from '../actions';

// import data
import { innerOverlayPaths } from '../mock_data/data';
import CategoryFilter from './features/sidebar/category-filter';

function App ( props ) {
    let matchedCount = 0;
    let overlayFlag = true;
    const [ categoryFlag, setCategoryFlag ] = useState( false );
    const [ prevPath, setPrevPath ] = useState( '' );

    useLayoutEffect( () => {
        overlayFlag = true;
        // set overlay
        for ( let i = 0; i < innerOverlayPaths.length; i++ ) {
            if ( prevPath.indexOf( innerOverlayPaths[ i ] ) > 0 && props.location.pathname.indexOf( innerOverlayPaths[ i ] ) > 0 ) {
                overlayFlag = false;
            }

            if ( prevPath === props.location.pathname ) {
                overlayFlag = false;
            }
        }

        if ( overlayFlag ) {
            document.querySelector( 'body' ).classList.remove( "loaded" );
            document.querySelector( "#root" ).classList.remove( "loaded" );
        }
    } )

    useEffect( () => {
        mobileMenu();

        stickyHeaderHandler();
        window.addEventListener( 'scroll', stickyHeaderHandler );

        return () => {
            window.removeEventListener( 'scroll', stickyHeaderHandler );
        }
    }, [] )

    useEffect( () => {
        // set prevPathname
        setPrevPath( props.location.pathname );

        // remove overlay
        setTimeout( () => {
            document.querySelector( "body" ).classList.add( "loaded" );
            document.querySelector( "#root" ).classList.add( "loaded" );
        }, 200 );

        // show 404 page
        while ( matchedCount < props.children.length && !matchPath( window.location.pathname, { path: props.children[ matchedCount ].props.path, exact: true } ) ) {
            matchedCount++;
        }

        if ( props.children && !props.children.length && matchPath( window.location.pathname, { path: props.children.props.path, exact: true } ) ) {
            matchedCount = 1;
        }

        if ( matchedCount >= props.children.length || ( props.children && !props.children.length && matchedCount === 0 ) ) {
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }

        // close exiting quickview modal
        if ( store.getState() && store.getState().data.quickView ) {
            store.dispatch( closeQuickViewModal() );
        }

        if ( props.location.pathname.indexOf( 'category' ) !== -1 ) {
            setCategoryFlag( true );
        }

        preventProductDefault();

        return () => {
            removePreventProductDefault();
        }
    } )

    return (
        <>
            <div className="page-wrapper">
                <div className="container page-container">
                    <Header urls={ prevPath } />
                    <Sidebar />

                    <div className="page-content-div">
                        {
                            props.children
                        }
                        <Footer />
                    </div>

                    {
                        categoryFlag ? <CategoryFilter /> : ''
                    }

                    <ToastContainer autoClose={ 3000 } className="toast-container" />
                </div>
            </div>

            <MobileMenu />
        </>
    );
}

export default App;