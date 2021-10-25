import React from 'react';
import { Link } from 'react-router-dom';

// import custom component
import PostOne from '../features/post/post-one';
import OwlCarousel from '../features/owl-carousel';

import { blogSlider } from '../settings';

import posts_data from '../../mock_data/posts';

export default function BlogSection() {
    const posts = posts_data.slice( 100, 103 );

    return (
        <div className="blog-posts">
            <div className="container">
                <h2 className="title text-center">From Our Blog</h2>

                <OwlCarousel adClass="owl-simple carousel-with-shadow cols-lg-3 cols-sm-2 cols-1" carouselOptions={ blogSlider } carouselId="blogSlider">
                    { posts.map( ( item, index ) =>
                        <PostOne post={ item } key={ index } />
                    ) }
                </OwlCarousel>

                <div className="more-container text-center mt-2">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-outline-darker btn-more"><span>View more articles</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}