import React from 'react';
import { Link } from 'react-router-dom';

function banner( props ) {
    const { image, name } = props.data;

    return (
        <div className="col-6 col-sm-4 col-lg-2">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="cat-block">
                <figure>
                    <span>
                        <img src={ process.env.PUBLIC_URL + '/' + image } alt="Category" />
                    </span>
                </figure>

                <h3 className="cat-block-title">{ name }</h3>
            </Link>
        </div>
    )
}

export default React.memo( banner );