import React from 'react';

// import jsons
import data from '../../mock_data/data';

export default function Service( props ) {
    const { boxAdClass = "icon-box-side", textAdClass = "text-dark" } = props;

    return (
        <div className="row justify-content-center">
            { data.services.map( ( item, index ) =>
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