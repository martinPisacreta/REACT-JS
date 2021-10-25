import React from 'react';
import { Link } from 'react-router-dom';

// import custom component
import PostOne from '../features/post/post-one';
import OwlCarousel from '../features/owl-carousel';

// import Slider Settings
import { blogSlider } from '../settings';

// import Data
import posts_data from '../../mock_data/posts';

export default function BlogSection () {
    const posts = posts_data.slice( 100, 103 );

    return (
        <div className="container post">
            <div className="section-title">
                <div><p className="title"><span>Our Blog Posts</span></p></div>

                <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="link">See All Posts</Link>
            </div>

            <OwlCarousel adClass="owl-simple mb-4" carouselOptions={ blogSlider }>
                { posts.map( ( item, index ) =>
                    <PostOne adClass="" post={ item } key={ index } btnText="Continue reading" />
                ) }
            </OwlCarousel>
        </div>
    )
}