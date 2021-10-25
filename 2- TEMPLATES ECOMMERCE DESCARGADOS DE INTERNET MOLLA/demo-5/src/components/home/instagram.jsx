import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Instagram( props ) {
    const { img, likes, comments } = props.insta;
    return (
        <div className="feed-col">
            <div className="instagram-feed">
                <div className="lazy-overlay bg-2"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="instagram"
                    width={ 100 }
                    height={ 218 }
                    effect="blure"
                />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>{ likes }</Link>
                    <Link to="#"><i className="icon-comments"></i>{ comments }</Link>
                </div>
            </div>
        </div>
    )
}

export default Instagram;