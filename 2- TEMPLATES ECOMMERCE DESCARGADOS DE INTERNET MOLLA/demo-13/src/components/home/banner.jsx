import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../utils';

export default function Banner( props ) {
    const { banner } = props;

    return (
        <div className={ `banner banner-overlay ${banner.adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay bg-2"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + banner.image }
                    alt="Banner"
                    width={ 100 }
                    height={ 260 }
                    effect="blur"
                />
            </Link>

            { banner.adClass === "banner-overlay-light" ?
                <div className="banner-content">
                    <h4 className="banner-subtitle"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ banner.subtitle }</Link></h4>
                    <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( banner.title ) }></Link></h3>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link banner-link-dark">{ banner.btnText }<i className="icon-long-arrow-right"></i></Link>
                </div> :
                <div className="banner-content">
                    <h4 className="banner-subtitle text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ banner.subtitle }</Link></h4>
                    <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( banner.title ) }></Link></h3>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">{ banner.btnText }<i className="icon-long-arrow-right"></i></Link>
                </div>
            }
        </div>
    )
}