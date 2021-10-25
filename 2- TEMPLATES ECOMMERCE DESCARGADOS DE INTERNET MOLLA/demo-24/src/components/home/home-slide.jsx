import React from 'react';
import { Link } from 'react-router-dom';

// import utils
import { safeContent } from '../../utils';

export default function HomeSlide ( props ) {
    const { image, text, title, className, btnText = "discover now" } = props.data;

    return (
        <div className={ className } style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <div className="intro">

                <div className="title" dangerouslySetInnerHTML={ safeContent( title ) }>
                </div>

                <div className="content" dangerouslySetInnerHTML={ safeContent( text ) }></div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>{ btnText }</Link>
                </div>
            </div>
        </div>
    )
}