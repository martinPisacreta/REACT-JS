import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

function IntroSlide( props ) {
    const { image, subtitle, adClass = "", title, btnText, btn_adClass } = props.slide;

    return (
        <div className="intro-slide" style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <div className="container intro-content">
                <h3 className="intro-subtitle text-primary">{ subtitle }</h3>
                <h1 className={ `intro-title ${adClass}` } dangerouslySetInnerHTML={ safeContent( title ) } ></h1>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className={ `btn btn-outline-primary-2 ${btn_adClass} ` }>
                    <span>{ btnText }</span>
                    <i className="icon-long-arrow-right"></i>
                </Link>
            </div>
        </div>
    )
}

export default React.memo( IntroSlide );