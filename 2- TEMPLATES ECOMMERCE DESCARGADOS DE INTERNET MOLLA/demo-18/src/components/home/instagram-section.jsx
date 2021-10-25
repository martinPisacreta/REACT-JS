import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousels from '../features/owl-carousel';

import { featureSlider4 } from '../settings';
import data from '../../mock_data/data';

export default function InstagramTwo( props ) {
    const { adClass = "" } = props;

    return (
        <OwlCarousels adClass={ `owl-simple ${adClass}` } carouselOptions={ featureSlider4 }>
            { data.instagram.map( ( item, index ) =>

                <div key={ index } className="instagram-feed">
                    <>
                        <div className="lazy-overlay bg-3"></div>

                        <LazyLoadImage
                            src={ process.env.PUBLIC_URL + '/' + item.img }
                            alt="img"
                            width={ 100 }
                            height={ 200 }
                            effect="blur"
                        />
                    </>

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>{ item.likes }</Link>
                        <Link to="#"><i className="icon-comments"></i>{ item.comments }</Link>
                    </div>
                </div>

            ) }
        </OwlCarousels>
    );
}