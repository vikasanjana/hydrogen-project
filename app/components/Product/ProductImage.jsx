import { Image } from '@shopify/hydrogen'
import React from 'react'

const ProductImage = ({ image, sizes, aspectRatio }) => {
    return (
        <Image
            data={image}
            sizes={sizes}
            aspectRatio={aspectRatio}
        />
    )
}

export default ProductImage
