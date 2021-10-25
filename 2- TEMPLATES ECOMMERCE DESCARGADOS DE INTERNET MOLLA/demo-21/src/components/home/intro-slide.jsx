import React from 'react';

// import utils
import { safeContent } from '../../utils';

export default function IntroSlide ( props ) {
    const { image, content, price, title, btnText = "DISCOVER NOW" } = props.data;

    return (
        <div className="intro-slide" style={ { backgroundImage: 'url(' + process.env.PUBLIC_URL + image + ')' } }>
            <div className="container intro-content">
                <div className="row">
                    <div className="intro">
                        <div className="title" dangerouslySetInnerHTML={ safeContent( title ) }>
                        </div>

                        <div className="content" dangerouslySetInnerHTML={ safeContent( content ) }>
                        </div>

                        <div className="price" dangerouslySetInnerHTML={ safeContent( price ) }>
                        </div>

                        <div className="action">
                            <a href={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-primary">
                                <span>{ btnText }</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}