import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Banner( props ) {
    const { adClass, height, img, title, subtitle, btnText = "Shop Now" } = props.banner;

    return (
        <div className={ `banner banner-display banner-link-anim ${adClass}` }>
            <Link to="#">
                <div className="lazy-overlay bg-3"></div>

                <LazyLoadImage
                    src={ process.env.PUBLIC_URL + '/' + img }
                    alt="banner"
                    height={ height }
                    width={ 100 }
                    threshold={ 300 }
                    effect="blur"
                />
            </Link>

            <div className="banner-content banner-content-center">
                <h3 className="banner-title text-white"><Link to="#">{ title }</Link></h3>
                {
                    subtitle ?
                        <h4 className="banner-subtitle text-white"><Link to="#">{ subtitle }</Link></h4> : ''
                }
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">{ btnText }</Link>
            </div>
        </div>
    );
}

export default React.memo( Banner );