import React, { Component } from 'react';

// import Data
import _data from '../../mock_data/data';

class ServiceBox extends Component {
    render () {

        const { boxAdClass = "icon-box-side", textAdClass = "text-dark" } = this.props;

        return (
            <div className="row justify-content-center">
                { _data.services.slice( 0, 3 ).map( ( item, index ) =>
                    <div className="col-sm-6 col-lg-4" key={ index }>
                        <div className={ `icon-box ${boxAdClass}` }>
                            <span className={ `icon-box-icon ${textAdClass}` }>
                                <i className={ item.icon }></i>
                            </span>

                            <div className="icon-box-content">
                                <h3 className="icon-box-title">{ item.title }</h3>

                                <p>{ item.subtitle }</p>
                            </div>
                        </div>
                    </div>
                ) }
            </div>
        )
    }
}

export default ServiceBox;