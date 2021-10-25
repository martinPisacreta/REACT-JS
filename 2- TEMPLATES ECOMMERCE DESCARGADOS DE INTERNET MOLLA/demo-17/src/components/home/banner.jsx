import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Utils
import { safeContent } from '../../utils';

function Banner( props ) {
    const { banner } = props;

    return (
        <div className={ `banner banner-overlay ${banner.adClass}` }>
            <Link to="#">
                <div className="lazy-overlay bg-3"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + banner.image }
                    alt="Banner"
                    width={ 100 }
                    height={ banner.height }
                    effect="blur"
                />
            </Link>

            <div className={ `banner-content banner-content-${banner.type}` }>
                <h4 className="banner-subtitle text-white"><Link to="#">{ banner.subtitle }</Link></h4>
                <h3 className="banner-title text-white"><Link to="#" dangerouslySetInnerHTML={ safeContent( banner.title ) }></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">{ banner.btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default Banner;