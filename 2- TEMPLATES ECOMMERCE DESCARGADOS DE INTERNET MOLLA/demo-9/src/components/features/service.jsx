import React from 'react';

// import jsons
import _data from '../../mock_data/data';

import { serviceSlider } from '../settings';
import OwlCarousel from '../features/owl-carousel';

export default function ServiceBox ( props ) {
    const { adClass = "pt-0 pb-0" } = props;

    return (
        <div className={ `icon-boxes-container ${adClass}` }>
            <div className="container">
                <OwlCarousel adClass="owl-simple" carouselOptions={ serviceSlider } >
                    { _data.services.slice( 0, 4 ).map( ( item, index ) =>
                        <div className="icon-box icon-box-side" key={ index }>
                            <span className="icon-box-icon">
                                <i className={ item.icon }></i>
                            </span>

                            <div className="icon-box-content">
                                <h3 className="icon-box-title">{ item.title }</h3>
                                <p>{ item.subtitle }</p>
                            </div>
                        </div>
                    ) }
                </OwlCarousel>
            </div>
        </div>
    )
}