import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent, isIEBrowser } from '../../utils';

export default function IntroSlide( props ) {
    const { image, srcSet, subtitle, title, btnText = "SHOP NOW" } = props.data;

    return (
        <div className="intro-slide">
            <figure className="slide-image">
                <picture>
                    <source media="(max-width: 480px)" srcSet={ srcSet } />
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="Desc" width="780" height="441" style={ isIEBrowser() ? { height: '100%', width: 'auto' } : {} } />
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle">{ subtitle }</h3>
                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) } ></h1>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}