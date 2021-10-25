import React from 'react';
import { Link } from 'react-router-dom';

// Import utils
import { safeContent } from '../../utils';

export default function HomeSlide ( props ) {
    const { image, subtitle, aSubtitle, title, subImage, adClass, subClass, btnText = "SHOP NOW" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <div className={ `container intro-content ${adClass}` }>
                <h3 className="intro-subtitle">{ subtitle }</h3>

                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) }></h1>

                {
                    aSubtitle ? <h3 className="intro-subtitle">{ aSubtitle }</h3> : ""
                }

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
            <img className={ subClass } src={ process.env.PUBLIC_URL + subImage } alt="slider" />
        </div>
    )
}