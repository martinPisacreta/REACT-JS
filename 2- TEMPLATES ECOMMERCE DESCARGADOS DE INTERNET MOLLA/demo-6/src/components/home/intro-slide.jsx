import React from 'react';
import { Link } from 'react-router-dom';

import { safeContent } from '../../utils';

export default function IntroSlide ( props ) {
    const { image, subtitle, title, btnText = "DISCOVER MORE" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/${image})` } }>
            <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">{ subtitle }</h3>

                <h1 className="intro-title text-white" dangerouslySetInnerHTML={ safeContent( title ) } ></h1>

                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` } className="btn btn-outline-white-4">
                    <span>{ btnText }</span>
                </Link>
            </div>
        </div>
    )
}