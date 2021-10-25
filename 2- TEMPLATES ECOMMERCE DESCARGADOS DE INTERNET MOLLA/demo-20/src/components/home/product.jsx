import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct{
    render(){
        const { product } = this.props;

        return(
            product ?  
            <div className="product">
                { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                
                <figure className="product-media">
                    { this.showProductImgSection() }
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        by&nbsp;
                        {product.author.map((author, index)=> (
                            <span key={ index} className="mr-0">
                                <Link to="#">{author}</Link>
                                {index<product.author.length-1 ? ' and ' : ''}
                            </span>
                        )) }
                    </div>

                    { this.showProductName() }
                    { this.showProductPrice( 'Was' ) }
                    
                    <div className="product-footer">
                        { this.showProductRating() }
                        
                        <div className="product-action"> 
                            { this.showAddToCartBtn() }
                            { this.showToggleWishlistBtn("btn-product btn-wishlist") }
                        </div>
                    </div>
                </div>

            </div> : ''           
        )
    }
}

export const mapStateToProps = ( state, ownprops ) => {
    let wishlist = false;
    if ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 )
        wishlist = true;
    return {
        wishlist: wishlist
    };
}

export default connect( mapStateToProps )(Product);