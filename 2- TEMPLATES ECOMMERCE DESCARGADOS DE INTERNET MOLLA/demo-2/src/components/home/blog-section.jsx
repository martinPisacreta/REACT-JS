import React from 'react';
import { Link } from 'react-router-dom';

// import custom component
import PostTen from '../features/post/post-ten.jsx';
import OwlCarousel from '../features/owl-carousel';

import posts from '../../mock_data/posts';
import { blogSlider } from '../settings';

export default function PostGroup( props ) {
    return (
        <div className="blog-posts pt-7 pb-7" style={ { backgroundColor: '#fafafa' } }>
            <div className="container">
                <h2 className="title-lg text-center mb-3 mb-md-4">From Our Blog</h2>
                <OwlCarousel adClass="owl-simple carousel-with-shadow" carouselOptions={ blogSlider }>
                    { posts.slice( 100, 103 ).map( ( item, index ) =>
                        <PostTen post={ item } key={ index } adClass="entry-display" bodyClass="pb-4 text-center" />
                    ) }
                </OwlCarousel>

                <div className="more-container text-center mb-0 mt-3">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-outline-darker btn-more"><span>View more articles</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    )
}