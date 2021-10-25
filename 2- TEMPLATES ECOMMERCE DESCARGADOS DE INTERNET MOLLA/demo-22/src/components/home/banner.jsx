import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import utils
import { safeContent } from '../../utils';

export default function BannerGroup ( props ) {
    const { img, title, content, btnText = "Discover Now", width = "300", height = "200" } = props.data;
    return (
        <>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay"></div>

                <LazyLoadImage
                    alt="banner"
                    width={ width + 'px' }
                    height={ height + 'px' }
                    src={ `${process.env.PUBLIC_URL}/${img}` }
                    threshold={ 200 }
                    effect="blur"
                />
            </Link>

            <div className="banner-content">
                <div className="title">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ title }</Link>
                </div>

                <div className="content">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( content ) }></Link>
                </div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        { btnText }
                    </Link>
                </div>
            </div>
        </>
    )
}