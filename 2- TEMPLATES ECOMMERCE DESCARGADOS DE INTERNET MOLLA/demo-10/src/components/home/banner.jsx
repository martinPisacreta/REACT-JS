import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// import utils
import { safeContent } from '../../utils';

export default function Banner ( props ) {
    const { adClass = "", img, text = "", contentBoxAdClass = "", titleAdClass = "", subtitleAdClass = "", textAdClass = "", btnAdClass = "", subtitle, width = "400", height = "400", title, btnText = "Shop Now" } = props.data;

    return (
        <div className={ `banner banner-overlay ${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay"></div>

                <LazyLoadImage
                    src={ `${process.env.PUBLIC_URL}/${img}` }
                    alt="Banner"
                    width={ width + 'px' }
                    height={ height + 'px' }
                    effect="blur"
                />
            </Link>

            <div className={ `banner-content ${contentBoxAdClass}` }>
                <h4 className={ `banner-subtitle ${subtitleAdClass}` }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link>
                </h4>

                <h3 className={ `banner-title ${titleAdClass}` }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        <span dangerouslySetInnerHTML={ safeContent( title ) }></span>
                    </Link>
                </h3>

                <div className={ `banner-text ${textAdClass}` }>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }><span>{ text }</span></Link>
                </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className={ `btn btn-round banner-link ${btnAdClass}` }>{ btnText }</Link>
            </div>
        </div>
    )
}