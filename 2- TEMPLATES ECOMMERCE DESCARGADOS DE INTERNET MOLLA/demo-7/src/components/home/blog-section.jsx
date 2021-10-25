import React from 'react';

// import custom component
import OwlCarousel from '../features/owl-carousel';

import posts from '../../mock_data/posts';
import PostTen from '../features/post/post-ten';
import { blogSlider } from '../settings';

function BlogSection( props ) {
    return (
        <div className="blog-posts mb-4">
            <h2 className="title text-center mb-3">From Our Blog</h2>

            <OwlCarousel adClass="owl-simple mb-2" carouselOptions={ blogSlider } >
                {
                    posts.slice( 100, 104 ).map( ( item, index ) =>
                        <PostTen post={ item } key={ index } />
                    ) }
            </OwlCarousel>
        </div>
    )
}

export default React.memo( BlogSection );