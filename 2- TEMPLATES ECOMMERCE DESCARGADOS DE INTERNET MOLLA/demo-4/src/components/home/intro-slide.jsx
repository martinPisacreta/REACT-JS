import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

function IntroSlide( props ) {
    const { image, title, subtitle, subtitleAdClass, price, btnText = "Shop More" } = props.data;
    let back = process.env.PUBLIC_URL + '/' + image;

    return (
        <div className="intro-slide" style={ { backgroundImage: `url( ${back} )` } } >
            <div className="container intro-content">
                <div className="row justify-content-end">
                    <div className="col-auto col-sm-7 col-md-6 col-lg-5">
                        <h3 className={ `intro-subtitle ${subtitleAdClass}` }>{ subtitle }</h3>
                        <h1 className="intro-title" dangerouslySetInnerHTML={ safeContent( title ) }></h1>

                        <div className="intro-price" dangerouslySetInnerHTML={ safeContent( price ) }>
                        </div>

                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary btn-round">
                            <span>{ btnText }</span>
                            <i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default React.memo( IntroSlide );