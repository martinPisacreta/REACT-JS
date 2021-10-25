import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-app-polyfill/ie11';

import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './store';

// import action
import { getAllProducts, refreshStore } from './actions';

// import routes
import AppRoute from './routes';

// import Utils
import { initFunctions } from './utils';

import LoadingOverlay from './components/features/loading-overlay';

export function Root () {
    initFunctions();
    store.dispatch( getAllProducts() );

    useEffect( () => {
        if ( store.getState().modal.current !== 24 ) {
            store.dispatch( refreshStore( 24 ) );
        }
    }, [] )

    return (
        <Provider store={ store } >
            <PersistGate persistor={ persistor } loading={ <LoadingOverlay /> }>

                <BrowserRouter basename={ '/' } >
                    <AppRoute />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) ); import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'react-app-polyfill/ie11';

import { PersistGate } from 'redux-persist/integration/react';

// import store
import store, { persistor } from './store';

// import action
import { getAllProducts } from './actions';

// import routes
import AppRoute from './routes';

// import Utils
import { initFunctions } from './utils';

import LoadingOverlay from './components/features/loading-overlay';

export function Root () {
    initFunctions();
    store.dispatch( getAllProducts() );

    return (
        <Provider store={ store } >
            <PersistGate persistor={ persistor } loading={ <LoadingOverlay /> }>
                <BrowserRouter basename={ '/' } >
                    <AppRoute />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

ReactDOM.render( <Root />, document.getElementById( 'root' ) );