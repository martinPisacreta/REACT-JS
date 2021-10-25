import React from 'react';
import { Link } from 'react-router-dom';

// import custom component
import OwlCarousel from '../features/owl-carousel';

// import Slider Options
import { instagramSlider } from '../settings';

export default function Instagram ( props ) {
    const { adClass } = props;

    return (
        <div className={ adClass }>
            <OwlCarousel adClass="owl-simple" carouselOptions={ instagramSlider } >
                <div key="instagram-1" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/1.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>34</Link>

                        <Link to="#"><i className="icon-comments"></i>24</Link>
                    </div>
                </div>

                <div key="instagram-2" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/2.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>14</Link>

                        <Link to="#"><i className="icon-comments"></i>87</Link>
                    </div>
                </div>

                <div key="instagram-3" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/3.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>67</Link>

                        <Link to="#"><i className="icon-comments"></i>20</Link>
                    </div>
                </div>

                <div key="instagram-4" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/4.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>5</Link>

                        <Link to="#"><i className="icon-comments"></i>2</Link>
                    </div>
                </div>

                <div key="instagram-5" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/5.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>87</Link>

                        <Link to="#"><i className="icon-comments"></i>12</Link>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}