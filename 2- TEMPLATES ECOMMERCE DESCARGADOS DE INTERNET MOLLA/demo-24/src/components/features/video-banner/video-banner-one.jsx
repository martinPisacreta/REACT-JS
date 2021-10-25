import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../../utils';

export default function VideoBannerOne( props ) {
    const { content, image, showModal } = props;

    const openVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <div className="video-banner video-banner-bg bg-image text-center" style={ { backgroundImage: `url( ${image} )` } }>
            <div className="container">
                <h3 className="video-banner-title h1 text-white" dangerouslySetInnerHTML={ safeContent( content ) }></h3>

                <Link to="#" className="btn-video btn-iframe" onClick={ openVideoModal }>
                    <i className="icon-play"></i>
                </Link>
            </div>
        </div>
    );
}