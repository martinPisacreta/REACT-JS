import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent, isIEBrowser } from '../../utils';

export default function IntroSlide( props ) {
    const { image, srcSet, subtitle, title, price, text, btnText } = props.slide;
    return (
        <div className="intro-slide">
            <figure className="slide-image">
                <picture style={ isIEBrowser() ? { height: '100%' } : {} }>
                    <source media="(max-width: 480px)" srcSet={ srcSet } />
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="desc" style={ isIEBrowser() ? { width: 'auto', height: '100%', maxWidth: '100%' } : {} } width="1180" height="500" />
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle">{ subtitle }</h3>
                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent( title ) }></h1>

                {
                    text ?
                        <div className="intro-text text-white" dangerouslySetInnerHTML={ safeContent( text ) }>
                        </div>
                        : ""
                }

                {
                    price ?
                        <div className="intro-price text-white" dangerouslySetInnerHTML={ safeContent( price ) }>
                        </div>
                        : ""
                }

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}