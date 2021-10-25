import React from 'react';
import { Link } from 'react-router-dom';

// import custom component
import PostTen from '../features/post/post-ten';
import OwlCarousel from '../features/owl-carousel';

// import Slider Settings
import { blogSlider } from '../settings';

// import Data
import posts_data from '../../mock_data/posts';

export default function BlogSection () {
    const posts = posts_data.slice( 100, 104 );

    return (
        <div className="blog-posts">
            <div className="container">
                <h2 className="title-lg text-center mb-4">From Our Blog</h2>

                <OwlCarousel adClass="owl-simple mb-4" carouselOptions={ blogSlider }>
                    { posts.map( ( item, index ) =>
                        <PostTen post={ item } key={ index } bodyClass="text-center" />
                    ) }
                </OwlCarousel>

                <div className="more-container text-center mt-1">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-outline-lightgray btn-more btn-round">
                        <span>View more articles</span><i className="icon-long-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}