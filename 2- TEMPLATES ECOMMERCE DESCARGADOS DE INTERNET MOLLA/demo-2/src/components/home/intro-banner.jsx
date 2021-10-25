import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { safeContent } from '../../utils';

export default function IntroBanner( props ) {
    const { img, subtitle, title, btnText, adClass = "" } = props.data;

    return (
        <div className={ `banner banner-display ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay bg-2"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="banner"
                    width={ 370 }
                    height={ 205 }
                    effect="blur"
                />
            </Link>

            <div className="banner-content">
                <h4 className="banner-subtitle text-darkwhite"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link></h4>
                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( title ) }></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}