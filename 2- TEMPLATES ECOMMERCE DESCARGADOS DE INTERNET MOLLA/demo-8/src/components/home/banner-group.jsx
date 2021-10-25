import React from 'react';

// Import component
import Banner from './banner';

// Import Data
import data from '../../mock_data/data';

export default function BannerGroup () {
    return (
        <div className="banner-group">
            <div className="row">
                {
                    data.banner.slice( 0, 3 ).map( ( item, index ) =>
                        <div className="col-sm-6 col-lg-4" key={ `banner1 ${index}` }>
                            <Banner banner={ item } />
                        </div>
                    )
                }
            </div>
        </div>
    )
}