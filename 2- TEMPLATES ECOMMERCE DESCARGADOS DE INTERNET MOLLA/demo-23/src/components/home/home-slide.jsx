import React from 'react';

// import utils
import { safeContent } from '../../utils';

export default function HomeSlide ( props ) {
    const { image, subtitle, title, btnText = "discover now" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}${image})` } }>
            <div className="intro">
                <div className="title" dangerouslySetInnerHTML={ safeContent( subtitle ) }>
                </div>

                <div className="content" dangerouslySetInnerHTML={ safeContent( title ) }>
                </div>

                <div className="action" dangerouslySetInnerHTML={ safeContent( btnText ) }>
                </div>
            </div>
        </div>
    )
}