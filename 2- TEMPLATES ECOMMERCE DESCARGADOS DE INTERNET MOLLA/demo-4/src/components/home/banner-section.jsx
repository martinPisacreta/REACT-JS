import React from 'react';
import { Link } from 'react-router-dom';

function BannerSection( props ) {
    const { data } = props;

    return (
        <div className="container">
            <div className="row justify-content-center">
                { data.map( ( item, index ) =>
                    <div className="col-md-6 col-lg-4" key={ index }>
                        <div className="banner banner-group banner-overlay banner-overlay-light">
                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } >
                                <img src={ process.env.PUBLIC_URL + '/' + item.img } alt="Banner" />
                            </Link>

                            <div className="banner-content">
                                <h4 className="banner-subtitle">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ item.sub_title }</Link>
                                </h4>

                                <h3 className="banner-title">
                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ item.title } <strong>{ item.title_str } <br />{ item.title_br }</strong></Link>
                                </h3>

                                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Shop Now<i className="icon-long-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default React.memo( BannerSection );