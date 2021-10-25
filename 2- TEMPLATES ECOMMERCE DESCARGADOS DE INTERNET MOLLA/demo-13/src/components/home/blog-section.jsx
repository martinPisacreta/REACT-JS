import React from 'react';

// import custom component
import PostTen from '../features/post/post-ten';
import OwlCarousel from '../features/owl-carousel';

import { blogSlider } from '../settings';
import posts from '../../mock_data/posts';

export default function PostGroup() {
    return (
        <div className="blog-posts bg-light pt-4 pb-7">
            <div className="container">
                <h2 className="title">From Our Blog</h2>

                <OwlCarousel adClass="owl-simple" carouselOptions={ blogSlider } >
                    { posts.slice( 100, 104 ).map( ( post, index ) =>
                        <PostTen post={ post } key={ `blog_${index}` } />
                    ) }
                </OwlCarousel>
            </div>
        </div>
    )
}