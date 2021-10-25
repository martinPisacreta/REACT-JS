import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Import Custom Components
import OwlCarousels from '../features/owl-carousel';

// Import Slider Settings
import { featureSlider3 } from '../settings';

export default class Instagram extends Component {

    render () {
        return (
            <OwlCarousels adClass="owl-simple" carouselOptions={ featureSlider3 } >
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

                <div key="instagram-6" className="instagram-feed">
                    <img src={ process.env.PUBLIC_URL + '/assets/images/home/instagram/6.jpg' } alt="img" />

                    <div className="instagram-feed-content">
                        <Link to="#"><i className="icon-heart-o"></i>83</Link>

                        <Link to="#"><i className="icon-comments"></i>45</Link>
                    </div>
                </div>
            </OwlCarousels>
        );
    }
}