import { Await } from '@remix-run/react'
import React, { Suspense } from 'react'
import ProductCard from './ProductCard'
import { Aside } from '../Aside'

const ProductListing = ({ products }) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={products}>
                {(response) => (
                    <div className='productListing product-grid' >
                        {response
                            ? response.nodes.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                            : null}
                    </div>
                )}
            </Await>
            <Aside type="productDetails" heading="Product Details" />
        </Suspense>
    )
}

export default ProductListing
