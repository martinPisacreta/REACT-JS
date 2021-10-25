import React from 'react';
import Link from 'react-router-dom/Link';

// import custom component
import PostOne from '../features/post/post-one';
import OwlCarousel from '../features/owl-carousel';

import { blogSlider } from '../settings';
import posts from '../../mock_data/posts';

export default function BlogSection( props ) {
    return (
        <div className="blog-posts bg-light pt-4 pb-5">
            <div className="container">
                <div className="heading heading-flex mb-2">
                    <div className="heading-left">
                        <h2 className="title mb-0">From Our Blog</h2>
                    </div>

                    <div className="heading-right">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="title-link">View more articles <i className="icon-long-arrow-right"></i></Link>
                    </div>
                </div>

                <OwlCarousel adClass="owl-simple carousel-equal-height" carouselOptions={ blogSlider } carousel_id="post">
                    { posts.slice( 100.104 ).map( ( post, index ) =>
                        <PostOne
                            post={ post }
                            adClass=''
                            btnText=''
                            key={ `blog_${index}` }
                        />
                    ) }
                </OwlCarousel>
            </div>
        </div>
    )
}