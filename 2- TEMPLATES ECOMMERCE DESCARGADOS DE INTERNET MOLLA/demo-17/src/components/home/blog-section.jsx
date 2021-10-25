import React from 'react';
import Link from 'react-router-dom/Link';

// import custom component
import PostOne from '../features/post/post-one';
import OwlCarousel from '../features/owl-carousel';

import { blogSlider } from '../settings';
import posts from '../../mock_data/posts';

export default function BlogSection( props ) {
    return (
        <div className="blog-posts">
            <div className="container">
                <div className="heading text-center">
                    <h2 className="title">New Blog Posts</h2>
                    <p className="title-desc">Donec nec justo eget felis facilisis fermentum.</p>
                </div>

                <OwlCarousel adClass="owl-simple mb-4" carouselOptions={ blogSlider } >
                    { posts.slice( 100, 103 ).map( ( post, index ) =>
                        <PostOne
                            adClass=""
                            bodyClass=""
                            btnText="Read More"
                            post={ post }
                            key={ `post_${index}` }
                        />
                    ) }
                </OwlCarousel>

                <div className="more-container text-center">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-outline-darker btn-more"><span>View more articles</span><i className="icon-long-arrow-right"></i></Link>
                </div>

                <hr className="mb-5" />
            </div>
        </div>
    )
}