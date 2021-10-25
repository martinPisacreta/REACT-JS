import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { safeContent } from '../../utils';

function Banner( props ) {
    const { img, height, subtitle, title, btnText, adClass, contentAdClass, textColor = "text-white", btnAdClass } = props.banner;

    return (
        <div className={ `banner ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>
                <div className="lazy-overlay bg-3"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="Banner"
                    width={ 100 }
                    height={ height }
                    effect="opacity"
                />
            </Link>

            <div className={ `banner-content ${contentAdClass}` }>
                <h4 className={ `banner-subtitle ${textColor}` }><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>{ subtitle }</Link></h4>
                <h3 className={ `banner-title ${textColor}` }><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }><span dangerouslySetInnerHTML={ safeContent( title ) }></span></Link></h3>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className={ `btn underline ${btnAdClass}` } dangerouslySetInnerHTML={ safeContent( btnText ) }></Link>
            </div>
        </div>
    )
}

export default React.memo( Banner );