import React from 'react';

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
        <section className="blog mb-6">
            <div className="container">
                <div className="heading">
                    <p className="heading-cat">Our Fresh News</p>

                    <h3 className="heading-title">New Blog Posts</h3>
                </div>

                <OwlCarousel adClass="owl-simple mb-4"
                    carouselOptions={ blogSlider }>
                    { posts.map( ( item, index ) =>
                        <PostOne adClass="" post={ item } key={ index } btnText="Read more" />
                    ) }
                </OwlCarousel>
            </div>
        </section>
    )
}