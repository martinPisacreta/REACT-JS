import React from 'react';
import { Link } from 'react-router-dom';

import BaseProduct from '../../features/product/common/base-product';

class ProductTwo extends BaseProduct{
    render(){
        const { product } = this.props;

        return(
            product ?  
            <div className="product-big">

                <img src={ product.backPictures ? process.env.PUBLIC_URL + '/' + product.backPictures[0] : process.env.PUBLIC_URL + '/' + product.pictures[0] } alt="product bg" width="452" height="390" />

                <div className="product-wrap">
                    <figure className="product-media">
                        { this.showProductImgSection() }
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            by&nbsp;
                            {product.author.map((author, index)=> (
                                <span key={ index} className="mr-0">
                                    <Link to="#">{author}</Link>
                                     {index < product.author.length - 1 ? ' and ' : '' }
                                </span>
                            )) }
                        </div>

                        { this.showProductName() }
                        { this.showProductPrice() }

                        <div className="product-action"> 
                            { this.showAddToCartBtn() }
                        </div>
                    </div>
                </div>
            </div> : ''           
        )
    }
}

export default ProductTwo;