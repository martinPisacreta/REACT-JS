import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { safeContent } from '../../utils';

function CategoryBanner( props ) {
    const { categories, image, subtitle, title = "", height } = props.catban;
    let background = process.env.PUBLIC_URL + '/' + props.catban.background;

    return (
        <div className="cat-banner row no-gutters">
            <div className="cat-banner-list col-sm-6 d-xl-none d-xxl-flex" style={ { backgroundImage: `url(${background})` } }>
                <div className="banner-list-content">
                    <h2><Link to="#">{ categories[ 0 ] }</Link></h2>

                    <ul>
                        {
                            categories[ 1 ].map( ( item, index ) =>
                                <li key={ index }>
                                    <Link to="#">{ item }</Link>
                                </li>
                            )
                        }
                        <li className="list-all-link"><Link to="#">See All Departments</Link></li>
                    </ul>
                </div>
            </div>

            <div className="col-sm-6 col-xl-12 col-xxl-6">
                <div className="banner banner-overlay">
                    <Link to="#">
                        <div className="lazy-overlay bg-2"></div>

                        <LazyLoadImage
                            src={ process.env.PUBLIC_URL + '/' + image }
                            alt="Banner desc"
                            width={ 100 }
                            height={ height }
                            effect="blur"
                        />
                    </Link>

                    <div className="banner-content">
                        <h4 className="banner-subtitle text-white"><Link to="#">{ subtitle }</Link></h4>
                        <h3 className="banner-title text-white"><Link to="#" dangerouslySetInnerHTML={ safeContent( title ) } ></Link></h3>
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="banner-link">Shop Now <i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryBanner;