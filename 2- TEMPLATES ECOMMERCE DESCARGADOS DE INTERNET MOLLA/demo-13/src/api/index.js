import axios from 'axios';

const API_URL = process.env.PUBLIC_URL;

// API to get products from mock server
export const getProducts = function () {
    return axios.get( API_URL + '/mock-server/products.json' )
        .then( function ( response ) {
            return response.data;
        } )
        .catch( function ( error ) {
            // handle error
            console.log( error );
        } );
}