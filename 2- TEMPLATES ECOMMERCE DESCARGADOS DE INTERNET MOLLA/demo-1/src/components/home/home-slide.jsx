import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

export default function HomeSlide( props ) {
    const { image, subtitle, title, btnText = "Shop Now" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <div className="container intro-content">
                <h3 className="intro-subtitle">{ subtitle }</h3>
                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) }></h1>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
)
}