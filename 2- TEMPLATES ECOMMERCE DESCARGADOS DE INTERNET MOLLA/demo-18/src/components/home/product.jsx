import React from 'react';
import { connect } from 'react-redux';

import BaseProduct from '../../features/product/common/base-product';

// import Utils
import { findIndex } from '../../../utils/utils';

class Product extends BaseProduct {

    render() {
        const { product } = this.props;

        return(
            product ?  
            <div className="product product-4">
                <figure className="product-media">
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }

                    { this.showProductImgSection() }

                    <div className="product-action-vertical">
                        { this.showToggleWishlistBtn("btn-product-icon btn-wishlist btn-expandable") }
                        { this.showQuickViewBtnWithIcon("btn-product-icon btn-quickview") }
                    </div>

                    <div className="product-action product-action-transparent">
                        { this.showAddToCartBtn() }
                    </div>
                </figure>

                <div className="product-body">
                    { this.showProductCatSection() }
                    { this.showProductName() }
                    { this.showProductPrice( 'Was', 'Now' ) }
                    { this.showProductVariants("rgb") }
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