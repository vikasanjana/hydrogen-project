import React from 'react'
import { decodeShopifyGID, getRating, getRatingCount } from '~/utils/utilities';
import { ProductImage } from '../ProductImage';
import ProductTitle from '../Product/ProductTitle';
import { ProductPrice } from '../Product/ProductPrice';
import ProductVaraintCount from '../Product/ProductVaraintCount';
import ProductAverageRating from '../Product/ProductAverageRating';
import { AddToCartButton } from '../Product/AddToCartButton';
import { SelectOptionsButton } from '../Product/SelectOptionsButton';
import { ProductForm } from '../Product/ProductForm';

const ProductCard = ({ product }) => {
    // const decodedId = decodeShopifyGID(product.id);
    const { title, featuredImage, variantsCount: { count }, metafields, selectedOrFirstAvailableVariant } = product;
    const rating = getRating(metafields)
    const ratingCount = getRatingCount(metafields)
    return (
        <div className='product-grid-item'>
            <div className="imageProduct">
                <ProductImage image={featuredImage} sizes="" aspectRatio="" />
            </div>
            <div className='product-content'>
                <ProductTitle title={title} />
                {
                    count > 1 &&
                    <ProductVaraintCount text={`${count} Shades`} />
                }
                <ProductPrice price={product?.priceRange.minVariantPrice} />
                {
                    ratingCount > 0 &&
                    <ProductAverageRating rating={rating} ratingCount={ratingCount} />
                }
                {
                    count === 1 ?
                        <ProductForm
                            product={product}
                            selectedVariant={selectedOrFirstAvailableVariant}
                            variants={product.variants.nodes}
                        /> :
                        <SelectOptionsButton product={product} >Select Shades</SelectOptionsButton>
                }
            </div>
        </div>
    )
}


export default ProductCard
