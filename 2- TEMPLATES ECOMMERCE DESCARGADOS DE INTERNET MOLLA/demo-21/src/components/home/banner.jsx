import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// import utils
import { safeContent } from '../../utils';

export default function Banner ( props ) {
    const { img, width = "300", height = "320", title, content, btnText = "Shop Now" } = props.data;

    return (
        <>
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

            <div className={ "banner-content" }>
                <div className="title">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( title ) }></Link>
                </div>

                <div className="content">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( content ) }></Link>
                </div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-demoprimary">
                        <span>{ btnText }</span>

                        <i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    )
}