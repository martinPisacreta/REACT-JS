import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

export default function banner( props ) {
    const { img, height, adClass = "", contentAdClass = "", subtitle, titleImg, title, price, mystyle = "", btnText = "Buy Now" } = props.banner;

    return (
        <div className={ `banner ${adClass} banner-overlay` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay bg-3"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="Banner"
                    width={ 100 }
                    height={ height }
                    effect="blur"
                />
            </Link>

            <div className={ `banner-content ${contentAdClass}` }>
                {
                    subtitle ?
                        <h4 className="banner-subtitle"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link></h4>
                        : ""
                }

                {
                    title ?
                        <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( title ) } ></Link></h3>
                        : <img className="banner-title-img " src={ process.env.PUBLIC_URL + '/' + titleImg } alt="Title Figure" style={ mystyle ? { marginBottom: '1.3rem', marginTop: '-.8rem' } : {} } />
                }

                {
                    price ?
                        <h4 className="banner-price" dangerouslySetInnerHTML={ safeContent( price ) } ></h4>
                        : ""
                }

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}