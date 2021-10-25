import React from 'react';
import { connect } from 'react-redux';

function PageOverlay( prop ) {
    const { isLoading } = props;
    return (
        <React.Fragment>
        {
            isLoading ? 
                <div className="loading-overlay">
                    <div className="root-loader bounce-loader">
                        <div className="bounce1"></div>
                        <div className="bounce2"></div>
                        <div className="bounce3"></div>
                    </div> 
                </div>
            : ''
        }
        </React.Fragment>
    )
}

const mapStateToProps = (state, props) => {
    return {
        isLoading: state.overlay.isOuterLoading
    }
}

export default connect( mapStateToProps )( PageOverlay );