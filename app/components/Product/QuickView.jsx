import React from 'react'
import ProductGallery from './ProductGallery';
import ProductTitle from './ProductTitle';
import { ProductPrice } from '../ProductPrice';
import { getRating, getRatingCount } from '~/utils/utilities';
import ProductAverageRating from './ProductAverageRating';
import { ProductForm } from '../ProductForm';

const QuickView = ({ product }) => {
    console.log(product);
    const { title, images, featuredImage, variantsCount: { count }, metafields, selectedOrFirstAvailableVariant, variants } = product;
    const rating = getRating(metafields)
    const ratingCount = getRatingCount(metafields)
    return (
        <div id='quickViewSidebar'>
            {/* Product Gallery */}
            <ProductGallery images={images.nodes} />

            {/* Product Title */}
            <ProductTitle title={title} />

            {/* Product Details contain price and rating */}
            <div className='product-price-details'>
                <div className='product-price-section'>
                    <ProductPrice price={product?.priceRange.minVariantPrice} />
                    <p>Inclusive of all taxes</p>
                </div>

                <div className='product-raring'>
                    {
                        ratingCount > 0 &&
                        <ProductAverageRating rating={rating} ratingCount={ratingCount} isQuickView={true} />
                    }
                </div>
            </div>

            {/*  */}
            <ProductForm
                product={product}
                selectedVariant={selectedOrFirstAvailableVariant}
                variants={variants || []}
            />
        </div>
    )
}

export default QuickView
