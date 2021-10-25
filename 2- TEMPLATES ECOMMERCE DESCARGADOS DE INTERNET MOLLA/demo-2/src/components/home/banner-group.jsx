import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';

export default function BannerGroup( props ) {
    return (
        <div className="container categories pt-6">
            <h2 className="title-lg text-center mb-4">Shop by Categories</h2>

            <div className="row">
                <div className="col-sm-6 col-lg-4">
                    <div className="banner banner-display banner-link-anim">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <div className="lazy-overlay bg-2"></div>

                            <LazyLoadImage
                                src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-1.jpg` }
                                alt="Banner"
                                width={ 100 }
                                height={ 540 }
                                effect="blur"
                            />
                        </Link>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Outdoor</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-lg-4 order-lg-last">
                    <div className="banner banner-display banner-link-anim">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                            <div className="lazy-overlay bg-2"></div>

                            <LazyLoadImage
                                src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-4.jpg` }
                                alt="Banner"
                                width={ 100 }
                                height={ 540 }
                                effect="blur"
                            />
                        </Link>

                        <div className="banner-content banner-content-center">
                            <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Lighting</Link></h3>
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-4 banners-sm">
                    <div className="row">
                        <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                <div className="lazy-overlay bg-2"></div>

                                <LazyLoadImage
                                    src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-2.jpg` }
                                    alt="Banner"
                                    width={ 100 }
                                    height={ 260 }
                                    effect="blur"
                                />
                            </Link>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Furniture and Design</Link></h3>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>

                        <div className="banner banner-display banner-link-anim col-lg-12 col-sm-6 col-xs-12">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                <div className="lazy-overlay bg-2"></div>

                                <LazyLoadImage
                                    src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-3.jpg` }
                                    alt="Banner"
                                    width={ 100 }
                                    height={ 260 }
                                    effect="blur"
                                />
                            </Link>

                            <div className="banner-content banner-content-center">
                                <h3 className="banner-title text-white"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Kitchen & Utensil</Link></h3>
                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-white banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}