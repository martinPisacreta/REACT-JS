import React from 'react';

// Import Component
import Banner from './banner';

// Import Data
import data from '../../mock_data/data.json';

export default function BannerGroup ( props ) {
    return (
        <div className="banner-group">
            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <Banner item={ data.banner[ 0 ] } />
                </div>

                <div className="col-sm-6 col-lg-4 order-lg-last">
                    <Banner item={ data.banner[ 1 ] } />
                </div>

                <div className="col-12 col-lg-4">
                    <div className="row">
                        <div className="col-sm-6 col-lg-12" key="banner-3">
                            <Banner item={ data.banner[ 2 ] } />
                        </div>

                        <div className="col-sm-6 col-lg-12" key="banner-4">
                            <Banner item={ data.banner[ 3 ] } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}