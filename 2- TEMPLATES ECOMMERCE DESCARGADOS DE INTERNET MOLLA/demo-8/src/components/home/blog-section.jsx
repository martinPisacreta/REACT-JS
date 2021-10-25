import React from 'react';

// import custom component
import PostOne from '../features/post/post-one';
import OwlCarousel from '../features/owl-carousel';

// Import Slider Settings
import { blogSlider } from '../settings';

// Import Data
import posts_data from '../../mock_data/posts';

export default function BlogSection () {
    const posts = posts_data.slice( 100, 103 );

    return (
        <div className="blog-posts mb-5">
            <div className="container">
                <h2 className="title text-center mb-4">From Our Blog</h2>

                <OwlCarousel adClass="owl-simple mb-3" carouselOptions={ blogSlider }>
                    { posts.map( ( item, index ) =>
                        <PostOne post={ item } key={ index } bodyClass="text-center p-0" btnText="Read More" />
                    ) }
                </OwlCarousel>
            </div>
        </div>
    )
}