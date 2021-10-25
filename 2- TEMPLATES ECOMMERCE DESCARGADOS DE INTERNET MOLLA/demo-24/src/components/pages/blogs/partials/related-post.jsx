import React from 'react';

import PostEight from '../../../features/post/post-eight';
import OwlCarousels from '../../../features/owl-carousel';

import { mainSlider1 } from '../../../settings';
import posts from '../../../../mock_data/posts';

export default function     RelatedPost() {
    return (
        <div className="related-posts">
            <h3 className="title">Related Posts</h3>
            <OwlCarousels adClass="owl-simple" carouselOptions={ mainSlider1 }>
            {
                <PostEight post = { posts[28] } isContent={ false } key = { posts[28].id } />
            }
            {
                posts.slice( 98, 100).map(( post, index ) =>
                    <PostEight post={ post } isContent={ false } key={ index }/>
                )
            }
            {
                <PostEight post = { posts[31] } isContent={ false } key = { posts[31].id } />
            }
            </OwlCarousels>
        </div>
    )
}