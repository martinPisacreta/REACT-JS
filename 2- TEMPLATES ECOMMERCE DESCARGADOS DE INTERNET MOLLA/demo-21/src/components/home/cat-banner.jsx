import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

export default function Banner ( props ) {
    const { img, title, btnText = "SHOP NOW" } = props.data;

    return (
        <>
            <figure className="position-relative">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                    <div className="lazy-overlay"></div>

                    <LazyLoadImage
                        alt="banner"
                        src={ `${process.env.PUBLIC_URL}/${img}` }
                        threshold={ 100 }
                        width={ 300 }
                        height={ 200 }
                        effect="blur"
                    />
                </Link>
            </figure>

            <div className="banner-content">
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                    <h3 className="category">{ title }</h3>
                </Link>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="action">{ btnText }</Link>
            </div>
        </>
    )
}