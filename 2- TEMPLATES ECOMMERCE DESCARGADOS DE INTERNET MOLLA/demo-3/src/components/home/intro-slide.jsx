import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent, isIEBrowser } from '../../utils';

function IntroSlide( props ) {
    const { image, srcSet, subtitle, title, price, btnText = "Click Here" } = props.data;

    return (
        <div className="intro-slide">
            <figure className="slide-image">
                <picture style={ isIEBrowser() ? { height: '100%' } : {} }>
                    <source media="(max-width: 480px)" srcSet={ srcSet } />
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="desc" style={ isIEBrowser() ? { height: '100%' } : {} } width="780" height="400" />
                </picture>
            </figure>

            <div className="intro-content">
                <h3 className="intro-subtitle text-primary">{ subtitle }</h3>
                <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) }>
                </h1>
                <div className="intro-price" dangerouslySetInnerHTML={ safeContent( price ) }>
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary btn-round">
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default React.memo( IntroSlide );