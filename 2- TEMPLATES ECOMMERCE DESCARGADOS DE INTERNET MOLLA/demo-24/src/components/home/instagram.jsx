import React from 'react';
import { Link } from 'react-router-dom';

function Instagram ( props ) {
    return (
        <div className="row">
            <div className="col-xl-5col col-md-3 col-6 instagram-feed">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/1.jpg` } alt="desc" />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>280</Link>

                    <Link to="#"><i className="icon-comments"></i>22</Link>
                </div>
            </div>

            <div className="col-xl-5col col-md-3 col-6 instagram-feed">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/2.jpg` } alt="desc" />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>280</Link>

                    <Link to="#"><i className="icon-comments"></i>22</Link>
                </div>
            </div>

            <div className="col-xl-5col col-md-3 col-6 instagram-feed">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/3.jpg` } alt="desc" />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>280</Link>

                    <Link to="#"><i className="icon-comments"></i>22</Link>
                </div>
            </div>

            <div className="col-xl-5col col-md-3 col-6 instagram-feed">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/4.jpg` } alt="desc" />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>280</Link>

                    <Link to="#"><i className="icon-comments"></i>22</Link>
                </div>
            </div>

            <div className="col-xl-5col col-md-3 col-6 instagram-feed">
                <img src={ `${process.env.PUBLIC_URL}/assets/images/home/instagram/5.jpg` } alt="desc" />

                <div className="instagram-feed-content">
                    <Link to="#"><i className="icon-heart-o"></i>280</Link>

                    <Link to="#"><i className="icon-comments"></i>22</Link>
                </div>
            </div>
        </div>
    )
}

export default Instagram;