import React from 'react';

// import jsons
import data from '../../mock_data/data';

export default function ServiceBox ( props ) {
    const { container = "container", adClass = "justify-content-center", iconAdClass = "", boxAdClass = "text-center" } = props;

    return (
        <div className={ container }>
            <div className={ `row ${adClass}` }>
                { data.services.slice( 0, 4 ).map( ( item, index ) =>
                    <div className="col-sm-6 col-lg-3 col-noPadding" key={ index }>
                        <div className={ `icon-box ${boxAdClass}` }>
                            <span className={ `icon-box-icon ${iconAdClass}` }>
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
        </div>
    )
}