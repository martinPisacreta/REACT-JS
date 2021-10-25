import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { safeContent } from '../..//utils';

function Banner( props ) {
    const { img, height, subtitle, title, btnText, adClass } = props.banner;

    return (
        <div className={ `banner ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay bg-3"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="banner"
                    width={ 100 }
                    height={ height + 'px' }
                    effect="blur"
                />
            </Link>

            <div className="banner-content">
                <h4 className="banner-subtitle d-lg-none d-xl-block"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link></h4>
                <h3 className="banner-title"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }><span dangerouslySetInnerHTML={ safeContent( title ) }></span></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-primary-2 banner-link">{ btnText }<i className="icon-long-arrow-right"></i></Link>
            </div>
        </div>
    )
}

export default React.memo( Banner );