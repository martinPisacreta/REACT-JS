import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

export default function Banner ( props ) {
    const { bannerClass = "col-12", adClass = "", img, text = "", contentBoxAdClass = "", contentAdClass = "text-white", subtitle, width = "400", height = "400", title, btnText = "Shop Now" } = props.data;

    return (
        <div className={ bannerClass }>
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
                    <h4 className={ `banner-subtitle ${contentAdClass}` }>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ subtitle }</Link>
                    </h4>

                    <h3 className={ `banner-title ${contentAdClass}` }>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <span dangerouslySetInnerHTML={ safeContent( title ) }></span>
                        </Link>
                    </h3>

                    <div className={ `banner-text ${contentAdClass}` }>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <span>{ text }</span>
                        </Link>
                    </div>

                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">{ btnText }</Link>
                </div>
            </div>
        </div>
    )
}