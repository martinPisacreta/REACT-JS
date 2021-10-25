import React from 'react';
import { Link } from 'react-router-dom';

// import Utils
import { safeContent } from '../../utils';

function ProductTwo ( props ) {
    const { product, adClass = "", height = "150" } = props;

    return (
        product ?
            <div className={ `product-lg ${adClass}` }>
                <figure className="product-media">

                    <span className="product-label label-limited">limited time sale</span>

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                        <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } alt="Product desc" className="product-image" style={ { minHeight: height + "px" } } />
                        {/* { product.pictures[ 1 ] ? <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 1 ] } alt={ 1 } className="product-image-hover" /> : '' } */ }
                    </Link>
                </figure>

                <div className="product-body">

                    <h3 className="save-price"><span>Save ${ ( product.price - product.salePrice ).toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span></h3>

                    <h3 className="product-title">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` } dangerouslySetInnerHTML={ safeContent( product.name ) }></Link>
                    </h3>

                    { 0 === product.stock ?
                        <div className="product-price">
                            <span className="out-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                            <span className="out-text">Out of Stock</span>
                        </div> :
                        0 < product.discount ?
                            <div className="product-price">
                                <span className="new-price">${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>

                                <span className="old-price">Was ${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                            </div> :
                            <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }

                    <div className="action">
                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>shop now</Link>
                    </div>
                </div>
            </div> : ''
    )
}

export default ProductTwo;