import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

function IntroSlide( props ) {
    const { subtitle, title, text, btnText } = props.slide;
    let image = process.env.PUBLIC_URL + '/' + props.slide.image;

    return (
        <div className="intro-slide" style={ { backgroundImage: `url(${image})` } }>
            <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">{ subtitle }</h3>
                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent( title ) } ></h1>
                <div className="intro-text text-white"> { text } </div>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                    { btnText }
                </Link>
            </div>
        </div>
    )
}

export default React.memo( IntroSlide );