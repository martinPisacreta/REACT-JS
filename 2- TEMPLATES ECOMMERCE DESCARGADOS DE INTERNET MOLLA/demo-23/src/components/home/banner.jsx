import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import utils
import { safeContent } from '../../utils';

export default function Banner ( props ) {
    const { adClass, img, title, content, text = "", btnText = "Shop Now", width = "300", height = "1142" } = props.data;
    return (
        <div className={ `${adClass}` }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <div className="lazy-overlay"></div>

                <LazyLoadImage
                    alt="banner"
                    src={ `${process.env.PUBLIC_URL}/${img}` }
                    threshold={ 100 }
                    width={ width + 'px' }
                    height={ height + 'px' }
                    effect="blur"
                />
            </Link>

            <div className="intro">
                <div className="title" dangerouslySetInnerHTML={ safeContent( title ) }></div>

                <div className="content" dangerouslySetInnerHTML={ safeContent( content ) }></div>

                <p dangerouslySetInnerHTML={ safeContent( text ) }></p>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ btnText }<i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}