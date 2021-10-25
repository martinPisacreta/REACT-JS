import React from 'react';

import BaseProduct from '../../features/product/common/base-product';

class ProductTwo extends BaseProduct {

    render(){
        const { product } = this.props;

        return(
            product ?  
            <div className="product product-sm">
                <figure className="product-media">
                    { this.showProductImgSection() }
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice( 'Was', 'Now' ) }
                </div>
            </div> : ''           
        )
    }
}

export default ProductTwo;