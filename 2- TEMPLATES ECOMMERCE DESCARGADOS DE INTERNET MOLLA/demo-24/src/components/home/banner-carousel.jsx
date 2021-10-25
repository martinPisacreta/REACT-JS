import React from 'react';
import { Link } from 'react-router-dom';

// import utils
import { safeContent } from '../../utils';

export default function BannerCarousel ( props ) {
    const { img, title, content, btnText = "Shop Now", img1 = "", adClass = "", width = "300", height = "200" } = props.data;
    return (
        <div className={ adClass }>
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="w-100">
                <img src={ `${process.env.PUBLIC_URL}/${img}` } width={ width } height={ height } alt="" />
            </Link>

            <div className="intro">
                <div className="title">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( title ) }></Link>
                </div>

                {
                    img1 === '' ? '' :
                        <div className="img-percent">
                            <img src={ `${process.env.PUBLIC_URL}/${img1}` } width="190" height="75" alt="banner" />
                        </div>
                }

                <div className="content">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } dangerouslySetInnerHTML={ safeContent( content ) }></Link>
                </div>

                <div className="action">
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        { btnText }
                    </Link>
                </div>
            </div>
        </div>
    )
}