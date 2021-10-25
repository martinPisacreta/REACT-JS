import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../utils';

function Banner( props ) {
    const { banner } = props;

    return (
        banner.type === 1 ?
            <div className="banner banner-overlay">
                <Link to="#">
                    <div className="lazy-overlay bg-2"></div>

                    <LazyLoadImage
                        src={ process.env.PUBLIC_URL + '/' + banner.image }
                        alt="Banner"
                        width={ 100 }
                        height={ 490 }
                        effect="blur"
                    />
                </Link>

                <div className="banner-content men">
                    <h2 className="banner-title text-white" dangerouslySetInnerHTML={ safeContent( banner.title ) }></h2>
                    <h3 className="banner-subtitle text-brightblack">IN THIS LOOK</h3>

                    <ul className="text-white">
                        { banner.variety.map( ( item, index ) =>
                            <li key={ index }>{ item }</li>
                        ) }
                    </ul>

                    <div className="banner-text text-brightblack">{ banner.text }</div>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-primary-2"><span>Buy All</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div> :

            banner.type === 2 ?
                <div className="banner banner-light banner-overlay">
                    <Link to="#">
                        <div className="lazy-overlay bg-3"></div>

                        <LazyLoadImage
                            src={ process.env.PUBLIC_URL + '/' + banner.image }
                            alt="Banner"
                            width={ 100 }
                            height={ 490 }
                            effect="blur"
                        />
                    </Link>

                    <div className="banner-content women">
                        <h2 className="banner-title" dangerouslySetInnerHTML={ safeContent( banner.title ) }></h2>
                        <h3 className="banner-subtitle text-darkblack">IN THIS LOOK</h3>

                        <ul>
                            { banner.variety.map( ( item, index ) =>
                                <li key={ index }>{ item }</li>
                            ) }
                        </ul>

                        <div className="banner-text text-darkblack">{ banner.text }</div>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-primary-2"><span>Buy All</span><i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div> : ''

    )
}

export default Banner;