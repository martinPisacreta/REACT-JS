import React, { useState, useEffect, useLayoutEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { matchPath } from 'react-router-dom';
import store from '../store';
import { Link } from 'react-router-dom';

// import Custom Components
import Header from './common/header';
import Footer from './common/footer';
import MobileMenu from './common/mobile-menu';

// import Utils
import { mobileMenu, preventProductDefault, removePreventProductDefault, stickyHeaderHandler } from '../utils';

// import Actions
import { closeQuickViewModal } from '../actions';

// import data
import { innerOverlayPaths } from '../mock_data/data';
import { isIEBrowser } from '../utils';

function App ( props ) {
    let matchedCount = 0;
    let overlayFlag = true;
    let flagHome = false;
    const [ container, setContainer ] = useState( "container" );
    const [ prevPath, setPrevPath ] = useState( '' );

    if ( window.location.pathname === process.env.PUBLIC_URL + '/' ) {
        flagHome = true;
    }

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

        // set the container type according to page grid type
        if ( props.location.pathname.indexOf( "fullwidth" ) !== -1 ) {
            setContainer( "container-fluid" );
        } else {
            setContainer( "container" );
        }

        // close exiting quickview modal
        if ( store.getState() && store.getState().data.quickView ) {
            store.dispatch( closeQuickViewModal() );
        }

        preventProductDefault();

        return () => {
            removePreventProductDefault();
        }
    } )

    return (
        <>
            <div className="page-wrapper">
                {
                    flagHome ?
                        <div className="background" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <Header urls={ prevPath } />

                            <div className="slider">
                                <div className="intro">
                                    <div className="title">
                                        <h3>Premium Outdoor Gear & Clothing</h3>
                                    </div>
                                    <div className="content">
                                        <h4><i>Our New Collectio  ns { ( new Date() ).getFullYear() }</i></h4>
                                        <h5>Ski & Snowboard</h5>
                                    </div>
                                    <div className="action">
                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>discover now</Link>
                                    </div>
                                </div>
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/sliders/bg-1.png` } alt="intro" width="1903" height="1080"
                                    style={ isIEBrowser() ? { width: '100%' } : {} } />
                            </div>


                        </div> : <div className="background" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/home/sliders/slide-1.jpg)` } }>
                            <Header urls={ prevPath } /></div>
                }

                {
                    props.children
                }

                <Footer container={ container } />

                <ToastContainer autoClose={ 3000 } className="toast-container" />
            </div>

            <MobileMenu />
        </>
    );
}

export default App;

