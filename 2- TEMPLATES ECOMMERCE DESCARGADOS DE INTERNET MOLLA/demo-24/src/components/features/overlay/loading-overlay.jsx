import React from 'react';

export default function PageOverlay ( props ) {
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