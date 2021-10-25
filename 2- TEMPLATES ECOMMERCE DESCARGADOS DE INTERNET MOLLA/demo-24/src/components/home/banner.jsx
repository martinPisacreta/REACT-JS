import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import utils
import { safeContent } from '../../utils';

export default function BannerGroup ( props ) {
    const { img, title, content, btnText = "Shop Now", img1 = "", adClass = "", width = "300", height = "200" } = props.data;

    return (
        <div className={ adClass }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="w-100">
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

            <div className="intro">
                <div className="title">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( title ) }></Link>
                </div>

                {
                    img1 === '' ? '' :
                        <div className="img-percent">
                            <img src={ `${process.env.PUBLIC_URL}/${img1}` } width="190" height="75" alt="banner" />
                        </div>
                }

                <div className="content">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( content ) }></Link>
                </div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        { btnText }
                    </Link>
                </div>
            </div>
        </div>
    )
}