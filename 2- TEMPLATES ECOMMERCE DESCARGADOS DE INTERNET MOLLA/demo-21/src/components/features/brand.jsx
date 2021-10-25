import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousels from './owl-carousel';
import { brandSlider } from '../settings';

import _data from '../../mock_data/data.json';

function Brand ( props ) {
    const { adClass = "mt-5 mb-5 owl-simple", count = 6, start = 0, sliderOption = brandSlider } = props;

    return (
        <div className="container logos">
            <OwlCarousels adClass={ `${adClass} brand-carousel` } carouselOptions={ sliderOption } carouselId="brandslider">
                { _data.brands.default.slice( start, start + count ).map( ( vari, i ) => {
                    return (
                        <Link to="#" className="brand mr-0" key={ i } >
                            <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name } width="200" height="100" />
                        </Link>
                    )
                } )
                }
            </OwlCarousels>
        </div>
    )
}

export default Brand;