import React from 'react';
import PostFive from '../features/post/post-three';
import OwlCarousels from '../features/owl-carousel';

import posts from '../../mock_data/posts';
import { blogSlider } from '../settings';

function BlogSection( props ) {
    return (
        <div className="blog-posts mb-9">
            <div className="container-fluid">
                <div className="heading text-center">
                    <h2 className="title">From Our Blog</h2>
                    <p className="title-desc">Donec odio. Quisque volutpat mattis eros. <br />Nullam malesuada erat</p>
                </div>

                <OwlCarousels adClass="owl-simple" carouselOptions={ blogSlider }>
                    { posts.slice( 100, 104 ).map( ( post, index ) =>
                        <PostFive post={ post } key={ `post_${index}` } />
                    ) }
                </OwlCarousels>
            </div>
        </div>
    )
}

export default BlogSection;