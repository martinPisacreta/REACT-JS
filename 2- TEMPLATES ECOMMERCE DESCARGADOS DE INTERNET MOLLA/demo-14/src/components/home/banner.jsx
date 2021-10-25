import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

export default function Banner( props ) {
    const { adClass = "", contentAdClass = "", image, title, subtitle, price, btnText = "Shop Now", height } = props.data;

    return (
        <div className={ `banner banner-overlay ${adClass}` }>
            <Link to="#">
                <div className="lazy-overlay bg-3"></div>
                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + image }
                    width={ 100 }
                    height={ height }
                    effect="blur"
                />
            </Link>

            <div className={ `banner-content ${contentAdClass}` }>
                {
                    subtitle ?
                        <h4 className="banner-subtitle text-white d-none d-sm-block"><Link to="#">{ subtitle }</Link></h4>
                        : ""
                }

                {
                    title ?
                        <h3 className="banner-title text-white"><Link to="#" dangerouslySetInnerHTML={ safeContent( title ) }></Link></h3>
                        : ""
                }

                {
                    price ?
                        <div className="price text-center" dangerouslySetInnerHTML={ safeContent( price ) }></div>
                        : ""
                }

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    );
}