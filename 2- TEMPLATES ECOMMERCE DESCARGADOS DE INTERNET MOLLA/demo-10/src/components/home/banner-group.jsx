import React from 'react';

// import Component
import Banner from './banner';

// import Data
import data from '../../mock_data/data.json';

export default function BannerGroup ( props ) {
    return (
        <div className="banner-group">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-sm-6">
                                <Banner item={ data.banner[ 0 ] } />
                            </div>

                            <div className="col-sm-6">
                                <Banner item={ data.banner[ 1 ] } />
                            </div>
                        </div>

                        <Banner item={ data.banner[ 2 ] } />
                    </div>

                    <div className="col-lg-4 d-sm-none d-lg-block">
                        <Banner item={ data.banner[ 3 ] } />
                    </div>
                </div>
            </div>
        </div>
    )
}