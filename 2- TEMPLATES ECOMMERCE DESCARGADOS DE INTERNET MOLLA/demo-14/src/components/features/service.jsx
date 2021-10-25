import React from 'react';

import OwlCarousel from '../features/owl-carousel';

// import jsons
import data from '../../mock_data/data';
import { serviceSlider } from '../settings';

function Service( props ) {
    const { adClass = "bg-transparent", iconAdClass = "text-dark" } = props;

    return (
        <div className={ `icon-boxes-container ${adClass}` }>
            <OwlCarousel adClass="owl-simple" carouselOptions={ serviceSlider }>
                { data.services.map( ( item, index ) =>
                    <div className="icon-box icon-box-side" key={ "service" + index }>
                        <span className={ `icon-box-icon ${iconAdClass}` }>
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
    )
}

export default React.memo( Service );