import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Actions
import { showModal } from '../../actions';

// import utils
import { isIEBrowser } from '../../utils';

function VideoBanner ( props ) {
    const { showModal } = props;

    function openVideoModalHandler ( e ) {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <section className="video-banner">
            <Link to={ `${process.env.PUBLIC_URL}` }>
                <div className="lazy-overlay"></div>

                <LazyLoadImage
                    alt="banner"
                    src={ `${process.env.PUBLIC_URL}/assets/images/home/banners/banner-9.jpg` }
                    threshold={ 100 }
                    width={ 1920 }
                    height={ 600 }
                    effect="blur"
                />
            </Link>

            <div className="intro video">
                <div className="title">
                    <h3><i>Spring / Summer</i></h3>
                </div>

                <div className="content">
                    <h4>New & Stylish<br />Collection { ( new Date() ).getFullYear() }</h4>
                </div>

                <div className="action">
                    <Link to="#" className="btn-iframe" onClick={ openVideoModalHandler }>
                        <i className="icon-play" style={ isIEBrowser() ? { textIndent: ".1rem" } : {} }></i>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default connect( null, { showModal } )( VideoBanner );